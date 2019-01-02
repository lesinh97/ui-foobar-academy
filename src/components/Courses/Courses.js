import React from "react";
import Course from "./Course";

class Courses extends React.Component {
  render() {
    return (
      <div className="courses">
        <div className="courses_background" />
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="section_title text-center">
                Our most popular courses
              </h2>
            </div>
          </div>
            {}
            <Course />
        </div>
      </div>
    );
  }
}

export default Courses;
