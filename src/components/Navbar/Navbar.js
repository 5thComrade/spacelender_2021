import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.Navbar}>
      <div>
        <p>Spacelender</p>
      </div>
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
  );
};

export default Navbar;
