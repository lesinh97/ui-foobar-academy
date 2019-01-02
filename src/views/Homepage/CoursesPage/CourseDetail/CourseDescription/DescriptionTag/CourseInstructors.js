import React from "react";
import instructor_4 from "../../../../../../components/images/instructor_4.jpg";
class CourseInstructors extends React.Component {
  render() {
    return (
      <div className="row instructors_row">
        {}
        <div className="col-lg-4 col-md-6">
          <div className="instructor d-flex flex-row align-items-center justify-content-start">
            <div className="instructor_image_gg">
              <div>
                <img src={instructor_4} alt />
              </div>
            </div>
            <div className="instructor_content_gg">
              <div className="instructor_name_gg">
                <a href="instructors.html">Thanh Thanh</a>
              </div>
              <div className="instructor_title">Teacher</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseInstructors;
