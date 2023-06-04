/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Menu from "../Pages/Menu/Menu";
import OrderFood from "../Pages/OrderFood/OrderFood";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Secrect from "../Pages/Secret/Secrect";
import PrivateRotes from "../PrivateRoute/PrivateRotes";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/Mycart/MyCart";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import Reservation from "../Pages/Dashboard/Reservation/Reservation";
import Allusers from "../components/AllUsers/Allusers";
import AddItems from "../components/AddItems/AddItems";
import ManageItems from "../components/ManageItems/ManageItems";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order",
        element: <OrderFood></OrderFood>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/secret",
        element: (
          <PrivateRotes>
            <Secrect></Secrect>
          </PrivateRotes>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRotes><Dashboard></Dashboard></PrivateRotes>,
    children: [
      {
        path: "myCart",
        element: <MyCart></MyCart>
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: "reservation",
        element: <Reservation></Reservation>
      },
      {
        path: "allusers",
        element: <Allusers></Allusers>
    
      },

     
      {
        path: "additems",
        element:<AddItems></AddItems>
      },
      {
        path: "update",
        element:<ManageItems></ManageItems>
      },
   
    ],
  },
]);
