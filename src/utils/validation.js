export const GHANA_REGIONS = [
  'Ahafo', 'Ashanti', 'Bono', 'Bono East', 'Central', 'Eastern', 'Greater Accra', 'North East',
  'Northern', 'Oti', 'Savannah', 'Upper East', 'Upper West', 'Volta', 'Western', 'Western North',
]

// 0XX XXX XXXX or +233 XX XXX XXXX, mobile prefixes start with 2, 5 or 3 (e.g. 024, 055, 030)
const GHANA_PHONE = /^(?:0|\+233)[235]\d{8}$/
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const isValidGhanaPhone = (phone) => GHANA_PHONE.test(phone.replace(/[\s-]/g, ''))

export const isValidEmail = (email) => EMAIL.test(email.trim())

export const validateCheckout = (form) => {
  const errors = {}
  if (form.fullName.trim().length < 3) errors.fullName = 'Enter your full name'
  if (!isValidGhanaPhone(form.phone)) errors.phone = 'Enter a valid Ghana number, e.g. 024 123 4567'
  if (!isValidEmail(form.email)) errors.email = 'Enter a valid email address'
  if (!GHANA_REGIONS.includes(form.region)) errors.region = 'Choose your region'
  if (form.city.trim() === '') errors.city = 'Enter your town or city'
  if (form.address.trim().length < 5) errors.address = 'Enter a delivery address or GhanaPost GPS code'
  if (form.payment === 'momo' && !isValidGhanaPhone(form.momoNumber)) errors.momoNumber = 'Enter the Mobile Money number to charge'
  return errors
}

export const deliveryFee = (city) => (city.trim().toLowerCase() === 'kumasi' ? 30 : 60)
