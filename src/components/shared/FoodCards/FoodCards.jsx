/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import Swal from "sweetalert2/dist/sweetalert2.js";
import useCart from "../../../hooks/useCart";
import "sweetalert2/dist/sweetalert2.min.css";

const FoodCards = ({ item }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  const { _id, name, recipe, image, price } = item;

  const handleAddToCart = (item) => {
    if (user && user.email ) {
      const orderItem = { foodId: _id , name, recipe, image, price , email: user.email }
      fetch(`http://localhost:5000/cart`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire("Good job!", "Item Added to Cart!", "success");
          }
        });
    }else{
     
        Swal.fire({
          title: "Do you Want to Buy?",
          text: "Please Login Before to order the food!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Login",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from:location}})
          }
        });
   
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={image} />
      </figure>
      <p className="bg-black px-5 py-2 absolute text-white right-0 mr-5 mt-5">
        ${price}
      </p>
      <div className="card-body text-center">
        <h2 className="font-bold text-center text-2xl">{name}</h2>
        <p>{recipe}</p>
      </div>
      <div className="text-center mb-5">
        <button
          onClick={() => handleAddToCart(item)}
          className="btn btn-outline border-0 border-b-4 text-center"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCards;
