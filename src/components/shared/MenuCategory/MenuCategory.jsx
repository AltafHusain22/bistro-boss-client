/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import MenuCategoryCard from "./MenuCategoryCard";

const MenuCategory = ({ items }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-5 my-10 mx-5">
        {items.map((items) => (
          <MenuCategoryCard key={items._id} items={items}></MenuCategoryCard>
        ))}
      </div>
      <div className="text-center mb-10">
        <Link to={"/order"}>
          <button className="btn btn-outline border-0 border-b-4 text-center">
            View Full Menu
          </button>
        </Link>
      </div>
    </>
  );
};

export default MenuCategory;
