import React, { useState } from "react";
import classes from "./Navbar.module.css";
import Burgermenu from "../Burgermenu/Burgermenu";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../assets/logo.png";
import { uiActions } from "../../store/reducers/ui";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(false);
  const dispatch = useDispatch();

  const path = useLocation().pathname;

  const showDropDownNav = useSelector((state) => state.ui.showDropNavBar);

  const hideDropdown = () => {
    dispatch(uiActions.updateShowDropNavBar());
  };

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
          navbarBg || path !== "/"
            ? `${classes.Navbar} ${classes.active}`
            : `${classes.Navbar}`
        }
      >
        <div className={classes.Logo}>
          <img src={logo} alt="spacelender logo" />
          <p>spacelender</p>
        </div>
        <Burgermenu />
        <ul className={classes.Nav_Links}>
          {path === "/" && (
            <li>
              <a href="#about">About Us</a>
            </li>
          )}
          {path === "/" && (
            <li>
              <a href="#contact">Contact</a>
            </li>
          )}
          <li>
            <a href="#about">Log In</a>
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
          {path === "/" && (
            <li>
              <a href="#about" onClick={hideDropdown}>
                About Us
              </a>
            </li>
          )}
          {path === "/" && (
            <li>
              <a href="#contact" onClick={hideDropdown}>
                Contact
              </a>
            </li>
          )}
          <li>
            <a href="#about" onClick={hideDropdown}>
              Log In
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
