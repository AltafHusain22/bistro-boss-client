/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import HeadingTitle from "../../../../components/shared/HeadingTitle/HeadingTitle";
import ChefRecommendCard from "../../../../components/shared/ChefRecommedCard/ChefRecommendCard";

const ChefRecommend = () => {
  const [cardItems, setCardItems] = useState([]);
  useEffect(() => {
    fetch("productsMenu.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredProducts = data.filter(
          (product) => product.category === "popular"
        );
        setCardItems(filteredProducts);
      });
  }, []);

  return (
    <section>
      <HeadingTitle
        subHeading="Should Try"
        mainHeading="CHEF RECOMMENDS"
      ></HeadingTitle>

      <div className="grid md:grid-cols-3 gap-10 mb-10">
        {cardItems.map((products) => (
          <ChefRecommendCard key={products._id} prducts={products}></ChefRecommendCard>
        ))}
      </div>
    </section>
  );
};

export default ChefRecommend;
