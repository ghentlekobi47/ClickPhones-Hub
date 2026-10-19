import React, { useState } from 'react'
import { isValidEmail } from '../../utils/validation'
import { useToast } from '../../Components/Toast/ToastContext'

const Subscribe = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const showToast = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address')
      return
    }
    setError('')
    setSubscribed(true)
    setEmail('')
    showToast('Thanks for subscribing!')
  }

  return (
    <div className='mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='rounded-4xl bg-linear-to-r from-slate-900 via-slate-800 to-slate-700 px-6 py-8 text-white shadow-lg sm:px-10 lg:px-14 lg:py-12'>
        <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
          <div>
            <h1 className='text-2xl font-semibold sm:text-3xl'>Don't miss anything!</h1>
            <p className='mt-2 text-sm text-slate-300 sm:text-base'>Get the latest deals, launches, and exclusive offers straight to your inbox.</p>
          </div>
          {subscribed ? (
            <p className='rounded-full bg-emerald-500/20 px-5 py-3 text-sm font-semibold text-emerald-300'>
              You're subscribed. Watch your inbox for deals!
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className='flex flex-col gap-3 sm:flex-row'>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email address'
                  aria-label='Email address'
                  aria-invalid={Boolean(error)}
                  className='w-full rounded-full border border-slate-600 bg-slate-800 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 sm:w-80'
                />
                <button type='submit' className='rounded-full bg-rose-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-400'>Subscribe Now</button>
              </div>
              {error && <p className='mt-2 px-4 text-xs text-rose-300'>{error}</p>}
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Subscribe
