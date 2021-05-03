import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <>
      <h2 className={classes.Heading} id="about">
        About Us
      </h2>
      <div className={classes.About}>
        <div className={classes.Images}>
          <div className={classes.Section1}>
            <div className={classes.Img1}></div>
            <div className={classes.Img2}></div>
          </div>
          <div className={classes.Section2}>
            <div className={classes.Img3}></div>
          </div>
        </div>
        <div className={classes.Content}>
          <div className={classes.Item}>
            <h2>Unique Spaces</h2>
            <p>
              Every day we uncover new, creative spaces - from neighborhood
              galleries to hidden rooftops and beyond.
            </p>
          </div>
          <div className={classes.Item}>
            <h2>Honest Prcing</h2>
            <p>
              Our spaces are priced to fit your budget. Pay by the hour without
              worrying about hidden fees.
            </p>
          </div>
          <div className={classes.Item}>
            <h2>Smooth Pricing</h2>
            <p>
              No more messy contracts. We build the tools to make booking a
              space as easy as the click of a button.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
