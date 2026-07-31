import infinix from "./Images/infinix.png";
import iphone from "./Images/iphone.png";
import xiaomi from "./Images/mi.png";
import oneplus from "./Images/oneplus.png";
import realme from "./Images/realme.png";
import samsung from './Images/samsung.png';
import vivo from './Images/vivo.png';
import p1 from './Images/poster1.jpg'
import p2 from './Images/poster2.jpg'
import p3 from './Images/poster3.jpg'
import p4 from './Images/poster4.jpg'
import { Link } from 'react-router-dom';
import BrandCard from './BrandCard';

const BrandSlider = () => {
  const brands = [
    { img: infinix, brand: "Infinix" },
    { img: iphone, brand: "Apple" },
    { img: xiaomi, brand: "Xiaomi" },
    { img: oneplus, brand: "OnePlus" },
    { img: realme, brand: "Realme" },
    { img: samsung, brand: "Samsung" },
    { img: vivo, brand: "Vivo" },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-center text-3xl font-semibold text-slate-800">Authorized Brand</h1>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {brands.map((brand, index) => (
            <Link
              key={index}
              to={`/brand/${brand.brand.toLowerCase().replace(/\s+/g, "")}`}
              className="brand-card-animate block transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <BrandCard
                img={brand.img}
                brand={brand.brand}
                imgClass="h-12 w-auto object-contain"
                wrapperClass="flex items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 p-4"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-center text-3xl font-semibold text-slate-800">Shop By Brand</h1>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand, index) => (
            <Link
              key={index}
              to={`/brand/${brand.brand.toLowerCase().replace(/\s+/g, "")}`}
              className="brand-card-animate block transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <BrandCard key={index} img={brand.img} brand={brand.brand} />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <img src={p1} alt="poster1" className="brand-card-animate h-100 w-full rounded-3xl object-cover shadow-sm" style={{ animationDelay: '100ms' }} />
        <img src={p2} alt="poster2" className="brand-card-animate h-100 w-full rounded-3xl object-cover shadow-sm" style={{ animationDelay: '200ms' }} />
        <img src={p3} alt="poster3" className="brand-card-animate h-64 w-full rounded-3xl object-cover shadow-sm" style={{ animationDelay: '300ms' }} />
        <img src={p4} alt="poster4" className="brand-card-animate h-64 w-full rounded-3xl object-cover shadow-sm" style={{ animationDelay: '400ms' }} />
      </div>
    </div>
  );
}

export default BrandSlider;