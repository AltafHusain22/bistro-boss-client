/* eslint-disable react/prop-types */

const MenuCategoryCard = ({ items }) => {
  const { name, recipe, image, price } = items;

  return (
    <div className="flex gap-10 mb-5 md:mr-20 ">
      <img
        className="md:w-28 w-20 h-20 object-cover"
        style={{ borderRadius: "0px 200px 200px 200px" }}
        src={image}
      />
      <div>
        <p className="uppercase mb-2">{name}</p>
        <p className="w-full">{recipe}</p>
      </div>
      <p className="text-end text-[#D99904]">${price}</p>
    </div>
  );
};

export default MenuCategoryCard;
