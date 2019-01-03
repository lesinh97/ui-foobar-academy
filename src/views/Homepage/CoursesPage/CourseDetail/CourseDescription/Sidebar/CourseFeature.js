import React from "react";

class CourseFeature extends React.Component {
  render() {
    return (
      <div className="features_content">
        <ul className="features_list">
          {}
          <li className="d-flex flex-row align-items-start justify-content-start">
            <div className="feature_title">
              <i className="fa fa-clock-o" aria-hidden="true" />
              <span>Duration</span>
            </div>
            <div className="feature_text ml-auto">{this.props.duration} weeks</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default CourseFeature;
