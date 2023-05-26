/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import HeadingTitle from "../../../../components/shared/HeadingTitle/HeadingTitle";
import ProductsMenuCard from "../../../../components/shared/ProductsMenuCard/ProductsMenuCard";

const ProductsMenu = () => {
  const [productsMenues, setProductsMenues] = useState([]);

  useEffect(() => {
    fetch("productsMenu.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredProducts = data.filter(
          (product) => product.category === "popular"
        );
        setProductsMenues(filteredProducts);
      });
  }, []);

  return (
    <section>
      <HeadingTitle
        subHeading="Check it out"
        mainHeading="FROM OUR MENU"
      ></HeadingTitle>

      <div className="grid md:grid-cols-2 gap-5 my-10 mx-5">
        {productsMenues.map((popularItems) => (
          <ProductsMenuCard
            key={popularItems._id}
            popularItems={popularItems}
          ></ProductsMenuCard>
        ))}
      </div>
      <div className="text-center mb-10">
        <button className="btn btn-outline border-0 border-b-4 text-center">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default ProductsMenu;
