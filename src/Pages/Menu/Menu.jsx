/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import Cover from "../../components/shared/cover/Cover";
import img from "../../../public/Assets/menu/banner3.jpg";
import soupImg from "../../../public/Assets/menu/soup-bg.jpg";
import HeadingTitle from "../../components/shared/HeadingTitle/HeadingTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategoryCard from "../../components/shared/MenuCategory/MenuCategoryCard";
import { Link } from "react-router-dom";
import MenuCategory from "../../components/shared/MenuCategory/MenuCategory";

const Menu = () => {
  const [products] = useMenu();

  const salads = products.filter((items) => items.category === "salad");
  const desserts = products.filter((items) => items.category === "dessert");
  const pizzas = products.filter((items) => items.category === "pizza");
  const soups = products.filter((items) => items.category === "soup");
  const offered = products.filter((items) => items.category === "salad");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* offered section */}
      <section>
        <div className="mb-20">
          <Cover
            img={img}
            mainHeading="OUR MENU"
            subText="Would you like to try a dish?"
          ></Cover>
        </div>
        <div>
          <HeadingTitle
            mainHeading="Today's Offer"
            subHeading="Don't miss"
          ></HeadingTitle>
        </div>

        <div>
          <MenuCategory items={offered}> </MenuCategory>
        </div>
      </section>
      {/* salad section */}
      <section>
        <div className="mb-20">
          <Cover
            img={img}
            mainHeading="DESSERTS"
            subText="Would you like to try a dish?"
          ></Cover>
        </div>
        <div>
          <HeadingTitle
            mainHeading="Today's deserts"
            subHeading="Don't miss this deserts"
          ></HeadingTitle>
        </div>

        <div>
          <MenuCategory items={desserts}> </MenuCategory>
        </div>
      </section>
      {/* pizza section */}
      <section>
        <div className="mb-20">
          <Cover
            img={img}
            mainHeading="OUR PIZZA"
            subText="Would you like to try a dish?"
          ></Cover>
        </div>
        <div>
          <HeadingTitle
            mainHeading="Today's pizza"
            subHeading="Don't miss"
          ></HeadingTitle>
        </div>

        <div>
          <MenuCategory items={pizzas}> </MenuCategory>
        </div>
      </section>
      {/* salad section */}
      <section>
        <div className="mb-20">
          <Cover
            img={img}
            mainHeading="SALADS"
            subText="Would you like to try a dish?"
          ></Cover>
        </div>
        <div>
          <HeadingTitle
            mainHeading="Today's Salad"
            subHeading="Don't miss"
          ></HeadingTitle>
        </div>

        <div>
          <MenuCategory items={salads}> </MenuCategory>
        </div>
      </section>
      {/* soup section */}
      <section>
        <div className="mb-20">
          <Cover
            img={img}
            mainHeading="SOUP"
            subText="Would you like to try a dish?"
          ></Cover>
        </div>
        <div>
          <HeadingTitle
            mainHeading="Today's Soup"
            subHeading="Don't miss"
          ></HeadingTitle>
        </div>

        <div>
          <MenuCategory items={soups}> </MenuCategory>
        </div>
      </section>

 
    </div>
  );
};

export default Menu;
