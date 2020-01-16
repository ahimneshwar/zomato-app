import React from "react";
import { Link } from "react-router-dom";

function Restaurants({ rest }) {
  const { restaurant } = rest;
  const color =
    (((restaurant || {}).user_rating || {}).rating_obj || {}).bg_color || {};
  const imgStyle = {
    width: "100%",
    maxHeight: "15rem"
  };

  return (
    <>
      <div className="col-md-6 col-lg-4 d-flex justify-content-around ">
        <div
          className="card my-4 m-0 p-0 bg-light"
          style={{
            maxHeight: "30rem"
          }}
        >
          <div className="card-body m-0 p-0 ">
            <div>
              <img
                className="card-img-top p-2"
                src={restaurant.featured_image}
                alt=""
                style={imgStyle}
              />

              <div className="m-2">
                <div
                  className="float-left badge ml-2"
                  style={{
                    backgroundColor: `${color.type}`,
                    fontSize: 16
                  }}
                >
                  {restaurant.user_rating.aggregate_rating}
                </div>

                <p
                  className="float-right text-muted mr-4"
                  style={{
                    fontSize: 9
                  }}
                >
                  {restaurant.user_rating.votes} votes <br />
                  {restaurant.all_reviews_count} reviews
                </p>
              </div>
            </div>

            <div className="card-body py-5">
              <Link
                to={`/details/${restaurant.id}`}
                className="stretched-link text-decoration-none card-title text-center text-danger p-0 m-0"
              >
                <h3>{restaurant.name}</h3>
              </Link>
              <div className="card-text text-muted pt-5">
                <p>
                  {restaurant.establishment}
                  <br />
                  {restaurant.cuisines}
                  <br />
                  <span className="text-right">
                    Cost for two {""}
                    {restaurant.currency}
                    {restaurant.average_cost_for_two}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* <div className="card-footer">
            <a
              href="#"
              className="text-success stretched-link text-decoration-none"
            >
              Order Online
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
}
export default Restaurants;
