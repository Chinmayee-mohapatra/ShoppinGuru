import React from "react";

const Footer = () => {
  return (
    <div className=" mx-12 mb-10 bg-teal-950 text-slate-100">
      <div className="flex flex-col items-center gap-2 px-4  py-24">
        <h2 className="text-3xl font-bold tracking-tight">
          Subscribe to our news letter
        </h2>
        <p className="tracking-tight text-center font-light">
          Be the first to know about releases and industry <br /> news and
          insights.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex gap-1"
        >
          <input
            type="email"
            placeholder="Enter Email Address"
            className="px-2 py-1"
          />
          <button className="bg-green-700 text-white font-medium px-4 py-1">
            Subscribe
          </button>
        </form>
      </div>

      <div className="flex flex-col gap-16 ">
        <div className="flex justify-around font-light">
          <div>
            <ul className="space-y-2">
              <li>Contact US</li>
              <li>Whatsapp</li>
              <li>Email</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>About</li>
              <li>Bulk Orders</li>
              <li>Reward Point</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>Services</li>
              <li>Delivery</li>
              <li>How to Return</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>FAQ</li>
              <li>Discover More</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto pb-4">
          Copyright @ 2024 ❤️ <i>Chinmayee</i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
