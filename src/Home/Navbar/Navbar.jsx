import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()

    if (search.trim() !== "") {
      navigate(`/brand/${search.toLowerCase()}`)
    }
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-slate-950/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="text-xl font-semibold tracking-wide"> ClickPhones Hub</a>

        <div className="hidden items-center gap-6 md:flex">
          <NavLink to="/" className={({ isActive }) => `text-sm font-medium transition ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`}>
            Home
          </NavLink>
          <NavLink to="/brand" className={({ isActive }) => `text-sm font-medium transition ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`}>
            Brands
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => `text-sm font-medium transition ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`}>
            Cart
          </NavLink>
        </div>

        <form className="flex items-center gap-2" role="search" onSubmit={handleSearch}>
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="w-36 rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white outline-none placeholder:text-slate-400 sm:w-48"
            type="search"
            value={search}
            placeholder="Search by brand"
            aria-label="Search"
          />
          <button className="rounded-full border border-emerald-400 px-3 py-2 text-sm font-medium text-emerald-300 transition hover:bg-emerald-500/10" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
