/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "./HomeComponents/Banner/Banner";
import CategoryCarosel from "./HomeComponents/CategoryCarosel/CategoryCarosel";
import About from "./HomeComponents/About/About";
import ProductsMenu from "./HomeComponents/ProductsMenu/ProductsMenu";

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <CategoryCarosel></CategoryCarosel>
        <About></About>
        <ProductsMenu></ProductsMenu>
    </div>
  );
};

export default Home;
