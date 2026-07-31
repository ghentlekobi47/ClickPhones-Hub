import React, { useReducer, useEffect } from "react";
import products from "./BrandInfo";
import { Link, useParams } from "react-router-dom";

const Brand = () => {
  const { brandName } = useParams();
  const initialState = {
    brand: "all",
    sort: "popularity",
  };

  const reducerFn = (state, action) => {
    if (action.type === "SetBrand") {
      return { ...state, brand: action.payload };
    }
    if (action.type === "SetSort") {
      return { ...state, sort: action.payload };
    }
    return state;
  };

  const [state, dispatch] = useReducer(reducerFn, initialState);

  useEffect(() => {
    if (brandName) {
      dispatch({ type: "SetBrand", payload: brandName.toLowerCase() });
    } else {
      dispatch({ type: "SetBrand", payload: "all" });
    }
  }, [brandName]);

  let filterproducts =
    state.brand === "all"
      ? products
      : products.filter((prod) => prod.brand === state.brand);

  if (state.sort === "low") {
    filterproducts = [...filterproducts].sort((a, b) => a.price - b.price);
  }

  if (state.sort === "high") {
    filterproducts = [...filterproducts].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="mb-6 text-center text-3xl font-semibold text-slate-800">Choose your Brand</h2>

      <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Filter by Brand</label>
            <select
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500"
              value={state.brand}
              onChange={(e) => dispatch({ type: "SetBrand", payload: e.target.value })}
            >
              <option value="all">All Brands</option>
              <option value="apple">Apple</option>
              <option value="redmi">Redmi</option>
              <option value="realme">Realme</option>
              <option value="samsung">Samsung</option>
              <option value="vivo">Vivo</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Sort by Price</label>
            <select
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500"
              onChange={(e) => dispatch({ type: "SetSort", payload: e.target.value })}
            >
              <option value="popularity">Newest First</option>
              <option value="low">Price: Low → High</option>
              <option value="high">Price: High → Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {filterproducts.map((pro) => (
          <div key={pro.id} className="group rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="relative mb-4 overflow-hidden rounded-2xl bg-slate-100 p-3">
              <img src={pro.image} alt={pro.name} className="h-56 w-full rounded-xl object-cover" />
              <span className="absolute left-4 top-4 rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Hot
              </span>
            </div>

            <div className="space-y-3">
              <div>
                <h5 className="text-lg font-semibold text-slate-800">{pro.name}</h5>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">{pro.brand.toUpperCase()}</p>
              </div>

              <p className="text-sm leading-6 text-slate-600">{pro.description}</p>

              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-slate-800">₵{pro.price}</span>
                <span className="text-slate-400 line-through">₵{pro.price + 8000}</span>
              </div>

              <Link to={`/product/${pro.id}`} className="block">
                <button className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;