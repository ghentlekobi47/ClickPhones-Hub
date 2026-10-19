import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import products, { SPEC_LABELS, discountPercent } from '../Brands/BrandInfo'
import ProductCard from '../Brands/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart, selectCartItems } from '../../slice/cartSlice'
import { formatPrice } from '../../utils/format'
import { useToast } from '../Toast/ToastContext'

const BuyNow = () => {
    const { id } = useParams();
    const filterproduct = products.find(pro => pro.id === Number(id))

    if (!filterproduct) {
        return (
            <div className='mx-auto max-w-7xl px-4 py-16 text-center'>
                <title>Product Not Found | ClickPhones Hub</title>
                <h2 className='text-2xl font-semibold'>Product Not Found</h2>
                <Link to='/brand' className='mt-4 inline-block font-semibold text-blue-600 hover:underline'>Browse all phones</Link>
            </div>
        )
    }

    // keyed so the quantity picker resets when moving between products
    return <ProductDetail key={filterproduct.id} product={filterproduct} />
}

const ProductDetail = ({ product }) => {
    const dispatch = useDispatch();
    const showToast = useToast();
    const [quantity, setQuantity] = useState(1);
    const inCart = useSelector(selectCartItems).find(item => item.id === product.id)?.quantity ?? 0;
    const available = Math.max(0, product.stock - inCart);

    const related = products.filter(p => p.brand === product.brand && p.id !== product.id).slice(0, 4);

    function addtocart() {
        dispatch(addtoCart({ product, quantity }))
        showToast(`${quantity} × ${product.name} added to cart`)
        setQuantity(1)
    }

    return (
        <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
            <title>{`${product.name} | ClickPhones Hub`}</title>
            <nav className='mb-4 text-sm text-slate-500'>
                <Link to='/brand' className='hover:text-slate-800'>Shop</Link>
                <span className='mx-2'>/</span>
                <Link to={`/brand/${product.brand}`} className='capitalize hover:text-slate-800'>{product.brand}</Link>
                <span className='mx-2'>/</span>
                <span className='text-slate-800'>{product.name}</span>
            </nav>

            <div className='grid items-start gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-2'>
                <div className='rounded-3xl bg-slate-100 p-6'>
                    <img
                        src={product.image}
                        className='mx-auto h-105 w-full rounded-2xl object-contain'
                        alt={product.name}
                    />
                </div>

                <div className='space-y-5'>
                    <div>
                        <h2 className='text-3xl font-semibold text-slate-800'>{product.name}</h2>
                        <p className='mt-1 text-amber-500'>★ <span className='text-sm text-slate-600'>{product.rating} / 5</span></p>
                        <div className='mt-3 flex items-baseline gap-3'>
                            <h4 className='text-2xl font-bold text-rose-500'>{formatPrice(product.price)}</h4>
                            <span className='text-slate-400 line-through'>{formatPrice(product.oldPrice)}</span>
                            <span className='rounded-full bg-rose-100 px-2 py-0.5 text-xs font-semibold text-rose-600'>Save {discountPercent(product)}%</span>
                        </div>
                        <p className='mt-3 text-slate-600'>{product.description}</p>
                    </div>

                    <div className='space-y-2 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700'>
                        <p><span className='font-semibold'>Display :</span> {product.specs.display}</p>
                        <p><span className='font-semibold'>Chipset :</span> {product.specs.chipset}</p>
                        <p><span className='font-semibold'>Rear Camera :</span> {product.specs.rearCamera}</p>
                        <p><span className='font-semibold'>Battery :</span> {product.specs.battery}</p>
                        <p><span className='font-semibold'>Storage :</span> {product.specs.storage}</p>
                    </div>

                    <p className={`text-sm font-medium ${available <= 5 ? 'text-rose-500' : 'text-emerald-600'}`}>
                        {available === 0 ? 'You have all available stock in your cart' : available <= 5 ? `Only ${available} left in stock` : 'In stock'}
                    </p>

                    <div className='flex flex-wrap items-center gap-3'>
                        <div className='flex items-center gap-3'>
                            <button
                                className='rounded-full border border-slate-300 px-4 py-2 text-lg font-semibold text-slate-600 disabled:opacity-40'
                                onClick={() => setQuantity(q => q - 1)}
                                disabled={quantity <= 1}
                                aria-label='Decrease quantity'
                            >-</button>
                            <span className='min-w-8 text-center text-lg font-semibold'>{quantity}</span>
                            <button
                                className='rounded-full border border-slate-300 px-4 py-2 text-lg font-semibold text-slate-600 disabled:opacity-40'
                                onClick={() => setQuantity(q => q + 1)}
                                disabled={quantity >= available}
                                aria-label='Increase quantity'
                            >+</button>
                        </div>

                        <button
                            className='rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400'
                            onClick={addtocart}
                            disabled={available === 0}
                        >
                            Add to Cart
                        </button>
                        {inCart > 0 && (
                            <Link to='/cart' className='rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50'>
                                Go to Cart ({inCart})
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            <div className='mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
                <h3 className='mb-4 text-center text-2xl font-semibold text-slate-800'>Specifications</h3>

                <div className='overflow-x-auto'>
                    <table className='min-w-full divide-y divide-slate-200 text-left text-sm'>
                        <tbody className='divide-y divide-slate-100'>
                            <tr><th className='px-4 py-3 font-semibold text-slate-700'>Model</th><td className='px-4 py-3 text-slate-600'>{product.name}</td></tr>
                            {Object.entries(SPEC_LABELS).map(([key, label]) => (
                                <tr key={key}>
                                    <th className='px-4 py-3 font-semibold text-slate-700'>{label}</th>
                                    <td className='px-4 py-3 text-slate-600'>{product.specs[key]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {related.length > 0 && (
                <div className='mt-10'>
                    <h3 className='mb-6 text-center text-2xl font-semibold text-slate-800'>You May Also Like</h3>
                    <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-4'>
                        {related.map(p => <ProductCard key={p.id} product={p} />)}
                    </div>
                </div>
            )}
        </div>
    );
}

export default BuyNow;
