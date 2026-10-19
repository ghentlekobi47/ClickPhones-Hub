import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { formatPrice } from '../utils/format'
import { getOrder } from '../utils/orders'

const PAYMENT_LABELS = { momo: 'Mobile Money', cod: 'Cash on Delivery' }

const OrderConfirmation = () => {
  const { id } = useParams()
  const location = useLocation()
  const order = getOrder(id) ?? (location.state?.order?.id === id ? location.state.order : null)

  if (!order) {
    return (
      <div className='mx-auto max-w-7xl px-4 py-16 text-center'>
        <title>Order Not Found | ClickPhones Hub</title>
        <h2 className='text-2xl font-semibold text-slate-800'>Order not found</h2>
        <p className='mt-2 text-slate-600'>We couldn't find order {id} in this browser.</p>
        <Link to='/brand' className='mt-6 inline-block font-semibold text-blue-600 hover:underline'>Continue shopping</Link>
      </div>
    )
  }

  const { customer } = order

  return (
    <div className='mx-auto max-w-3xl px-4 py-10 sm:px-6'>
      <title>{`Order ${order.id} | ClickPhones Hub`}</title>
      <div className='rounded-3xl border border-slate-200 bg-white p-8 shadow-sm'>
        <div className='text-center'>
          <FontAwesomeIcon icon={faCircleCheck} className='text-5xl text-emerald-500' />
          <h2 className='mt-4 text-3xl font-semibold text-slate-800'>Thank you, {customer.fullName.split(' ')[0]}!</h2>
          <p className='mt-2 text-slate-600'>Your order has been placed. We'll call you on {customer.phone} to confirm delivery.</p>
          <p className='mt-4 inline-block rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700'>Order #{order.id}</p>
        </div>

        <ul className='mt-8 divide-y divide-slate-100 border-t border-slate-200'>
          {order.items.map((item) => (
            <li key={item.id} className='flex items-center gap-4 py-4'>
              <img src={item.image} alt={item.name} className='h-16 w-16 rounded-xl object-cover' />
              <div className='flex-1'>
                <p className='font-medium text-slate-800'>{item.name}</p>
                <p className='text-sm text-slate-500'>Qty {item.quantity} × {formatPrice(item.price)}</p>
              </div>
              <span className='font-medium text-slate-700'>{formatPrice(item.price * item.quantity)}</span>
            </li>
          ))}
        </ul>

        <dl className='space-y-2 border-t border-slate-200 pt-4 text-sm'>
          <div className='flex justify-between'><dt className='text-slate-600'>Subtotal</dt><dd>{formatPrice(order.subtotal)}</dd></div>
          <div className='flex justify-between'><dt className='text-slate-600'>Delivery</dt><dd>{formatPrice(order.deliveryFee)}</dd></div>
          <div className='flex justify-between text-base font-semibold'><dt>Total</dt><dd>{formatPrice(order.total)}</dd></div>
        </dl>

        <div className='mt-8 grid gap-6 rounded-2xl bg-slate-50 p-5 text-sm sm:grid-cols-2'>
          <div>
            <h3 className='mb-2 font-semibold text-slate-800'>Delivering to</h3>
            <p className='text-slate-600'>{customer.fullName}<br />{customer.address}<br />{customer.city}, {customer.region}</p>
          </div>
          <div>
            <h3 className='mb-2 font-semibold text-slate-800'>Payment</h3>
            <p className='text-slate-600'>{PAYMENT_LABELS[order.payment]}</p>
            <p className='mt-1 text-slate-500'>Placed {new Date(order.placedAt).toLocaleString('en-GH')}</p>
          </div>
        </div>

        <div className='mt-8 text-center'>
          <Link to='/brand' className='inline-block rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700'>
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OrderConfirmation
