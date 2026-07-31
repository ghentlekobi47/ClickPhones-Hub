import React from "react";

const BrandCard = ({ img, brand, imgClass = "h-14 w-auto object-contain", wrapperClass = "flex items-center justify-center rounded-3xl border border-slate-200 bg-white p-6 shadow-sm" }) => {
  return (
    <div className={wrapperClass}>
      <img src={img} alt={brand} className={imgClass} />
    </div>
  );
};

export default BrandCard;
