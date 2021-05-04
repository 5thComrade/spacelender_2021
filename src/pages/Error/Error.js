import classes from "./Error.module.css";
import React from "react";
import ghost from "../../assets/Ghost.gif";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className={classes.Error}>
      <div className={classes.Container}>
        <img src={ghost} alt="Ghost gif" />
      </div>
      <h2>404</h2>
      <p>Oops! Looks like you are lost</p>
      <Link to="/" className={classes.homeButton}>
        go home
      </Link>
    </div>
  );
};

export default Error;
