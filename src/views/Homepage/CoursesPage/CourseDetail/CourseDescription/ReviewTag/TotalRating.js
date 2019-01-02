import React from "react";

class TotalRating extends React.Component {
  render() {
    return (
      <div className="cur_ratings_container clearfix">
        <div className="cur_rating d-flex flex-column align-items-center justify-content-center">
          <div className="cur_rating_num">4,5</div>
          <div className="rating_r rating_r_4 cur_stars">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="cur_rating_text">Rated 5 out of 3 Ratings</div>
        </div>
        <div className="cur_rating_progress d-flex flex-column align-items-center justify-content-center">
          <div className="cur_progress d-flex flex-row align-items-center justify-content-between">
            <span>5 stars</span>
            <div id="cur_pbar_1" className="cur_pbar" data-perc="0.80" />
          </div>
          <div className="cur_progress d-flex flex-row align-items-center justify-content-between">
            <span>5 stars</span>
            <div id="cur_pbar_2" className="cur_pbar" data-perc="0.20" />
          </div>
          <div className="cur_progress d-flex flex-row align-items-center justify-content-between">
            <span>5 stars</span>
            <div id="cur_pbar_3" className="cur_pbar" data-perc={0.0} />
          </div>
          <div className="cur_progress d-flex flex-row align-items-center justify-content-between">
            <span>5 stars</span>
            <div id="cur_pbar_4" className="cur_pbar" data-perc={0.0} />
          </div>
          <div className="cur_progress d-flex flex-row align-items-center justify-content-between">
            <span>5 stars</span>
            <div id="cur_pbar_5" className="cur_pbar" data-perc={0.0} />
          </div>
        </div>
      </div>
    );
  }
}

export default TotalRating;
