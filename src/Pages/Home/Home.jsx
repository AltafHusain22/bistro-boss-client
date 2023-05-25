/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "./HomeComponents/Banner/Banner";
import CategoryCarosel from "./HomeComponents/CategoryCarosel/CategoryCarosel";
import About from "./HomeComponents/About/About";

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <CategoryCarosel></CategoryCarosel>
        <About></About>
    </div>
  );
};

export default Home;
