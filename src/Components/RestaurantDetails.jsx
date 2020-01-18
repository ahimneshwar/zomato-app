import React, { useState, useEffect } from "react";
import Reviews from "./Reviews";
// import Maps from "./Maps";
import axios from "axios";

function RestaurantDetails(props) {
  const id = props.match.params.id;
  const [isLoading, setIsLoading] = useState(true);
  const [restaurantDetails, setRestaurantDetails] = useState({});
  const user_rating = (restaurantDetails || {}).user_rating || {};
  const color =
    (((restaurantDetails || {}).user_rating || {}).rating_obj || {}).bg_color ||
    {};
  const location = (restaurantDetails || {}).location || {};
  // const highlights = (restaurantDetails || {}).highlights || {};
  const imgStyle = {
    width: "100%",
    height: "40rem"
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://developers.zomato.com/api/v2.1/restaurant?res_id=${id}`,
      headers: {
        "user-key": "4a1a772ad5debadfc83b54ef87d6c218",
        "content-type": "application/json"
      }
    })
      .then(response => {
        setIsLoading(false);
        setRestaurantDetails(response.data);
      })

      .catch(error => {
        setIsLoading(false);
        console.log(error);
      });
  }, [id]);

  if (isLoading) {
    return (
      <h1 className="p-5 m-5 text-muted ">
        Loading<span className=" mx-2 spinner-border"></span>
      </h1>
    );
  } else {
    return (
      <>
        <div className="container-fluid">
          <div className="card">
            <img
              className="card-img-top img-fluid p-5"
              src={restaurantDetails.featured_image}
              alt=""
              style={imgStyle}
            />

            <div className="card-body">
              <div>
                <div className="row mt-4">
                  <div className="col text-centre">
                    <div className="card-title">
                      <h1>{restaurantDetails.name}</h1>
                      <h4 className="text-muted">{location.locality}</h4>
                      <h5 className="text-muted">
                        {restaurantDetails.establishment}
                      </h5>
                    </div>
                  </div>

                  <div className="text-right">
                    <div
                      className="badge"
                      style={{
                        backgroundColor: `${color.type}`,
                        fontSize: 24
                      }}
                    >
                      {user_rating.aggregate_rating}/5
                    </div>

                    <p
                      className="text-muted"
                      style={{
                        fontSize: 16
                      }}
                    >
                      {user_rating.votes} votes <br />
                      {restaurantDetails.all_reviews_count} reviews
                    </p>
                  </div>
                </div>
              </div>

              <div className="container-fluid p-0">
                <ul className="nav nav-tabs nav-justified" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#overview"
                    >
                      Overview
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#menu">
                      Menu
                    </a>
                  </li> */}
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#reviews">
                      Reviews
                    </a>
                  </li>
                </ul>

                <div className="tab-content p-2 m-2">
                  <div
                    id="overview"
                    className="container-fluid tab-pane active"
                  >
                    <div className="container">
                      <div className="card-deck">
                        <div className="col-md-6 col-lg-4">
                          <div className="card m-2 p-3 border-0">
                            <h4>Timings</h4>
                            {restaurantDetails.timings}
                          </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                          <div className="card m-2 p-3 border-0">
                            <h4>Phone Numbers</h4>
                            {restaurantDetails.phone_numbers}
                          </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                          <div className="card m-2 p-3 border-0">
                            <h4> Cuisines</h4>
                            {restaurantDetails.cuisines}
                          </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                          <div className="card m-2 p-3 border-0">
                            <h4>Address</h4>
                            {location.address}
                            <br />
                            {location.city} ,{location.zipcode}
                            {/* <div className="p-2 pt-4">
                              <Map location={location} key={id} />
                            </div> */}
                          </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                          <div className="card m-2 p-3 border-0">
                            <h4>Location</h4>
                            <div className="pt-2">
                              {/* <Maps location={location} key={id} /> */}
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                          <div className="card m-2 p-3 border-0">
                            <h4>Average Cost</h4>
                            <div className="">
                              Cost for two
                              {restaurantDetails.currency}
                              {restaurantDetails.average_cost_for_two}
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                          <div className="card m-2 p-3 border-0">
                            <h4>Highlights</h4>
                            {/* {highlights.map(highlight => (
                              <ul>
                                <li>{highlight}</li>
                              </ul>
                            ))} */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div id="menu" className="container-fluid tab-pane fade"></div> */}
                  <div id="reviews" className="container-fluid tab-pane fade">
                    <Reviews id={id} key={id} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RestaurantDetails;
