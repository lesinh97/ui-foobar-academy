import React from "react";
import Flag from "./Flag";

class Slider extends React.Component {
  render() {
    return (
      <div className="owl-carousel owl-theme language_slider owl-loaded owl-drag">
      <div className="owl-stage-outer">
        <Flag />
      </div>
      </div>
    );
  }
}

export default Slider;
