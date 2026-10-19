import React, { useCallback, useRef, useState } from 'react'
import { ToastContext } from './ToastContext'

const TOAST_DURATION = 3000

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])
  const nextId = useRef(0)

  const showToast = useCallback((message, type = 'success') => {
    const id = nextId.current++
    setToasts((current) => [...current, { id, message, type }])
    setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id))
    }, TOAST_DURATION)
  }, [])

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <div className='pointer-events-none fixed inset-x-0 bottom-4 z-60 flex flex-col items-center gap-2 px-4' aria-live='polite'>
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`brand-card-animate rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-lg ${toast.type === 'error' ? 'bg-rose-600' : 'bg-slate-900'}`}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export default ToastProvider
