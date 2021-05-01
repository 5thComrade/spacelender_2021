import React, { useEffect, useState } from "react";
import classes from "./Hero.module.css";
import Search from "../../../components/Search/Search";
import spacelender_1 from "../../../assets/spacelender_1.jpg";
import spacelender_2 from "../../../assets/spacelender_2.jpg";
import spacelender_3 from "../../../assets/spacelender_3.jpg";

const Hero = () => {
  // const background_imgs = [spacelender_1, spacelender_2, spacelender_3];
  const background_imgs = [
    {
      event: "Birthday",
      image: spacelender_1,
    },
    {
      event: "Meeting",
      image: spacelender_2,
    },
    {
      event: "Reception",
      image: spacelender_3,
    },
  ];
  const [background, setBackground] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (background === 2) {
        setBackground(0);
      } else {
        setBackground((prevState) => prevState + 1);
      }
    }, 3000);
    return () => clearTimeout(timeout);
  }, [background]);

  return (
    <div className={classes.Hero}>
      <Search />
      <h1 className={classes.H1}>
        Find the <span>Perfect Space</span>
      </h1>
      <h1 className={classes.H2}>
        for your next {background_imgs[background].event}
      </h1>
      <img src={background_imgs[background].image} alt="venue" />
      <div className={classes.Overlay}></div>
    </div>
  );
};

export default Hero;
