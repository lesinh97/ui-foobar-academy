import React from "react";
import DescriptionTag from "./CourseDescription/DescriptionTag/DescriptionTag";
import CurriculumTag from "./CourseDescription/CurriculumTag/CurriculumTag";
import ReviewTag from "./CourseDescription/ReviewTag/ReviewTag";
import MemberTag from "./CourseDescription/MemberTag/MemberTag";
import Sidebar from "./CourseDescription/Sidebar/Sidebar";

class CourseDescription extends React.Component {
  render() {
    return (
      <div className="course">
        <div className="course_top" />
        <div className="container">
          <div className="row row-lg-eq-height">
            {}
            <div className="col-lg-9">
              <div className="tab_panels">
                {}
                <div className="course_tabs_container">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-9">
                        <div className="tabs d-flex flex-row align-items-center justify-content-start">
                          <div className="tab active">description</div>
                          <div className="tab">curriculum</div>
                          <div className="tab">reviews</div>
                          <div className="tab">members</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {}
                <DescriptionTag />
                {}
                <CurriculumTag />
                {}
                <ReviewTag />
                {}
                <MemberTag />
              </div>
            </div>
            {}
            <div className="col-lg-3">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseDescription;
