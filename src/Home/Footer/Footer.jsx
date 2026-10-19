import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowUp,
  faGlobe,
  faHandHoldingDollar,
  faHeart,
  faLocationDot,
  faLock,
  faMobileScreenButton,
  faShieldHalved,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons"
import { BRANDS } from "../../Components/Brands/BrandInfo"

// Add a phone number or email here when the store has one
const CONTACT = [
  { icon: faLocationDot, label: "Kumasi, Ghana" },
  { icon: faGlobe, label: "clicl-phones-hub.vercel.app", href: "https://clicl-phones-hub.vercel.app/" },
]

const perks = [
  { icon: faTruckFast, title: "Delivery nationwide", hint: "GH₵30 in Kumasi · GH₵60 elsewhere" },
  { icon: faMobileScreenButton, title: "Pay with MoMo", hint: "MTN MoMo, Telecel Cash, AT Money" },
  { icon: faShieldHalved, title: "Genuine phones", hint: "Brand-new and original" },
  { icon: faHandHoldingDollar, title: "Cash on delivery", hint: "Pay when your phone arrives" },
]

const linkGroups = [
  {
    title: "Shop by Brand",
    links: [
      { to: "/brand", label: "All phones" },
      ...BRANDS.map((b) => ({ to: `/brand/${b.slug}`, label: b.label })),
    ],
  },
  {
    title: "Quick Links",
    links: [
      { to: "/", label: "Home" },
      { to: "/brand", label: "Shop" },
      { to: "/cart", label: "Cart" },
      { to: "/subscribe", label: "Newsletter" },
    ],
  },
]

const paymentMethods = ["Mobile Money", "Cash on Delivery"]

const headingClass = "text-xs font-semibold uppercase tracking-widest text-white"
const linkClass = "text-sm text-slate-400 transition hover:text-emerald-300"

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-6 border-b border-slate-800 py-8 lg:grid-cols-4">
          {perks.map((perk) => (
            <li key={perk.title} className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">
                <FontAwesomeIcon icon={perk.icon} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{perk.title}</p>
                <p className="mt-0.5 text-xs leading-5 text-slate-400">{perk.hint}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="grid gap-10 py-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block text-xl font-semibold tracking-wide text-white">
              ClickPhones <span className="text-emerald-300">Hub</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
              The latest smartphones from trusted brands at the best prices, delivered to your door anywhere in Ghana.
            </p>
            <ul className="mt-5 space-y-3">
              {CONTACT.map((item) => (
                <li key={item.label} className="flex items-center gap-3 text-sm text-slate-400">
                  <FontAwesomeIcon icon={item.icon} className="w-4 text-emerald-300" aria-hidden="true" />
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className="transition hover:text-emerald-300">{item.label}</a>
                  ) : (
                    item.label
                  )}
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 lg:col-span-5">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <h2 className={headingClass}>{group.title}</h2>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.to + link.label}>
                      <Link to={link.to} className={linkClass}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="lg:col-span-3">
            <h2 className={headingClass}>We Accept</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {paymentMethods.map((method) => (
                <span key={method} className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-200">
                  {method}
                </span>
              ))}
            </div>
            <p className="mt-4 flex items-center gap-2 text-xs text-slate-400">
              <FontAwesomeIcon icon={faLock} className="text-emerald-300" aria-hidden="true" />
              Secure checkout
            </p>
            <Link
              to="/brand"
              className="mt-6 inline-block rounded-full bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-400"
            >
              Shop now
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-slate-800 py-6 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} ClickPhones Hub. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p>
              Made with <FontAwesomeIcon icon={faHeart} className="text-rose-500" aria-label="love" /> in Kumasi, Ghana
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-emerald-400 hover:text-emerald-300"
            >
              <FontAwesomeIcon icon={faArrowUp} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
