import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="mt-8 bg-slate-950 pt-6 pb-4 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 pb-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h1 className="text-xl font-semibold text-white">ClickPhones Hub</h1>
            <p className="mt-3 text-xs leading-6 text-slate-400">
              ClickPhones Hub is a modern mobile e-commerce platform where you can explore the latest smartphones from trusted brands with the best deals.
            </p>
          </div>

          <div>
            <h5 className="text-base font-semibold text-white">Popular Brands</h5>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-400">
              <li><Link to="/brand/apple" className="transition hover:text-white">Apple</Link></li>
              <li><Link to="/brand/samsung" className="transition hover:text-white">Samsung</Link></li>
              <li><Link to="/brand/xiaomi" className="transition hover:text-white">Xiaomi</Link></li>
              <li><Link to="/brand/oneplus" className="transition hover:text-white">OnePlus</Link></li>
              <li><Link to="/brand/realme" className="transition hover:text-white">Realme</Link></li>
              <li><Link to="/brand/vivo" className="transition hover:text-white">Vivo</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-base font-semibold text-white">Quick Links</h5>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-400">
              <li><Link to="/home" className="transition hover:text-white">Home</Link></li>
              <li><Link to="/brand" className="transition hover:text-white">Brand</Link></li>
              <li><Link to="/cart" className="transition hover:text-white">Cart</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-base font-semibold text-white">Contact Us</h5>
            <p className="mt-3 text-xs leading-6 text-slate-400">
              ClickPhones Hub<br />
              Ghana<br />
              kumasi
            </p>
            <p className="mt-2 text-xs text-slate-400">
              📞 <a href="tel:0599576819" className="transition hover:text-white">0599576819</a>
            </p>
            <p className="text-xs text-slate-400">
              📞 <a href="tel:0207785725" className="transition hover:text-white">0207785725</a>
            </p>
            <p className="mt-2 text-xs text-slate-400">
              ✉️ <a href="mailto:benboateng384@gmail.com" className="transition hover:text-white">benboateng384@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-400">
          © 2026 ClickPhones Hub | Designed & Developed by
          <a href="https://www.linkedin.com/in/benboat384/" className="ml-1 font-semibold text-white hover:text-rose-400">benboateng</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;