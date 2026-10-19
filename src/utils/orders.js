const ORDERS_STORAGE_KEY = 'clickphones-orders'

const loadOrders = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(ORDERS_STORAGE_KEY))
    return Array.isArray(saved) ? saved : []
  } catch {
    return []
  }
}

export const saveOrder = (order) => {
  try {
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify([...loadOrders(), order]))
  } catch {
    // storage unavailable — the confirmation page falls back to router state
  }
}

export const getOrder = (id) => loadOrders().find((order) => order.id === id)

export const createOrderId = () =>
  `CP-${Date.now().toString(36).toUpperCase()}${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`
