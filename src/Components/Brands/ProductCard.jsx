import React from "react";
import { Link } from "react-router-dom";
import { discountPercent } from "./BrandInfo";
import { formatPrice } from "../../utils/format";

const ProductCard = ({ product }) => (
  <div className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
    <Link to={`/product/${product.id}`} className="relative mb-4 block overflow-hidden rounded-2xl bg-slate-100 p-3">
      <img src={product.image} alt={product.name} loading="lazy" className="h-56 w-full rounded-xl object-cover" />
      <span className="absolute left-4 top-4 rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold text-white">
        -{discountPercent(product)}%
      </span>
    </Link>

    <div className="flex flex-1 flex-col gap-3">
      <div>
        <h5 className="text-lg font-semibold text-slate-800">{product.name}</h5>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">{product.brand}</p>
      </div>

      <p className="flex-1 text-sm leading-6 text-slate-600">{product.description}</p>

      <div className="flex items-center justify-between text-sm">
        <span className="text-amber-500">★ <span className="text-slate-600">{product.rating}</span></span>
        <span className={product.stock <= 5 ? "font-medium text-rose-500" : "text-slate-500"}>
          {product.stock <= 5 ? `Only ${product.stock} left` : "In stock"}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-slate-800">{formatPrice(product.price)}</span>
        <span className="text-sm text-slate-400 line-through">{formatPrice(product.oldPrice)}</span>
      </div>

      <Link
        to={`/product/${product.id}`}
        className="block w-full rounded-2xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-700"
      >
        View Details
      </Link>
    </div>
  </div>
);

export default ProductCard;
