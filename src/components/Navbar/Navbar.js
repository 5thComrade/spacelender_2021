import React, { useState } from "react";
import classes from "./Navbar.module.css";
import Burgermenu from "../Burgermenu/Burgermenu";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(false);

  const showDropDownNav = useSelector((state) => state.ui.showDropNavBar);

  const changeBg = () => {
    if (window.scrollY >= 70) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  return (
    <React.Fragment>
      <div
        className={
          navbarBg ? `${classes.Navbar} ${classes.active}` : `${classes.Navbar}`
        }
      >
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
