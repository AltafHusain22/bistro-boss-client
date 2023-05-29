/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Menu from "../Pages/Menu/Menu";
import OrderFood from "../Pages/OrderFood/OrderFood";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
	children: [
		{
			path: '/',
			element: <Home></Home>
		},
		{
			path: '/menu',
			element: <Menu></Menu>
		},
		{
			path: '/order',
			element: <OrderFood></OrderFood>
		},
		{
			path: '/login',
			element: <Login></Login>
		}
	]
  },
]);
