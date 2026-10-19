import iphone from "./Images/iphone.png";
import xiaomi from "./Images/mi.png";
import realme from "./Images/realme.png";
import samsung from './Images/samsung.png';
import vivo from './Images/vivo.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars -- used as <motion.div>
import BrandCard from './BrandCard';

const BrandSlider = () => {
  const brands = [
    { img: iphone, brand: "Apple", slug: "apple" },
    { img: xiaomi, brand: "Xiaomi", slug: "redmi" },
    { img: realme, brand: "Realme", slug: "realme" },
    { img: samsung, brand: "Samsung", slug: "samsung" },
    { img: vivo, brand: "Vivo", slug: "vivo" },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
      >
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-center text-3xl font-semibold text-slate-800"
        >
          Authorized Brand
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.slug}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.05 * index, ease: 'easeOut' }}
              whileHover={{ scale: 1.04, x: 4 }}
            >
              <Link
                to={`/brand/${brand.slug}`}
                className="block"
              >
                <BrandCard
                  img={brand.img}
                  brand={brand.brand}
                  imgClass="h-12 w-auto object-contain"
                  wrapperClass="flex items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 p-4"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="mt-10">
        <h1 className="text-center text-3xl font-semibold text-slate-800">Shop By Brand</h1>
        <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {brands.map((brand, index) => (
            <Link
              key={brand.slug}
              to={`/brand/${brand.slug}`}
              className="brand-card-animate block transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <BrandCard img={brand.img} brand={brand.brand} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrandSlider;