import React from "react";
import Header from "./Header";
import HeroSection from "./MainPageComponents/HeroSection";
import TrendingProducts from "./MainPageComponents/TrendingProducts";
import Footer from "./Footer";

const MainPage = () => {
  return (
    <div>
      <Header />
      <div>
        <HeroSection />
        <TrendingProducts />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
