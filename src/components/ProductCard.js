import React from "react";
import { IoMdStar } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";

const ProductCard = ({ prodData }) => {
  // console.log("Product data: ", prodData);
  const { title, price, rating, discountPercentage, thumbnail } = prodData;

  const handlePlaceOrder = () => {
    // Add code to handle Place Order Now functionality -> AddToCart functionality
  };

  return (
    <div className=" mx-1 my-6 md:mx-2 md:my-10 bg-slate-100 rounded-lg hover:scale-105 hover:cursor-pointer hover:shadow-xl duration-200 ">
      <div className="w-[180px] md:w-[250px] flex flex-col gap-1">
        <img
          src={thumbnail}
          alt={title}
          className="mx-auto w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] my-4 rounded-lg"
        />
        <div className="py-2 px-4">
          <h2 className="text-sm md:text-lg font-bold tracking-tight">
            {title.length > 20 ? `${title.substring(0, 20)}...` : title}
          </h2>
          <p className="flex items-center gap-1 text-sm md:text-base font-semibold">
            $ {price}{" "}
            <span className="text-orange-700 text-xs md:text-sm font-normal">
              {discountPercentage.toFixed()}% off
            </span>
          </p>

          <p className="font-medium text-sm md:text-base flex items-center gap-1">
            {rating}
            <IoMdStar fill="green" />
          </p>
          <div className="flex items-center gap-2 mt-4">
            <button
              onClick={() => handlePlaceOrder()}
              className="bg-[#0A2F4C] text-white text-sm md:text-base w-full rounded-lg px-4 py-2 hover:bg-[#0a2f4cf0]"
            >
              Place Order
            </button>
            <div className="rounded-full border-2 border-red-800 p-1">
              {/* add condition, when item added to wishlist then show HeartSharp else HeartOutline */}
              <IoHeartOutline />
              {/* <IoHeartSharp /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
