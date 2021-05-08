import React from "react";
import classes from "./Loading.module.css";
import { useSelector } from "react-redux";
import hourglass from "../../assets/Hourglass.gif";

const Loading = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  if (isLoading) {
    document.body.style.overflow = "hidden";
  }

  return (
    <>
      {isLoading && (
        <div className={classes.Loading}>
          <div className={classes.Container}>
            <img src={hourglass} alt="Hourglass" />
          </div>
          <p>Finding the perfect spaces for you...</p>
        </div>
      )}
    </>
  );
};

export default Loading;
