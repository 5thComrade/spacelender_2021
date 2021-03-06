import React from "react";
import classes from "./Burgermenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/reducers/ui";

const Burgermenu = () => {
  const dispatch = useDispatch();
  const showDropNavBar = useSelector((state) => state.ui.showDropNavBar);

  const handleClick = () => {
    dispatch(uiActions.updateShowDropNavBar());
  };
  return (
    <div className={classes.plates}>
      <div
        className={
          showDropNavBar
            ? `${classes.plate} ${classes.plate2} ${classes.active}`
            : `${classes.plate} ${classes.plate2}`
        }
        onClick={handleClick}
      >
        <svg
          className={classes.burger}
          version="1.1"
          height="100"
          width="100"
          viewBox="0 0 100 100"
        >
          <path
            className={`${classes.line} ${classes.line1}`}
            d="M 50,65 H 70 C 70,65 75,65.198488 75,70.762712 C 75,73.779026 74.368822,78.389831 66.525424,78.389831 C 22.092231,78.389831 -18.644068,-30.508475 -18.644068,-30.508475"
          />
          <path
            className={`${classes.line} ${classes.line2}`}
            d="M 50,35 H 70 C 70,35 81.355932,35.300135 81.355932,25.635593 C 81.355932,20.906215 78.841706,14.830508 72.881356,14.830508 C 35.648232,14.830508 -30.508475,84.322034 -30.508475,84.322034"
          />
          <path
            className={`${classes.line} ${classes.line3}`}
            d="M 50,50 H 30 C 30,50 12.288136,47.749959 12.288136,60.169492 C 12.288136,67.738339 16.712974,73.305085 40.677966,73.305085 C 73.791674,73.305085 108.47458,-19.915254 108.47458,-19.915254"
          />
          <path
            className={`${classes.line} ${classes.line4}`}
            d="M 50,50 H 70 C 70,50 81.779661,50.277128 81.779661,36.607372 C 81.779661,28.952694 77.941689,25 69.067797,25 C 39.95532,25 -16.949153,119.91525 -16.949153,119.91525"
          />
          <path
            className={`${classes.line} ${classes.line5}`}
            d="M 50,65 H 30 C 30,65 17.79661,64.618439 17.79661,74.152543 C 17.79661,80.667556 25.093813,81.355932 38.559322,81.355932 C 89.504001,81.355932 135.59322,-21.186441 135.59322,-21.186441"
          />
          <path
            className={`${classes.line} ${classes.line6}`}
            d="M 50,35 H 30 C 30,35 16.525424,35.528154 16.525424,24.152542 C 16.525424,17.535987 22.597755,13.559322 39.40678,13.559322 C 80.617882,13.559322 94.067797,111.01695 94.067797,111.01695"
          />
        </svg>
        <svg
          className={classes.x}
          version="1.1"
          height="100"
          width="100"
          viewBox="0 0 100 100"
        >
          <path className={classes.line} d="M 34,32 L 66,68" />
          <path className={classes.line} d="M 66,32 L 34,68" />
        </svg>
      </div>
    </div>
  );
};

export default Burgermenu;
