import React from "react";
import Instructor from "./Instructor";
import instructor_background from '../images/instructors_background.png'
class Instructors extends React.Component {
  render() {
    return (
      <div className="instructors">
        <div
          className="instructors_background"
          style={{
            backgroundImage: `url(${instructor_background})`
          }}
        />
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="section_title text-center">
                Our best instructors
              </h2>
            </div>
          </div>
            <Instructor />
        </div>
      </div>
    );
  }
}

export default Instructors;
