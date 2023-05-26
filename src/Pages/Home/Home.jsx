/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "./HomeComponents/Banner/Banner";
import CategoryCarosel from "./HomeComponents/CategoryCarosel/CategoryCarosel";
import About from "./HomeComponents/About/About";
import ProductsMenu from "./HomeComponents/ProductsMenu/ProductsMenu";
import CallToAction from "./HomeComponents/CallToAction/CallToAction";
import ChefRecommend from "./HomeComponents/ChefRecommend/ChefRecommend";
import { Helmet } from "react-helmet-async";
import FromOurMenu from "./HomeComponents/FromOurMenu/FromOurMenu";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <CategoryCarosel></CategoryCarosel>
      <About></About>
      <ProductsMenu></ProductsMenu>
      <CallToAction></CallToAction>
      <ChefRecommend></ChefRecommend>
      <FromOurMenu></FromOurMenu>
    </div>
  );
};

export default Home;
