import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { discountPercent } from '../../Components/Brands/BrandInfo'
import { formatPrice } from '../../utils/format'

// Full class strings so Tailwind can see them at build time
const tones = {
  rose: { bg: 'from-rose-50 to-rose-200', tag: 'bg-rose-500/10 text-rose-600', glow: 'bg-rose-300/40' },
  indigo: { bg: 'from-slate-100 to-indigo-200', tag: 'bg-indigo-500/10 text-indigo-700', glow: 'bg-indigo-300/40' },
  amber: { bg: 'from-amber-50 to-orange-200', tag: 'bg-orange-500/10 text-orange-700', glow: 'bg-orange-300/40' },
  emerald: { bg: 'from-emerald-50 to-teal-200', tag: 'bg-emerald-500/10 text-emerald-700', glow: 'bg-teal-300/40' },
}

const sizes = {
  large: { card: 'sm:min-h-100', title: 'text-3xl sm:text-4xl', img: 'h-44 sm:h-80', clamp: 'line-clamp-3' },
  small: { card: 'sm:min-h-64', title: 'text-2xl sm:text-3xl', img: 'h-36 sm:h-52', clamp: 'line-clamp-2' },
}

const PromoBanner = ({ product, tag, tone = 'rose', size = 'large', style }) => {
  const t = tones[tone]
  const s = sizes[size]
  const discount = discountPercent(product)

  return (
    <Link
      to={`/product/${product.id}`}
      aria-label={`${product.name}, now ${formatPrice(product.price)}, save ${discount}%`}
      className={`brand-card-animate group relative flex flex-col overflow-hidden rounded-3xl bg-linear-to-br ${t.bg} p-6 shadow-sm ring-1 ring-black/5 sm:flex-row sm:items-center sm:p-8 ${s.card}`}
      style={style}
    >
      <div className={`pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full blur-3xl ${t.glow}`} />

      <div className='relative z-10 flex-1'>
        <span className={`inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest ${t.tag}`}>
          {tag ?? `Save ${discount}%`}
        </span>
        <h3 className={`mt-4 font-bold tracking-tight text-slate-900 ${s.title}`}>{product.name}</h3>
        <p className={`mt-2 max-w-xs text-sm leading-6 text-slate-600 ${s.clamp}`}>{product.description}</p>

        <div className='mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1'>
          <span className='text-2xl font-bold text-slate-900'>{formatPrice(product.price)}</span>
          <span className='text-sm text-slate-500 line-through'>{formatPrice(product.oldPrice)}</span>
          <span className='rounded-md bg-slate-900 px-2 py-0.5 text-xs font-semibold text-white'>-{discount}%</span>
        </div>

        <span className='mt-6 inline-flex items-center gap-2 rounded-full bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition group-hover:bg-rose-400'>
          Shop now
          <FontAwesomeIcon icon={faArrowRight} className='transition-transform group-hover:translate-x-1' aria-hidden='true' />
        </span>
      </div>

      <img
        src={product.image}
        alt={product.name}
        loading='lazy'
        className={`relative z-10 mx-auto mt-6 w-auto max-w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105 sm:mt-0 sm:max-w-[50%] ${s.img}`}
      />
    </Link>
  )
}

export default PromoBanner
