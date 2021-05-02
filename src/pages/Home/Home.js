import React from "react";
import Hero from "./Hero/Hero";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.Home}>
      <Hero />
    </div>
  );
};

export default Home;
