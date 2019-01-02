import React from "react";
import LanguageSlider from "./LanguageSlider";

class Language extends React.Component {
  render() {
    return (
      <div className="language">
        <div className="container">
          <div className="row">
            <div className="col">
              <LanguageSlider />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Language;
