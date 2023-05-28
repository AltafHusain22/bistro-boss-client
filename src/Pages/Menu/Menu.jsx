/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import Cover from "../../components/shared/cover/Cover";
import img1 from "../../../public/Assets/menu/banner3.jpg";
import soupImg from "../../../public/Assets/menu/soup-bg.jpg";
import HeadingTitle from "../../components/shared/HeadingTitle/HeadingTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategoryCard from "../../components/shared/MenuCategory/MenuCategoryCard";

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
      <div className="mb-20">
        <Cover
          img1={img1}
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
      {/* offered */}
        <div>
          <div className="grid md:grid-cols-2 gap-5 my-10 mx-5">
            {offered.map((items) => (
              <MenuCategoryCard
                key={items._id}
                items={items}
              ></MenuCategoryCard>
            ))}
          </div>
          <div className="text-center mb-10">
            <button className="btn btn-outline border-0 border-b-4 text-center">
              View Full Menu
            </button>
          </div>
        </div>

      {/* soups */}
      <div className="mb-20">
        <Cover
          img1={soupImgj}
          mainHeading="OUR MENU"
          subText="Would you like to try a dish?"
        ></Cover>
      </div>
      <div>
        <HeadingTitle
          mainHeading="Today's soup"
          subHeading="Don't miss"
        ></HeadingTitle>
      </div>
        <div>
          <div className="grid md:grid-cols-2 gap-5 my-10 mx-5">
            {soups.map((items) => (
              <MenuCategoryCard
                key={items._id}
                items={items}
              ></MenuCategoryCard>
            ))}
          </div>
          <div className="text-center mb-10">
            <button className="btn btn-outline border-0 border-b-4 text-center">
              View Full Menu
            </button>
          </div>
        </div>

    </div>
  );
};

export default Menu;
