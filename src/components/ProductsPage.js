import React, { useEffect, useState } from "react";
import Header from "./Header";
import { PRODUCTS_LIST_API } from "../utils/constants";
import ProductCard from "./ProductCard";

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
      <ul className="flex flex-wrap justify-center mx-10 my-20">
        {listOfProducts &&
          listOfProducts.map((prod) => (
            <li className="">
              <ProductCard prodData={prod} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
