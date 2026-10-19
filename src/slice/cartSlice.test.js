import { describe, expect, it } from 'vitest'
import reducer, { addtoCart, clearCart, rehydrateCart, removecart, selectCartCount, selectCartTotal, updatequan } from './cartSlice'
import { getProduct } from '../Components/Brands/BrandInfo'

const phone = getProduct(1)
const other = getProduct(2)
const empty = { cartItems: [] }
const withState = (cart) => ({ cart })

describe('cartSlice', () => {
  it('adds a slim cart item with the chosen quantity', () => {
    const state = reducer(empty, addtoCart({ product: phone, quantity: 2 }))
    expect(state.cartItems).toEqual([{ id: 1, name: phone.name, price: phone.price, image: phone.image, quantity: 2 }])
  })

  it('defaults to a quantity of 1', () => {
    const state = reducer(empty, addtoCart({ product: phone }))
    expect(state.cartItems[0].quantity).toBe(1)
  })

  it('merges quantities when the same product is added again', () => {
    let state = reducer(empty, addtoCart({ product: phone, quantity: 2 }))
    state = reducer(state, addtoCart({ product: phone, quantity: 3 }))
    expect(state.cartItems).toHaveLength(1)
    expect(state.cartItems[0].quantity).toBe(5)
  })

  it('never lets quantity drop below 1', () => {
    let state = reducer(empty, addtoCart({ product: phone }))
    state = reducer(state, updatequan({ pid: 1, change: -1 }))
    expect(state.cartItems[0].quantity).toBe(1)
    state = reducer(state, updatequan({ pid: 1, change: 1 }))
    expect(state.cartItems[0].quantity).toBe(2)
  })

  it('removes a product and clears the cart', () => {
    let state = reducer(empty, addtoCart({ product: phone }))
    state = reducer(state, addtoCart({ product: other }))
    state = reducer(state, removecart(phone))
    expect(state.cartItems.map((i) => i.id)).toEqual([2])
    state = reducer(state, clearCart())
    expect(state.cartItems).toEqual([])
  })

  it('computes total and item count', () => {
    let state = reducer(empty, addtoCart({ product: phone, quantity: 2 }))
    state = reducer(state, addtoCart({ product: other }))
    expect(selectCartTotal(withState(state))).toBe(phone.price * 2 + other.price)
    expect(selectCartCount(withState(state))).toBe(3)
  })

  it('takes price from the catalog, not the payload', () => {
    const state = reducer(empty, addtoCart({ product: { ...phone, price: 1 } }))
    expect(state.cartItems[0].price).toBe(phone.price)
  })

  it('ignores products that are not in the catalog', () => {
    const state = reducer(empty, addtoCart({ product: { id: 9999, name: 'Fake', price: 1 } }))
    expect(state.cartItems).toEqual([])
  })

  it('caps quantity at stock when adding and updating', () => {
    let state = reducer(empty, addtoCart({ product: phone, quantity: phone.stock + 5 }))
    expect(state.cartItems[0].quantity).toBe(phone.stock)
    state = reducer(state, addtoCart({ product: phone, quantity: 1 }))
    expect(state.cartItems[0].quantity).toBe(phone.stock)
    state = reducer(state, updatequan({ pid: 1, change: 1 }))
    expect(state.cartItems[0].quantity).toBe(phone.stock)
  })
})

describe('rehydrateCart', () => {
  it('replaces stale or tampered fields with catalog data', () => {
    const saved = [{ id: 1, name: 'Old', price: 79999, image: 'x.jpg', quantity: 2, specs: {} }]
    expect(rehydrateCart(saved)).toEqual([{ id: 1, name: phone.name, price: phone.price, image: phone.image, quantity: 2 }])
  })

  it('drops unknown ids, bad quantities and duplicates, and caps at stock', () => {
    const saved = [
      { id: 9999, quantity: 1 },
      { id: 2, quantity: 'abc' },
      { id: 2, quantity: 0 },
      { id: 1, quantity: 999 },
      { id: 1, quantity: 1 },
      null,
    ]
    expect(rehydrateCart(saved)).toEqual([{ id: 1, name: phone.name, price: phone.price, image: phone.image, quantity: phone.stock }])
  })

  it('returns an empty cart for non-array data', () => {
    expect(rehydrateCart(null)).toEqual([])
    expect(rehydrateCart({ id: 1 })).toEqual([])
  })
})
