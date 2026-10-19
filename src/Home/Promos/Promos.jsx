import React from 'react'
import { getProduct } from '../../Components/Brands/BrandInfo'
import PromoBanner from './PromoBanner'

// tag omitted → shows "Save n%" from the product's real discount
const promos = [
  { id: 1, tag: 'New arrival', tone: 'rose', size: 'large' },
  { id: 6, tone: 'indigo', size: 'large' },
  { id: 11, tag: 'Best value', tone: 'amber', size: 'small' },
  { id: 16, tag: 'Camera pick', tone: 'emerald', size: 'small' },
]

const Promos = () => {
  const items = promos
    .map((promo) => ({ ...promo, product: getProduct(promo.id) }))
    .filter((promo) => promo.product)

  return (
    <section className='mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8'>
      <h2 className='text-center text-3xl font-semibold text-slate-800'>Hot Deals</h2>
      <div className='mt-8 grid gap-4 md:grid-cols-2'>
        {items.map((promo, index) => (
          <PromoBanner
            key={promo.id}
            product={promo.product}
            tag={promo.tag}
            tone={promo.tone}
            size={promo.size}
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          />
        ))}
      </div>
    </section>
  )
}

export default Promos
