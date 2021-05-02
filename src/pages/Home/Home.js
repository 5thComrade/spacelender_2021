import React from "react";
import Hero from "./Hero/Hero";
import classes from "./Home.module.css";
import Rest from "./Rest/Rest";

const Home = () => {
  return (
    <div className={classes.Home}>
      <Hero />
      <Rest />
    </div>
  );
};

export default Home;
