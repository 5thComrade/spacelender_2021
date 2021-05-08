import React from "react";
import classes from "./VenueCard.module.css";
import { IconContext } from "react-icons";
import { GoLocation } from "react-icons/go";
import { BsFillPeopleFill } from "react-icons/bs";

const VenueCard = ({ venue }) => {
  const { venueName, image, address, features, capacity, price, tag } = venue;
  return (
    <div className={classes.VenueCard}>
      <div className={classes.Img}>
        <img src={image} alt={venueName} />
        <p className={classes.Tag}>{tag}</p>
      </div>
      <div className={classes.Content}>
        <p className={classes.Name}>{venueName}</p>
        <div className={classes.Address}>
          <IconContext.Provider
            value={{ size: "20px", className: classes.Icon }}
          >
            <GoLocation />
          </IconContext.Provider>
          <p>{address}</p>
        </div>
        <div className={classes.Features}>
          {features.map((feature, index) => {
            if (index < 3) {
              return <p key={index}>{feature}</p>;
            } else {
              return null;
            }
          })}
        </div>
        <div className={classes.Footer}>
          <div className={classes.Price}>
            <p>Rs. {price}/day</p>
          </div>
          <div className={classes.Capacity}>
            <IconContext.Provider
              value={{ size: "20px", className: classes.CapacityIcon }}
            >
              <BsFillPeopleFill />
            </IconContext.Provider>
            <p>10-{capacity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueCard;
