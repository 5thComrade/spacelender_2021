import React from "react";
import classes from "./Navbar.module.css";
import Burgermenu from "../Burgermenu/Burgermenu";
import { useSelector } from "react-redux";

const Navbar = () => {
  const showDropDownNav = useSelector((state) => state.ui.showDropNavBar);

  return (
    <React.Fragment>
      <div className={classes.Navbar}>
        <div>
          <p>Spacelender</p>
        </div>
        <Burgermenu />
        <ul className={classes.Nav_Links}>
          <li>
            <button>About Us</button>
          </li>
          <li>
            <button>Contact</button>
          </li>
          <li>
            <button>Log In</button>
          </li>
        </ul>
      </div>
      <div
        className={
          !showDropDownNav
            ? `${classes.DropdownNav}`
            : `${classes.DropdownNav} ${classes.active}`
        }
      >
        <ul className={classes.Nav_Links_Dropdown}>
          <li>
            <button>About Us</button>
          </li>
          <li>
            <button>Contact</button>
          </li>
          <li>
            <button>Log In</button>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
