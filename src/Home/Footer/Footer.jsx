import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-slate-800 bg-slate-950 pt-8 pb-5 text-slate-300 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-slate-800 pb-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h1 className="text-lg font-semibold tracking-wide text-white">ClickPhones Hub</h1>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              ClickPhones Hub is a modern mobile e-commerce platform where you can explore the latest smartphones from trusted brands with the best deals.
            </p>
          </div>

          <div>
            <h5 className="text-sm font-semibold tracking-wide text-white">Popular Brands</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li><Link to="/brand/apple" className="transition hover:text-white">Apple</Link></li>
              <li><Link to="/brand/samsung" className="transition hover:text-white">Samsung</Link></li>
              <li><Link to="/brand/xiaomi" className="transition hover:text-white">Xiaomi</Link></li>
              <li><Link to="/brand/oneplus" className="transition hover:text-white">OnePlus</Link></li>
              <li><Link to="/brand/realme" className="transition hover:text-white">Realme</Link></li>
              <li><Link to="/brand/vivo" className="transition hover:text-white">Vivo</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold tracking-wide text-white">Quick Links</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li><Link to="/home" className="transition hover:text-white">Home</Link></li>
              <li><Link to="/brand" className="transition hover:text-white">Brand</Link></li>
              <li><Link to="/cart" className="transition hover:text-white">Cart</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold tracking-wide text-white">Contact Us</h5>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              ClickPhones Hub<br />
              Ghana<br />
              kumasi
            </p>

            <p className="mt-2 text-sm text-slate-400">
              🌐 <a href="https://clicl-phones-hub.vercel.app/" target="_blank" rel="noreferrer" className="transition hover:text-white">Visit Website</a>
            </p>
          </div>
        </div>

    
      
      </div>
    </footer>
  );
}

export default Footer;