import { useEffect, useState } from "react";
import { SINGLE_PRODUCT_API } from "./constants";

const useProductDetails = (prodID) => {
  const [prodInfo, setProdInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SINGLE_PRODUCT_API + prodID);
    const json = await data.json();
    setProdInfo(json);
  };

  return prodInfo;
};

export default useProductDetails;
