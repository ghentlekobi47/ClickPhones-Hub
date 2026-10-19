import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons'
import { selectCartCount } from '../../slice/cartSlice'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/brand', label: 'Shop' },
]

const linkClass = ({ isActive }) => `text-sm font-medium transition ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`

const Navbar = () => {
  const [search, setSearch] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)
  const cartCount = useSelector(selectCartCount)
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()

    const term = search.trim()
    if (term !== "") {
      navigate(`/brand?q=${encodeURIComponent(term)}`)
      setMenuOpen(false)
    }
  }

  const searchForm = (
    <form className="flex items-center gap-2" role="search" onSubmit={handleSearch}>
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-400 md:w-56"
        type="search"
        value={search}
        placeholder="Search phones or brands"
        aria-label="Search"
      />
      <button className="rounded-full border border-emerald-400 px-3 py-2 text-sm font-medium text-emerald-300 transition hover:bg-emerald-500/10" type="submit">
        Search
      </button>
    </form>
  )

  const cartLink = (
    <NavLink to="/cart" onClick={() => setMenuOpen(false)} className={linkClass} aria-label={`Cart, ${cartCount} items`}>
      <span className="inline-flex items-center gap-2">
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="md:hidden">Cart</span>
        {cartCount > 0 && (
          <span className="rounded-full bg-rose-500 px-1.5 text-[11px] font-bold leading-5 text-white">
            {cartCount}
          </span>
        )}
      </span>
    </NavLink>
  )

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-slate-950/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-semibold tracking-wide"> ClickPhones Hub</Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>{link.label}</NavLink>
          ))}
          {searchForm}
          {cartLink}
        </div>

        <button
          className="relative rounded-lg p-2 text-slate-200 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size="lg" />
          {!menuOpen && cartCount > 0 && <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-rose-500" />}
        </button>
      </div>

      {menuOpen && (
        <div className="space-y-4 border-t border-slate-800 px-4 pb-5 pt-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={() => setMenuOpen(false)} className={linkClass}>{link.label}</NavLink>
            ))}
            {cartLink}
          </div>
          {searchForm}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
