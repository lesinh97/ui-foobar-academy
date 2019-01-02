import React from "react";
import TotalRating from "./TotalRating";
import SingleReview from "./SingleReview";

class ReviewTag extends React.Component {
  render() {
    return (
      <div className="tab_panel reviews">
        <div className="panel_title">Reviews</div>
        <div className="panel_text">
          <p>
            Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores
            petentium no sea, atqui posidonium interpretaris pri eu. At soleat
            maiorum platonem vix, no mei case fierent. Primis quidam ancillae te
            mei.
          </p>
        </div>
        <TotalRating />
        <SingleReview />
      </div>
    );
  }
}

export default ReviewTag;
