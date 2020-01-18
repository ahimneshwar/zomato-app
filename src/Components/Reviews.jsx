import React, { useState, useEffect } from "react";
import axios from "axios";

function Reviews({ id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://developers.zomato.com/api/v2.1/reviews?res_id=${id}`,
      headers: {
        "user-key": "4a1a772ad5debadfc83b54ef87d6c218",
        "content-type": "application/json"
      }
    })
      .then(response => {
        setIsLoading(false);
        setUserReviews(response.data.user_reviews);
      })

      .catch(error => {
        setIsLoading(false);
        console.log(error);
      });
  }, [id]);

  if (isLoading) {
    return <h1 className="text-muted spinner-border">Loading...</h1>;
  } else {
    return (
      <React.Fragment>
        <div className="container">
          <div className="card-deck">
            {userReviews.map(userReview => (
              <div className=" col-md-6 col-lg-4" key={userReview.review.id}>
                <div
                  className="card my-4 m-0 border-0"
                  style={
                    {
                      // height: "30rem"
                    }
                  }
                >
                  <div
                    className="card-header border-0 "
                    style={{
                      backgroundColor: "transparent"
                    }}
                  >
                    <h4>{userReview.review.rating_text}</h4>
                  </div>
                  <div className="card-body">
                    <p className="card-text">{userReview.review.review_text}</p>
                  </div>
                  <div>
                    <div
                      className="badge float-left p-2 m-1 ml-4"
                      style={{
                        backgroundColor: `#${userReview.review.rating_color}`,
                        fontSize: 22
                      }}
                    >
                      {userReview.review.rating}/5
                    </div>
                    <div
                      className="text-muted text-right p-1 m-1 float-right mr-4"
                      style={{
                        fontSize: 14
                      }}
                    >
                      {userReview.review.review_time_friendly}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Reviews;
