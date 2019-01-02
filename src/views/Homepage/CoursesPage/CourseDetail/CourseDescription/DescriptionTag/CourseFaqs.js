import React from "react";
import Faqs from "./Faqs";

class CourseFaqs extends React.Component {
  render() {
    return (
      <div className="faqs">
        <div className="panel_title">FAQs</div>
        <div className="accordions">
          <Faqs />
        </div>
      </div>
    );
  }
}

export default CourseFaqs;
