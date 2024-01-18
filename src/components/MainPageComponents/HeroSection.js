import React, { useEffect, useState } from "react";
import { LANDING_PAGE_1 } from "../../utils/constants";
import { LANDING_PAGE_2 } from "../../utils/constants";
import { CATEGORIES_API } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const fetchCategories = async () => {
    const categories = await fetch(CATEGORIES_API);
    const category_data = await categories.json();
    console.log(category_data);
    setCategories(category_data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      {/* Top section */}
      <div className="flex justify-between px-5 lg:px-10 py-5">
        <div className="w-1/2 flex justify-center">
          <div className="flex flex-col gap-2 sm:gap-6 lg:gap-10 items-start justify-center h-full w-3/4 ">
            <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold text-teal-950">
              <span className="text-yellow-500">Shopping</span> has <br></br>{" "}
              never been so easy.
            </h1>
            <p className="text-xs sm:text-sm lg:text-lg font-medium text-teal-900">
              Get everything you want and need by scrolling and click, and your
              orders will be delivered at your doorstep.
            </p>
            <button
              onClick={() => {
                navigate("/products");
              }}
              className="text-base sm:text-lg lg:text-2xl bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-2 sm:px-4 py-1 sm:py-2 rounded-lg"
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="w-1/2 my-auto">
          <img src={LANDING_PAGE_1} alt="Landing page snap" />
        </div>
      </div>
      {/* Shop by category section */}
      <div>
        <div className="my-3 md:my-6 mx-5 md:mx-10">
          <h2 className="text-teal-900 uppercase text-2xl font-semibold tracking-tight px-4">
            Shop by Category
          </h2>
          <ul className="flex flex-wrap justify-start gap-4 py-3 md:py-6 px-6 md:px-12">
            {categories &&
              categories.map((c, i) => (
                <li
                  key={i}
                  className="w-32 md:w-44 text-xs md:text-lg flex justify-center bg-teal-800 py-5 md:py-10 text-slate-100 capitalize shadow-md hover:scale-110 hover:cursor-pointer duration-200 rounded-md"
                >
                  {c}
                </li>
              ))}
          </ul>
        </div>
      </div>
      {/* Quote section */}
      <div className="mx-14 my-10">
        <div className="flex bg-yellow-600 text-violet-950">
          <div className="w-1/2 flex flex-col justify-center gap-6 px-8 lg:px-14 py-6 lg:py-10">
            <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold ">
              Elegantly curated fashion <br /> and cutting-edge electronics.
            </h2>
            <hr />
            <p className="text-xs sm:text-sm lg:text-xl tracking-tight">
              We're committed to providing our customers with a diverse
              selection, transparent details, and unparalleled service.
              <br /> Elevate your shopping experience with us.
            </p>
          </div>
          <div className="w-1/2 px-2 py-10">
            <img src={LANDING_PAGE_2} alt="Landing page snap2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
