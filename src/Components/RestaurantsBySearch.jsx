import React, { useState, useEffect } from "react";
import Restaurants from "./Restaurants";
import axios from "axios";

function RestaurantsBySearch() {
  const [isLoading, setIsLoading] = useState(true);
  const [restaurantsBySearch, setRestaurantsBySearch] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url:
        "https://developers.zomato.com/api/v2.1/search?start=0&count=20&lat=12.9790831&lon=77.7291274&sort=real_distance",
      headers: {
        "user-key": "4a1a772ad5debadfc83b54ef87d6c218",
        "content-type": "application/json"
      }
    })
      .then(response => {
        setIsLoading(false);
        setRestaurantsBySearch(response.data.restaurants);
      })

      .catch(error => {
        setIsLoading(false);
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return (
      <h1 className="p-5 m-5 text-muted ">
        Loading<span className=" mx-2 spinner-border"></span>
      </h1>
    );
  } else {
    console.log(restaurantsBySearch);
    return (
      <React.Fragment>
        <div className="container">
          <div className="card-deck">
            {restaurantsBySearch.map(restaurant => (
              <Restaurants
                rest={restaurant}
                key={restaurant.restaurant.id}
                id={restaurant.restaurant.id}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RestaurantsBySearch;
