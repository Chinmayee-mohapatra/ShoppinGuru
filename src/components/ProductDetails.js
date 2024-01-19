import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useProductDetails from "../utils/useProductDetails";
import Header from "./Header";
import { IoMdStar } from "react-icons/io";

const ProductDetails = () => {
  const [count, setCount] = useState(1);

  const { prodID } = useParams();
  const prodInfo = useProductDetails(prodID);
  const {
    id,
    title,
    description,
    discountPercentage,
    price,
    rating,
    images,
    stock,
  } = prodInfo;
  const [prodImg, setProdImg] = useState(images);

  const decrementCount = () => {
    setCount(count - 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const handleProductImage = (image) => {
    setProdImg(image);
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col-reverse sm:flex-row gap-5 md:gap-10 mx-8 my-10">
        <div className="w-full sm:w-1/2 flex flex-col gap-4 justify-start p-4 md:p-8 lg:p-14">
          <h1 className=" text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            {title}
          </h1>
          <div className="flex justify-between text-xl">
            <p className="font-semibold">$ {price}</p>
            <p className="flex items-center gap-1">
              {rating} <IoMdStar fill="green" />
            </p>
          </div>
          <div className="text-red-700">{discountPercentage}% off</div>
          <div>Stock: {stock} left</div>
          <div className="text-lg">{description}</div>
          <div className="flex justify-between font-semibold gap-4 mt-4">
            <div
              className="flex justify-around items-center text-xs sm:text-base lg:text-lg 
            w-[100px] md:w-[200px] rounded-md lg:px-4 border-2 border-slate-600"
            >
              <button
                onClick={() => decrementCount()}
                className={`px-2 ${
                  count <= 0 ? `cursor-not-allowed` : `cursor-pointer`
                }`}
              >
                -
              </button>
              <p className="px-2 ">{count}</p>
              <button onClick={() => incrementCount()} className="px-2 ">
                +
              </button>
            </div>
            <div className=" text-xs sm:text-sm lg:text-lg">
              <button className="bg-green-700 rounded-md  text-white w-full py-1 sm:py-2 px-1 md:px-4 hover:bg-green-900">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="w-3/3 sm:w-1/2 flex flex-col items-center justify-center md:justify-around gap-4 md:gap-10">
          <div className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] mx-4">
            <img
              src={prodImg ? prodImg : images?.[0]}
              alt="product-screen-img"
              className="w-full h-full"
            />
          </div>
          <div className="flex gap-2 justify-center">
            {/* Show Images - With options to show up different images */}
            {images?.map((image, i) => (
              <div
                key={i}
                className={`w-[100px] h-[100px] flex items-center justify-center hover:scale-110 duration-200`}
                onClick={() => handleProductImage(image)}
              >
                <img src={image} alt="product-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
