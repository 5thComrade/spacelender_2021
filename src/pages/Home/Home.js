import React from "react";
import Hero from "./Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.Home}>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
