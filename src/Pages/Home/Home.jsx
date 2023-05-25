/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "./HomeComponents/Banner/Banner";
import CategoryCarosel from "./HomeComponents/CategoryCarosel/CategoryCarosel";
import About from "./HomeComponents/About/About";
import ProductsMenu from "./HomeComponents/ProductsMenu/ProductsMenu";
import CallToAction from "./HomeComponents/CallToAction/CallToAction";

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <CategoryCarosel></CategoryCarosel>
        <About></About>
        <ProductsMenu></ProductsMenu>
        <CallToAction></CallToAction>
    </div>
  );
};

export default Home;
