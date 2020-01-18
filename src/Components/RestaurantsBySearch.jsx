import React, { useState, useEffect } from "react";
import Restaurants from "./Restaurants";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import axios from "axios";

function RestaurantsBySearch() {
  const [isLoading, setIsLoading] = useState(true);
  const [restaurantsBySearch0, setRestaurantsBySearch0] = useState([]);
  const [restaurantsBySearch1, setRestaurantsBySearch1] = useState([]);
  const [restaurantsBySearch2, setRestaurantsBySearch2] = useState([]);
  const restaurantsBySearch = restaurantsBySearch0
    .concat(restaurantsBySearch1)
    .concat(restaurantsBySearch2);
  //
  //Pagination
  //
  const [currentRestaurant, setCurrentRestaurant] = useState(1);
  const [restaurantsPerPage] = useState(12);

  const indexOfLastRestaurant = currentRestaurant * restaurantsPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;
  const currentRestaurants = restaurantsBySearch.slice(
    indexOfFirstRestaurant,
    indexOfLastRestaurant
  );
  //
  const paginate = currentRestaurant => setCurrentRestaurant(currentRestaurant);
  //
  //
  useEffect(() => {
    axios
      .all([
        axios({
          method: "GET",
          url:
            "https://developers.zomato.com/api/v2.1/search?start=0&count=20&lat=12.9790831&lon=77.7291274&sort=real_distance",
          headers: {
            "user-key": "4a1a772ad5debadfc83b54ef87d6c218",
            "content-type": "application/json"
          }
        }),
        axios({
          method: "GET",
          url:
            "https://developers.zomato.com/api/v2.1/search?start=20&count=20&lat=12.9790831&lon=77.7291274&sort=real_distance",
          headers: {
            "user-key": "4a1a772ad5debadfc83b54ef87d6c218",
            "content-type": "application/json"
          }
        }),
        axios({
          method: "GET",
          url:
            "https://developers.zomato.com/api/v2.1/search?start=40&count=20&lat=12.9790831&lon=77.7291274&sort=real_distance",
          headers: {
            "user-key": "4a1a772ad5debadfc83b54ef87d6c218",
            "content-type": "application/json"
          }
        })
      ])
      .then(responseArr => {
        setIsLoading(false);
        setRestaurantsBySearch0(responseArr[0].data.restaurants);
        setRestaurantsBySearch1(responseArr[1].data.restaurants);
        setRestaurantsBySearch2(responseArr[2].data.restaurants);
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
    console.log(currentRestaurants);
    return (
      <React.Fragment>
        <div className="conatiner mx-auto mb-3">
          <SearchBar />
        </div>
        <div className="container my-2">
          <div className="card-deck">
            {currentRestaurants.map(restaurant => (
              <Restaurants
                rest={restaurant}
                key={restaurant.restaurant.id}
                id={restaurant.restaurant.id}
              />
            ))}
          </div>
        </div>
        <div className="conatiner mx-auto mt-3">
          <Pagination
            restaurantsPerPage={restaurantsPerPage}
            totalRestaurants={restaurantsBySearch.length}
            paginate={paginate}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default RestaurantsBySearch;
