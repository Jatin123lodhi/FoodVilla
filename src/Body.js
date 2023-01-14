import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "./constant";
export const Body = () => {
  // let searchText = 'KFC'; // local variable in js
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
    <>
      <div className="search_container">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search_btn"
          onClick={() => {
            //filter the data corresponding to the searchText and update the UI
            // so we should have updated restaurantaList , so we have to maintain a state
            let searchedRes = restaurantList.filter((restaurant)=>{
              return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase());
            });
            setRestaurants(searchedRes);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurantObj) => {
          return (
            <RestaurantCard
              {...restaurantObj.data}
              key={restaurantObj.data.name}
            />
          );
        })}
      </div>
    </>
  );
};
