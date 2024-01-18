import React from "react";

const ProductCard = ({ prodData }) => {
  const { title, price, rating, discount, thumbnail } = prodData;
  return (
    <div className="mx-2 my-10">
      <div className="border-2 border-slate-300 rounded-lg w-[250px] flex flex-col gap-1">
        <img src={thumbnail} alt={title} className="h-[250px]" />
        <div className="p-2">
          <h2 className="text-lg font-medium">{title}</h2>
          <p>{discount}</p>
          <p>{price}</p>
          <p>{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
