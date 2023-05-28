/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const FoodCards = ({item}) => {
  const { _id, name, recipe, image, price } = item;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={image} />
      </figure>
      <p className="bg-black px-5 py-2 absolute text-white right-0 mr-5 mt-5">${price}</p>
      <div className="card-body text-center">
        <h2 className="font-bold text-center text-2xl">{name}</h2>
        <p>{recipe}</p>
      </div>
    </div>
  );
};

export default FoodCards;
