import React, { useEffect, useState } from "react";
import useProductData from "../../utils/useProductData";
import { Link, useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard";

const TrendingProducts = () => {
  const listOfProducts = useProductData();
  const [trendingProd, setTrendingProd] = useState();

  useEffect(() => {
    if (listOfProducts) {
      setTrendingProd(listOfProducts.slice(0, 4));
    }
  }, [listOfProducts]);

  const navigate = useNavigate();

  return (
    <div className="my-6 mx-10">
      <h1 className="text-teal-900 uppercase text-2xl font-semibold tracking-tight px-4">
        Trending 🔥
      </h1>
      <div>
        <div className="flex flex-wrap justify-evenly md:justify-around mx-4 my-5 md:mx-10 md:my-10 rounded-md bg-[#0A2F4C]">
          {trendingProd &&
            trendingProd.map((prod) => (
              <Link
                key={prod.id}
                to={"/products/product-details/" + prod.id}
                className=""
              >
                <ProductCard prodData={prod} />
              </Link>
            ))}
        </div>
        <div className="flex">
          <button
            onClick={() => {
              navigate("/products");
            }}
            className="mx-auto text-base sm:text-lg lg:text-2xl bg-yellow-500 hover:bg-yellow-600 text-white 
            font-semibold px-2 sm:px-4 py-1 sm:py-2 rounded-lg"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
