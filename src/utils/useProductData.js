import { useEffect, useState } from "react";
import { PRODUCTS_LIST_API } from "./constants";

const useProductData = () => {
  const [prodData, setProdData] = useState();

  const fetchProductData = async () => {
    try {
      const productData = await fetch(PRODUCTS_LIST_API);
      const response = await productData.json();
      setProdData(response.products);
    } catch (err) {
      console.log("Error while fetching product list: ", err.message);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return prodData;
};

export default useProductData;
