import React from "react";
import classes from "./Rest.module.css";
import Footer from "../../../components/Footer/Footer";
import About from "../About/About";

const Rest = () => {
  return (
    <div className={classes.Rest}>
      <About />
      <Footer />
    </div>
  );
};

export default Rest;
