/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import Footer from "../components/shared/Footer/Footer";


const Main = () => {
  const location = useLocation()
  const isLogin = location.pathname.includes('login')
  const isRegister = location.pathname.includes('register')
  return (
    <div>
      { isLogin ||
        <Header></Header>
      }
       <Outlet></Outlet>
      {
      isLogin || <Footer></Footer>
      }
    </div>
  );
};

export default Main;
