import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calTotal, removecart, updatequan } from '../slice/cartSlice'

const CartPage = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calTotal())
  }, [cartItems, dispatch])

  return (
    <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
      <div className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
        {cartItems.length === 0 ? (
          <p className='text-center text-lg text-slate-600'>Your Cart is Empty</p>
        ) : (
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-slate-200 text-left text-sm'>
              <thead className='bg-slate-50 text-slate-700'>
                <tr>
                  <th className='px-4 py-3'>Image</th>
                  <th className='px-4 py-3'>Product Name</th>
                  <th className='px-4 py-3'>Price</th>
                  <th className='px-4 py-3'>Quantity</th>
                  <th className='px-4 py-3'>Update</th>
                  <th className='px-4 py-3'>Total</th>
                  <th className='px-4 py-3'>Action</th>
                </tr>
              </thead>

              <tbody className='divide-y divide-slate-100'>
                {cartItems.map((product, index) => (
                  <tr key={index}>
                    <td className='px-4 py-3'>
                      <img src={product.image} alt={product.name} className='h-20 w-20 rounded-2xl object-cover' />
                    </td>
                    <td className='px-4 py-3 font-medium text-slate-700'>{product.name}</td>
                    <td className='px-4 py-3 text-slate-600'>₹{product.price}</td>
                    <td className='px-4 py-3 text-slate-600'>{product.quantity}</td>
                    <td className='px-4 py-3'>
                      <div className='flex items-center gap-2'>
                        <button onClick={() => dispatch(updatequan({ pid: product.id, change: -1 }))} className='rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-600'>-</button>
                        <span className='min-w-6 text-center text-sm font-medium'>{product.quantity}</span>
                        <button onClick={() => dispatch(updatequan({ pid: product.id, change: 1 }))} className='rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-600'>+</button>
                      </div>
                    </td>
                    <td className='px-4 py-3 text-slate-600'>₹{product.price * product.quantity}</td>
                    <td className='px-4 py-3'>
                      <button className='rounded-full bg-rose-500 px-3 py-2 text-sm font-semibold text-white' onClick={() => dispatch(removecart(product))}>Remove</button>
                    </td>
                  </tr>
                ))}

                <tr className='bg-slate-50'>
                  <td colSpan={5} className='px-4 py-3 text-right font-semibold text-slate-700'>Grand Total :</td>
                  <td colSpan={2} className='px-4 py-3 font-semibold text-slate-800'>₹{totalAmount}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartPage