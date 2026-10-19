import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, selectCartItems, selectCartTotal } from '../slice/cartSlice'
import { formatPrice } from '../utils/format'
import { createOrderId, saveOrder } from '../utils/orders'
import { GHANA_REGIONS, deliveryFee, validateCheckout } from '../utils/validation'
import { useToast } from '../Components/Toast/ToastContext'

const initialForm = {
  fullName: '',
  phone: '',
  email: '',
  region: '',
  city: '',
  address: '',
  payment: 'momo',
  momoNumber: '',
  notes: '',
}

const inputClass = (hasError) =>
  `w-full rounded-2xl border bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 ${hasError ? 'border-rose-400' : 'border-slate-300'}`

const Field = ({ label, id, error, children }) => (
  <div>
    <label htmlFor={id} className='mb-2 block text-sm font-medium text-slate-700'>{label}</label>
    {children}
    {error && <p className='mt-1 text-xs text-rose-500'>{error}</p>}
  </div>
)

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems)
  const subtotal = useSelector(selectCartTotal)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const showToast = useToast()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [placing, setPlacing] = useState(false)

  // Cart is cleared right after submit; show this instead of an empty summary
  // (and a still-clickable form) while the confirmation page loads.
  if (placing) {
    return (
      <div className='mx-auto max-w-7xl px-4 py-16 text-center text-slate-600 sm:px-6 lg:px-8'>
        Placing your order…
      </div>
    )
  }

  if (cartItems.length === 0) {
    return <Navigate to='/cart' replace />
  }

  const fee = deliveryFee(form.city)
  const total = subtotal + fee

  const update = (e) => {
    const { name, value } = e.target
    setForm((current) => ({ ...current, [name]: value }))
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const placeOrder = (e) => {
    e.preventDefault()
    if (placing) return
    const found = validateCheckout(form)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      showToast('Please fix the highlighted fields', 'error')
      return
    }

    const order = {
      id: createOrderId(),
      placedAt: new Date().toISOString(),
      items: cartItems,
      subtotal,
      deliveryFee: fee,
      total,
      customer: {
        fullName: form.fullName.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        region: form.region,
        city: form.city.trim(),
        address: form.address.trim(),
        notes: form.notes.trim(),
      },
      payment: form.payment,
    }

    setPlacing(true)
    saveOrder(order)
    navigate(`/order/${order.id}`, { replace: true, state: { order } })
    dispatch(clearCart())
    showToast('Order placed successfully')
  }

  return (
    <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
      <title>Checkout | ClickPhones Hub</title>
      <h2 className='mb-6 text-3xl font-semibold text-slate-800'>Checkout</h2>

      <form onSubmit={placeOrder} noValidate className='grid items-start gap-8 lg:grid-cols-3'>
        <div className='space-y-6 lg:col-span-2'>
          <section className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
            <h3 className='mb-4 text-lg font-semibold text-slate-800'>Delivery Details</h3>
            <div className='grid gap-4 sm:grid-cols-2'>
              <Field label='Full name' id='fullName' error={errors.fullName}>
                <input id='fullName' name='fullName' value={form.fullName} onChange={update} autoComplete='name' className={inputClass(errors.fullName)} />
              </Field>
              <Field label='Phone number' id='phone' error={errors.phone}>
                <input id='phone' name='phone' type='tel' value={form.phone} onChange={update} autoComplete='tel' placeholder='024 123 4567' className={inputClass(errors.phone)} />
              </Field>
              <Field label='Email' id='email' error={errors.email}>
                <input id='email' name='email' type='email' value={form.email} onChange={update} autoComplete='email' className={inputClass(errors.email)} />
              </Field>
              <Field label='Region' id='region' error={errors.region}>
                <select id='region' name='region' value={form.region} onChange={update} className={inputClass(errors.region)}>
                  <option value=''>Select region</option>
                  {GHANA_REGIONS.map((region) => <option key={region} value={region}>{region}</option>)}
                </select>
              </Field>
              <Field label='Town / City' id='city' error={errors.city}>
                <input id='city' name='city' value={form.city} onChange={update} autoComplete='address-level2' className={inputClass(errors.city)} />
              </Field>
              <Field label='Address or GhanaPost GPS' id='address' error={errors.address}>
                <input id='address' name='address' value={form.address} onChange={update} autoComplete='street-address' placeholder='e.g. AK-039-5028' className={inputClass(errors.address)} />
              </Field>
              <div className='sm:col-span-2'>
                <Field label='Delivery notes (optional)' id='notes'>
                  <textarea id='notes' name='notes' rows={3} value={form.notes} onChange={update} className={inputClass(false)} />
                </Field>
              </div>
            </div>
          </section>

          <section className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
            <h3 className='mb-4 text-lg font-semibold text-slate-800'>Payment Method</h3>
            <div className='grid gap-3 sm:grid-cols-2'>
              {[
                { value: 'momo', label: 'Mobile Money', hint: 'MTN MoMo, Telecel Cash, AT Money' },
                { value: 'cod', label: 'Cash on Delivery', hint: 'Pay when your phone arrives' },
              ].map((option) => (
                <label key={option.value} className={`cursor-pointer rounded-2xl border p-4 transition ${form.payment === option.value ? 'border-slate-900 bg-slate-50' : 'border-slate-200'}`}>
                  <input type='radio' name='payment' value={option.value} checked={form.payment === option.value} onChange={update} className='mr-2' />
                  <span className='font-semibold text-slate-800'>{option.label}</span>
                  <span className='mt-1 block text-xs text-slate-500'>{option.hint}</span>
                </label>
              ))}
            </div>
            {form.payment === 'momo' && (
              <div className='mt-4 max-w-sm'>
                <Field label='Mobile Money number' id='momoNumber' error={errors.momoNumber}>
                  <input id='momoNumber' name='momoNumber' type='tel' value={form.momoNumber} onChange={update} placeholder='055 123 4567' className={inputClass(errors.momoNumber)} />
                </Field>
              </div>
            )}
          </section>
        </div>

        <aside className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24'>
          <h3 className='mb-4 text-lg font-semibold text-slate-800'>Order Summary</h3>
          <ul className='divide-y divide-slate-100'>
            {cartItems.map((item) => (
              <li key={item.id} className='flex items-center gap-3 py-3'>
                <img src={item.image} alt={item.name} className='h-14 w-14 rounded-xl object-cover' />
                <div className='flex-1 text-sm'>
                  <p className='font-medium text-slate-800'>{item.name}</p>
                  <p className='text-slate-500'>Qty {item.quantity}</p>
                </div>
                <span className='text-sm font-medium text-slate-700'>{formatPrice(item.price * item.quantity)}</span>
              </li>
            ))}
          </ul>
          <dl className='mt-4 space-y-2 border-t border-slate-200 pt-4 text-sm'>
            <div className='flex justify-between'><dt className='text-slate-600'>Subtotal</dt><dd>{formatPrice(subtotal)}</dd></div>
            <div className='flex justify-between'>
              <dt className='text-slate-600'>Delivery {form.city.trim() ? `(${form.city.trim()})` : ''}</dt>
              <dd>{formatPrice(fee)}</dd>
            </div>
            <div className='flex justify-between border-t border-slate-200 pt-2 text-base font-semibold'><dt>Total</dt><dd>{formatPrice(total)}</dd></div>
          </dl>
          <p className='mt-2 text-xs text-slate-500'>Delivery within Kumasi is {formatPrice(30)}; everywhere else in Ghana is {formatPrice(60)}.</p>
          <button type='submit' disabled={placing} className='mt-6 w-full rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700 disabled:opacity-60'>
            Place Order
          </button>
          <Link to='/cart' className='mt-3 block text-center text-sm font-medium text-slate-600 hover:underline'>Back to cart</Link>
          <p className='mt-4 text-center text-[11px] text-slate-400'>Demo store: no payment is taken and orders are saved only in this browser.</p>
        </aside>
      </form>
    </div>
  )
}

export default CheckoutPage
