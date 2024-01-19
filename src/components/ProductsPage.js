import React, { useEffect, useState } from "react";
import Header from "./Header";
import { PRODUCTS_LIST_API } from "../utils/constants";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const [listOfProducts, setListOfProducts] = useState();

  const fetchProductData = async () => {
    try {
      const productData = await fetch(PRODUCTS_LIST_API);
      const response = await productData.json();
      setListOfProducts(response.products);
    } catch (err) {
      console.log("Error while fetching product list: ", err.message);
    }
  };
  useEffect(() => {
    fetchProductData();
  }, []);

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
