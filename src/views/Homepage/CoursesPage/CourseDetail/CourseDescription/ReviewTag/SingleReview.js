import React from "react";

class SingleReview extends React.Component {
  render() {
    return (
      <div className="cur_reviews">
        {}
        <div className="review">
          <div className="review_title_container d-flex flex-row align-items-start justify-content-start">
            <div className="review_title d-flex flex-row align-items-center justify-content-center">
              <div className="review_author_image">
                <div>
                  <img src="images/review_1.jpg" alt />
                </div>
              </div>
              <div className="review_author">
                <div className="review_author_name">
                  <a href="#">Sarah Parker</a>
                </div>
                <div className="review_date">Sep 29, 2017 at 9:48 am</div>
              </div>
            </div>
            <div className="review_stars ml-auto">
              <div className="rating_r rating_r_4 review_rating">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
          <div className="review_text">
            <p>
              Nam egestas lorem ex, sit amet commodo tortor faucibus a.
              Suspendisse commodo, turpis a dapibus fermentum, turpis ipsum
              rhoncus massa, sed commodo nisi lectus id ipsum. Sed nec elit
              vehicula.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleReview;
