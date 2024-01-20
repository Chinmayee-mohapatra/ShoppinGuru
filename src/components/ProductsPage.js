import React from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import useProductData from "../utils/useProductData";

const ProductsPage = () => {
  const listOfProducts = useProductData();

  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-evenly md:justify-center mx-4 my-10 md:mx-10 md:my-20 bg-[#0A2F4C]">
        {listOfProducts &&
          listOfProducts.map((prod) => (
            <Link
              key={prod.id}
              to={"/products/product-details/" + prod.id}
              className=""
            >
              <ProductCard prodData={prod} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ProductsPage;
