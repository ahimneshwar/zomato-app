import React, { useState, useEffect } from "react";
// import RestaurantsBySearch from "./RestaurantsBySearch";

function SearchBar({ rest }) {
  const restaurants = rest.map(restt => (restt || {}).restaurant || {});
  let people = restaurants;
  // console.log(restaurants.map(restaurant => restaurant.name));
  // console.log(people.map(restaurant => restaurant.id));
  // console.log(people);

  const [searchTerm, setSearchTerm] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = people
      .map(restaurant => restaurant.name)
      .filter(person => person.toLowerCase().includes(searchTerm));
    setSearchResults(results);
  }, [searchTerm]);

  console.log(searchTerm);
  console.log(searchResults);
  console.log(searchResults);

  return (
    <React.Fragment>
      <div className="container">
        <input
          className="form-control"
          list="people"
          name="people"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
          // onSubmit={handleSubmit}
          autoComplete="on"
        />
        <datalist id="people">
          {searchResults.map(item => (
            <option value={item} />
          ))}
        </datalist>
      </div>
    </React.Fragment>
  );
}

export default SearchBar;
