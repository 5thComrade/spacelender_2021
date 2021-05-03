import React from "react";
import classes from "./Footer.module.css";
import { IconContext } from "react-icons";
import { BsEnvelope, BsHouseDoor } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import logo from "../../assets/contact_logo.png";

const Footer = () => {
  return (
    <div className={classes.Footer} id="contact">
      <div className={classes.Logo}>
        <img src={logo} alt="spacelender logo" />
      </div>
      <div className={classes.Contact}>
        <p className={classes.Heading}>Contact Us</p>
        <div className={classes.Item}>
          <IconContext.Provider
            value={{ size: "24px", className: classes.Icon }}
          >
            <BsHouseDoor />
          </IconContext.Provider>
          <p>Address</p>
        </div>
        <div className={classes.Item}>
          <IconContext.Provider
            value={{ size: "24px", className: classes.Icon }}
          >
            <BsEnvelope />
          </IconContext.Provider>
          <p>contact@spacelender.co.in</p>
        </div>
        <div className={classes.Item}>
          <IconContext.Provider
            value={{ size: "24px", className: classes.Icon }}
          >
            <BiPhone />
          </IconContext.Provider>
          <p>+91 961-135-8806</p>
        </div>
        <div className={classes.Item}>
          <IconContext.Provider
            value={{ size: "24px", className: classes.Icon }}
          >
            <FaInstagram />
          </IconContext.Provider>
          <a
            href="https://www.instagram.com/"
            className={classes.SocialLink}
            target="_blank"
            rel="noreferrer"
          >
            Click here to follow us on Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
