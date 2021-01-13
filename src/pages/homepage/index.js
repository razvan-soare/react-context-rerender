import React from "react";
import { HomepageWrapperCss } from "./index.css";
import AddItem from "../../components/AddItem";
import DisplayCart from "../../components/DisplayCart";
import Header from "../../components/Header";

const Homepage = () => {
  return (
    <HomepageWrapperCss>
      <Header />
      <AddItem />
      <DisplayCart />
    </HomepageWrapperCss>
  );
};

export default Homepage;
