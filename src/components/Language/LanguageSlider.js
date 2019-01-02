import React from "react";
import Slider from "./LanguageSlider/Slider";

class LanguageSlider extends React.Component {
  render() {
    return (
      <div className="language_slider_container">
        <Slider />   
        <div className="lang_nav lang_prev">
          <i className="fa fa-angle-left" aria-hidden="true" />
        </div>
        <div className="lang_nav lang_next">
          <i className="fa fa-angle-right" aria-hidden="true" />
        </div>
      </div>
    );
  }
}

export default LanguageSlider;
