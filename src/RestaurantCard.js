import React from "react";
import { restaurantList, CND_IMG_URL } from "./constant";
 

const RestaurantCard = ({name,cloudinaryImageId,cuisines,costForTwoString}) => {
    //fdfd
    return (
      <div className="card">
        <img src={CND_IMG_URL +'/'+ cloudinaryImageId } alt="restaurantImg" />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4> {costForTwoString}</h4>
      </div>
    );
  };

  export default RestaurantCard;