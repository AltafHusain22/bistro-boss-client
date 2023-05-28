/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import HeadingTitle from "../../../../components/shared/HeadingTitle/HeadingTitle";
import ProductsMenuCard from "../../../../components/shared/ProductsMenuCard/ProductsMenuCard";
import useMenu from "../../../../hooks/useMenu";
import { Link } from "react-router-dom";

const ProductsMenu = () => {
  const [menues] = useMenu(); //---- must be load in array ---
  const popularMenu = menues.filter((menu) => menu.category === "popular");

  return (
    <section>
      <div className="grid md:grid-cols-2 gap-5 my-10 mx-5">
        {popularMenu.map((popularItems) => (
          <ProductsMenuCard
            key={popularItems._id}
            popularItems={popularItems}
          ></ProductsMenuCard>
        ))}
      </div>
      <div className="text-center mb-10">
        <Link to={'/order'}>
          <button className="btn btn-outline border-0 border-b-4 text-center">
            View Full Menu
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ProductsMenu;
