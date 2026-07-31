import { useParams } from 'react-router-dom'
import products from '../Brands/BrandInfo'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../../slice/cartSlice'

const BuyNow = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const filterproduct = products.find(pro => pro.id === Number(id))

    if (!filterproduct) {
        return <h2 className='mt-5 text-center text-2xl font-semibold'>Product Not Found</h2>
    }

    function addtocart(fltrproduct) {
        alert('Cart added successfully');
        dispatch(addtoCart(fltrproduct))
    }

    return (
        <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
            <div className='grid items-start gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-2'>
                <div className='rounded-3xl bg-slate-100 p-6'>
                    <img
                        src={filterproduct.image}
                        className='mx-auto h-105 w-full rounded-2xl object-contain'
                        alt={filterproduct.name}
                    />
                </div>

                <div className='space-y-5'>
                    <div>
                        <h2 className='text-3xl font-semibold text-slate-800'>{filterproduct.name}</h2>
                        <h4 className='mt-2 text-2xl font-bold text-rose-500'>₹ {filterproduct.price}</h4>
                    </div>

                    <div className='space-y-2 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700'>
                        <p><span className='font-semibold'>Display :</span> {filterproduct.specs.display}</p>
                        <p><span className='font-semibold'>OS :</span> {filterproduct.specs.os}</p>
                        <p><span className='font-semibold'>Rear Camera :</span> {filterproduct.specs.rearCamera}</p>
                        <p><span className='font-semibold'>Front Camera :</span> {filterproduct.specs.frontCamera}</p>
                        <p><span className='font-semibold'>Battery :</span> {filterproduct.specs.battery}</p>
                    </div>

                    <div className='flex items-center gap-3'>
                        <button className='rounded-full border border-slate-300 px-4 py-2 text-lg font-semibold text-slate-600' disabled>-</button>
                        <span className='min-w-8 text-center text-lg font-semibold'>1</span>
                        <button className='rounded-full border border-slate-300 px-4 py-2 text-lg font-semibold text-slate-600' disabled>+</button>
                    </div>

                    <button
                        className='rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700'
                        onClick={() => addtocart(filterproduct)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

            <div className='mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
                <h3 className='mb-4 text-center text-2xl font-semibold text-slate-800'>Product Description</h3>

                <div className='overflow-x-auto'>
                    <table className='min-w-full divide-y divide-slate-200 text-left text-sm'>
                        <tbody className='divide-y divide-slate-100'>
                            <tr><th className='px-4 py-3 font-semibold text-slate-700'>Model</th><td className='px-4 py-3 text-slate-600'>{filterproduct.name}</td></tr>
                            <tr><th className='px-4 py-3 font-semibold text-slate-700'>Display Size</th><td className='px-4 py-3 text-slate-600'>{filterproduct.descriptions.display}</td></tr>
                            <tr><th className='px-4 py-3 font-semibold text-slate-700'>OS</th><td className='px-4 py-3 text-slate-600'>{filterproduct.descriptions.os}</td></tr>
                            <tr><th className='px-4 py-3 font-semibold text-slate-700'>Rear Camera</th><td className='px-4 py-3 text-slate-600'>{filterproduct.descriptions.rearCamera}</td></tr>
                            <tr><th className='px-4 py-3 font-semibold text-slate-700'>Front Camera</th><td className='px-4 py-3 text-slate-600'>{filterproduct.descriptions.frontCamera}</td></tr>
                            <tr><th className='px-4 py-3 font-semibold text-slate-700'>Battery</th><td className='px-4 py-3 text-slate-600'>{filterproduct.descriptions.battery}</td></tr>
                            <tr><th className='px-4 py-3 font-semibold text-slate-700'>Bluetooth</th><td className='px-4 py-3 text-slate-600'>{filterproduct.descriptions.bluetooth}</td></tr>
                            <tr><th className='px-4 py-3 font-semibold text-slate-700'>USB</th><td className='px-4 py-3 text-slate-600'>{filterproduct.descriptions.usb}</td></tr>
                            <tr><th className='px-4 py-3 font-semibold text-slate-700'>WLAN</th><td className='px-4 py-3 text-slate-600'>{filterproduct.descriptions.wlan}</td></tr>
                            <tr><th className='px-4 py-3 font-semibold text-slate-700'>NFC</th><td className='px-4 py-3 text-slate-600'>{filterproduct.descriptions.nfc}</td></tr>
                            <tr><th className='px-4 py-3 font-semibold text-slate-700'>Sensor</th><td className='px-4 py-3 text-slate-600'>{filterproduct.descriptions.sensor}</td></tr>
                            <tr><th className='px-4 py-3 font-semibold text-slate-700'>Battery Capacity</th><td className='px-4 py-3 text-slate-600'>{filterproduct.descriptions.batteryCapacity}</td></tr>
                            <tr><th className='px-4 py-3 font-semibold text-slate-700'>Water Protection</th><td className='px-4 py-3 text-slate-600'>{filterproduct.descriptions.waterProtection}</td></tr>
                            <tr><th className='px-4 py-3 font-semibold text-slate-700'>Dimension</th><td className='px-4 py-3 text-slate-600'>{filterproduct.descriptions.dimension}</td></tr>
                            <tr><th className='px-4 py-3 font-semibold text-slate-700'>Colour</th><td className='px-4 py-3 text-slate-600'>{filterproduct.descriptions.colour}</td></tr>
                            <tr><th className='px-4 py-3 font-semibold text-slate-700'>Weight</th><td className='px-4 py-3 text-slate-600'>{filterproduct.descriptions.weight}</td></tr>
                            <tr><th className='px-4 py-3 font-semibold text-slate-700'>In The Box</th><td className='px-4 py-3 text-slate-600'>{filterproduct.descriptions.inTheBox}</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default BuyNow;