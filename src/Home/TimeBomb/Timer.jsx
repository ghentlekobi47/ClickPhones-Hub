import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// The daily deal ends at local midnight
const msUntilMidnight = () => {
  const now = new Date()
  const midnight = new Date(now)
  midnight.setHours(24, 0, 0, 0)
  return midnight - now
}

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(msUntilMidnight)

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(msUntilMidnight()), 1000)
    return () => clearInterval(interval)
  }, [])

  const hours = Math.floor(timeLeft / (1000 * 60 * 60))
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60)
  const seconds = Math.floor((timeLeft / 1000) % 60)

  return (
    <div className='mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='rounded-4xl bg-linear-to-r from-rose-500 via-orange-500 to-amber-400 p-8 text-white shadow-lg sm:p-10 lg:p-12'>
        <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.3em] text-white/80'>Today's deals</p>
            <h1 className='mt-2 text-3xl font-semibold sm:text-4xl'>Big savings on selected phones</h1>
            <h2 className='mt-3 text-xl text-white/90'>Open box delivery across Ghana</h2>
          </div>
          <div className='rounded-2xl bg-white/20 p-4 backdrop-blur'>
            <p className='text-center text-xs font-semibold uppercase tracking-widest text-white/80'>Ends in</p>
            <div className='text-center text-3xl font-semibold tracking-[0.2em] sm:text-4xl' role='timer'>
              {String(hours).padStart(2, '0')} : {String(minutes).padStart(2, '0')} : {String(seconds).padStart(2, '0')}
            </div>
            <Link to='/brand?sort=low' className='mt-4 flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'>
              Discover Sales <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timer
