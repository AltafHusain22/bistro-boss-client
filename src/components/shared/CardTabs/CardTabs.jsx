import FoodCards from "../FoodCards/FoodCards";

/* eslint-disable react/prop-types */
const CardTabs = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 gap-5 mx-auto my-10 ">
      {items.map((item) => (
        <FoodCards key={item._id} item={item}></FoodCards>
      ))}
    </div>
  );
};

export default CardTabs;
