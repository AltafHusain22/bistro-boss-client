/* eslint-disable no-unused-vars */

import { Helmet } from "react-helmet-async";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../../components/shared/cover/Cover";
import shopImg from "../../../public/Assets/shop/banner2.jpg";
import "./Tab.css";
import useMenu from "../../hooks/useMenu";
import FoodCards from "../../components/shared/FoodCards/FoodCards";
import CardTabs from "../../components/shared/CardTabs/CardTabs";

const OrderFood = () => {
  const [products] = useMenu();
  const salads = products.filter((items) => items.category === "salad");
  const desserts = products.filter((items) => items.category === "dessert");
  const pizzas = products.filter((items) => items.category === "pizza");
  const soups = products.filter((items) => items.category === "soup");
  const drinks = products.filter((items) => items.category === "drinks");

  return (
    <div>
      {/* dynamic title */}
      <Helmet>
        <title>Bistro Boss | Order </title>
      </Helmet>
      {/* top cover image */}
      <div className="mb-20">
        <Cover
          img={shopImg}
          mainHeading="OUR SHOP"
          subText="Would you like to try a dish?"
        ></Cover>
      </div>
      {/* tab section */}
      <Tabs className="w-3/4 mx-auto" forceRenderTabPanel defaultIndex={1}>
        {/* for first tab */}
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>Salad</Tab>
              <Tab>Pizza</Tab>
              <Tab>Soups</Tab>
              <Tab>Deserts</Tab>
              <Tab>Drinks</Tab>
            </TabList>
            {/* salad */}
            <TabPanel>
              <CardTabs items={salads}></CardTabs>
            </TabPanel>
			{/* pizzas */}
            <TabPanel>
              <CardTabs items={pizzas}></CardTabs>
            </TabPanel>
			{/* soup */}
            <TabPanel>
			<CardTabs items={soups}></CardTabs>
			</TabPanel>
			{/* Deserts */}
            <TabPanel>
			<CardTabs items={desserts}></CardTabs>
			</TabPanel>
			{/* drinks */}
            <TabPanel>
			<CardTabs items={drinks}></CardTabs>
			</TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderFood;
