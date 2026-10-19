import { describe, expect, it } from 'vitest'
import { formatPrice } from './format'

describe('formatPrice', () => {
  it('prefixes the cedi sign and groups thousands', () => {
    expect(formatPrice(12500)).toBe('₵12,500')
    expect(formatPrice(30)).toBe('₵30')
    expect(formatPrice(0)).toBe('₵0')
  })
})
