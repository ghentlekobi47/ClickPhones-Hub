import React from "react";
import products, { BRANDS } from "./BrandInfo";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const SORTERS = {
  low: (a, b) => a.price - b.price,
  high: (a, b) => b.price - a.price,
  rating: (a, b) => b.rating - a.rating,
};

const Brand = () => {
  const { brandName } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const brand = brandName ? brandName.toLowerCase() : "all";
  const rawQuery = (searchParams.get("q") || "").trim();
  const query = rawQuery.toLowerCase();
  const sort = SORTERS[searchParams.get("sort")] ? searchParams.get("sort") : "popularity";
  const brandInfo = BRANDS.find((b) => b.slug === brand);

  let filterproducts = brand === "all" ? products : products.filter((prod) => prod.brand === brand);

  if (query) {
    filterproducts = filterproducts.filter((prod) =>
      `${prod.brand} ${prod.name}`.toLowerCase().includes(query)
    );
  }

  if (SORTERS[sort]) {
    filterproducts = [...filterproducts].sort(SORTERS[sort]);
  }

  const changeBrand = (slug) => {
    const path = slug === "all" ? "/brand" : `/brand/${slug}`;
    navigate({ pathname: path, search: searchParams.toString() });
  };

  const changeSort = (value) => {
    const next = new URLSearchParams(searchParams);
    if (value === "popularity") next.delete("sort");
    else next.set("sort", value);
    setSearchParams(next);
  };

  const clearSearch = () => {
    const next = new URLSearchParams(searchParams);
    next.delete("q");
    setSearchParams(next);
  };

  const heading = rawQuery ? `Results for "${rawQuery}"` : brandInfo ? `${brandInfo.label} Phones` : "All Phones";

  return (
    <div className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
      <title>{`${heading} | ClickPhones Hub`}</title>
      <h2 className="mb-2 text-center text-3xl font-semibold text-slate-800">{heading}</h2>
      <p className="mb-6 text-center text-sm text-slate-500">
        {filterproducts.length} {filterproducts.length === 1 ? "phone" : "phones"} found
        {rawQuery && (
          <button onClick={clearSearch} className="ml-2 font-semibold text-blue-600 hover:underline">Clear search</button>
        )}
      </p>

      <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="brand-filter" className="mb-2 block text-sm font-medium text-slate-700">Filter by Brand</label>
            <select
              id="brand-filter"
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500"
              value={brandInfo ? brand : "all"}
              onChange={(e) => changeBrand(e.target.value)}
            >
              <option value="all">All Brands</option>
              {BRANDS.map((b) => (
                <option key={b.slug} value={b.slug}>{b.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="sort-filter" className="mb-2 block text-sm font-medium text-slate-700">Sort by</label>
            <select
              id="sort-filter"
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500"
              value={sort}
              onChange={(e) => changeSort(e.target.value)}
            >
              <option value="popularity">Newest First</option>
              <option value="low">Price: Low → High</option>
              <option value="high">Price: High → Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      </div>

      {filterproducts.length === 0 && (
        <div className="rounded-3xl border border-dashed border-slate-300 p-10 text-center">
          <p className="text-lg text-slate-600">No phones match your search.</p>
          <Link to="/brand" className="mt-4 inline-block font-semibold text-blue-600 hover:underline">Browse all phones</Link>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {filterproducts.map((pro) => (
          <ProductCard key={pro.id} product={pro} />
        ))}
      </div>
    </div>
  );
};

export default Brand;
