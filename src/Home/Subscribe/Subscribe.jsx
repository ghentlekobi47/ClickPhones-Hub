import React from 'react'

const Subscribe = () => {
  return (
    <div className='mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='rounded-4xl bg-linear-to-r from-slate-900 via-slate-800 to-slate-700 px-6 py-8 text-white shadow-lg sm:px-10 lg:px-14 lg:py-12'>
        <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
          <div>
            <h1 className='text-2xl font-semibold sm:text-3xl'>Don't miss anything!</h1>
            <p className='mt-2 text-sm text-slate-300 sm:text-base'>Get the latest deals, launches, and exclusive offers straight to your inbox.</p>
          </div>
          <div className='flex flex-col gap-3 sm:flex-row'>
            <input type='text' placeholder='Enter your email address' className='w-full rounded-full border border-slate-600 bg-slate-800 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 sm:w-80' />
            <button className='rounded-full bg-rose-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-400'>Subscribe Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe