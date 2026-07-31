import React from 'react'
import s1 from './Images/slide1.jpg'

const Carousel = () => {
    return (
        <section className='relative overflow-hidden bg-slate-900'>
            <img src={s1} alt='Featured smartphone offer' className='h-105 w-full object-cover sm:h-130' />
            <div className='absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-900/50 to-slate-900/20' />
            <div className='absolute inset-0 flex items-center'>
                <div className='mx-auto max-w-7xl px-4 text-left text-white sm:px-6 lg:px-8'>
                    <p className='mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-rose-400'>New arrivals</p>
                    <h1 className='max-w-2xl text-4xl font-semibold sm:text-5xl'>Discover the latest phones at unbeatable prices.</h1>
                    <p className='mt-4 max-w-xl text-lg text-slate-200'>Explore flagship devices, stylish designs, and premium deals curated for every budget.</p>
                </div>
            </div>
        </section>
    )
}

export default Carousel