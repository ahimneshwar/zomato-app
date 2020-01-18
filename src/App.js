import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RestaurantsBySearch from "./Components/RestaurantsBySearch";
import RestaurantDetails from "./Components/RestaurantDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <React.Fragment>
        <div className="jumbotron jumbotron-fluid p-5">
          <Link
            to="/"
            className="text-decoration-none text-danger text-center mb-0"
          >
            <h1>Zomato</h1>
          </Link>
        </div>
        <br />
        <Route exact path="/" component={RestaurantsBySearch} />
        <Route path="/details/:id" component={RestaurantDetails} />
        <br />
        <div className="jumbotron jumbotron-fluid m-0 p-4 mt-0">
          <Link
            to="/"
            target="_top"
            className=" text-decoration-none text-danger text-center"
          >
            <p>Home</p>
          </Link>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
