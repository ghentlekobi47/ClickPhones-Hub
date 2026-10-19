import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removecart, selectCartItems, selectCartTotal, updatequan } from '../slice/cartSlice'
import { formatPrice } from '../utils/format'
import { getProduct } from '../Components/Brands/BrandInfo'

const stockFor = (id) => getProduct(id)?.stock ?? 0

const CartPage = () => {
  const cartItems = useSelector(selectCartItems)
  const totalAmount = useSelector(selectCartTotal)
  const dispatch = useDispatch()

  return (
    <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
      <title>Your Cart | ClickPhones Hub</title>
      <h2 className='mb-6 text-3xl font-semibold text-slate-800'>Your Cart</h2>
      <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
        {cartItems.length === 0 ? (
          <div className='py-10 text-center'>
            <p className='text-lg text-slate-600'>Your cart is empty.</p>
            <Link to='/brand' className='mt-6 inline-block rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700'>
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-slate-200 text-left text-sm'>
              <thead className='bg-slate-50 text-slate-700'>
                <tr>
                  <th className='px-4 py-3'>Product</th>
                  <th className='px-4 py-3'>Price</th>
                  <th className='px-4 py-3'>Quantity</th>
                  <th className='px-4 py-3'>Total</th>
                  <th className='px-4 py-3'><span className='sr-only'>Action</span></th>
                </tr>
              </thead>

              <tbody className='divide-y divide-slate-100'>
                {cartItems.map((product) => (
                  <tr key={product.id}>
                    <td className='px-4 py-3'>
                      <Link to={`/product/${product.id}`} className='flex items-center gap-4'>
                        <img src={product.image} alt={product.name} className='h-20 w-20 rounded-2xl object-cover' />
                        <span className='font-medium text-slate-700 hover:underline'>{product.name}</span>
                      </Link>
                    </td>
                    <td className='px-4 py-3 text-slate-600'>{formatPrice(product.price)}</td>
                    <td className='px-4 py-3'>
                      <div className='flex items-center gap-2'>
                        <button onClick={() => dispatch(updatequan({ pid: product.id, change: -1 }))} disabled={product.quantity <= 1} aria-label='Decrease quantity' className='rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-600 disabled:opacity-40'>-</button>
                        <span className='min-w-6 text-center text-sm font-medium'>{product.quantity}</span>
                        <button onClick={() => dispatch(updatequan({ pid: product.id, change: 1 }))} disabled={product.quantity >= stockFor(product.id)} aria-label='Increase quantity' className='rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-600 disabled:opacity-40'>+</button>
                      </div>
                    </td>
                    <td className='px-4 py-3 font-medium text-slate-700'>{formatPrice(product.price * product.quantity)}</td>
                    <td className='px-4 py-3'>
                      <button className='rounded-full bg-rose-500 px-3 py-2 text-sm font-semibold text-white' onClick={() => dispatch(removecart(product))}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='mt-6 flex flex-col items-end gap-4 border-t border-slate-200 pt-6'>
            <p className='text-lg text-slate-700'>
              Subtotal: <span className='font-semibold text-slate-900'>{formatPrice(totalAmount)}</span>
            </p>
            <p className='text-sm text-slate-500'>Delivery fee is calculated at checkout.</p>
            <div className='flex flex-wrap justify-end gap-3'>
              <Link to='/brand' className='rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50'>
                Continue Shopping
              </Link>
              <Link to='/checkout' className='rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700'>
                Proceed to Checkout
              </Link>
            </div>
          </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CartPage
