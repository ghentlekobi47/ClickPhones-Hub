import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8'>
      <title>Page Not Found | ClickPhones Hub</title>
      <h2 className='text-3xl font-semibold text-slate-800'>Page Not Found</h2>
      <Link to='/' className='mt-6 inline-block rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700'>
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound
