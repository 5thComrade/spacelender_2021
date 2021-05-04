import React from "react";
import classes from "./Rest.module.css";
import Footer from "../../../components/Footer/Footer";
import About from "../About/About";
import Discover from "../Discover/Discover";
import Categories from "../Categories/Categories";

const Rest = () => {
  return (
    <div className={classes.Rest}>
      <Categories />
      <Discover />
      <About />
      <Footer />
    </div>
  );
};

export default Rest;
