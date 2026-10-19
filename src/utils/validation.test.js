import { describe, expect, it } from 'vitest'
import { deliveryFee, isValidEmail, isValidGhanaPhone, validateCheckout } from './validation'

const validForm = {
  fullName: 'Ama Mensah',
  phone: '024 123 4567',
  email: 'ama@example.com',
  region: 'Ashanti',
  city: 'Kumasi',
  address: 'AK-039-5028',
  payment: 'cod',
  momoNumber: '',
  notes: '',
}

describe('validation', () => {
  it('accepts local and international Ghana numbers', () => {
    expect(isValidGhanaPhone('0241234567')).toBe(true)
    expect(isValidGhanaPhone('+233 55 123 4567')).toBe(true)
    expect(isValidGhanaPhone('024-123-4567')).toBe(true)
  })

  it('rejects malformed phone numbers', () => {
    expect(isValidGhanaPhone('12345')).toBe(false)
    expect(isValidGhanaPhone('0841234567')).toBe(false)
    expect(isValidGhanaPhone('02412345678')).toBe(false)
  })

  it('checks email format', () => {
    expect(isValidEmail('a@b.co')).toBe(true)
    expect(isValidEmail('not-an-email')).toBe(false)
  })

  it('passes a complete form', () => {
    expect(validateCheckout(validForm)).toEqual({})
  })

  it('reports each missing field', () => {
    const errors = validateCheckout({ ...validForm, fullName: '', phone: '', email: '', region: '', city: '', address: '' })
    expect(Object.keys(errors).sort()).toEqual(['address', 'city', 'email', 'fullName', 'phone', 'region'])
  })

  it('requires a Mobile Money number only for MoMo payments', () => {
    expect(validateCheckout({ ...validForm, payment: 'momo' }).momoNumber).toBeDefined()
    expect(validateCheckout({ ...validForm, payment: 'momo', momoNumber: '0551234567' })).toEqual({})
  })

  it('charges less for delivery in Kumasi', () => {
    expect(deliveryFee(' kumasi ')).toBe(30)
    expect(deliveryFee('Accra')).toBe(60)
  })
})
