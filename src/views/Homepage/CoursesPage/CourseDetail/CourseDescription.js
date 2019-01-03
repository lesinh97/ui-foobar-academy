import React from "react";
import DescriptionTag from "./CourseDescription/DescriptionTag/DescriptionTag";
import CurriculumTag from "./CourseDescription/CurriculumTag/CurriculumTag";
import ReviewTag from "./CourseDescription/ReviewTag/ReviewTag";
import MemberTag from "./CourseDescription/MemberTag/MemberTag";
import Sidebar from "./CourseDescription/Sidebar/Sidebar";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

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
                          <Tabs >
                            <TabList>
                            <div className="tabs d-flex flex-row align-items-center justify-content-start">
                              <Tab><div className="tab">description</div></Tab> 
                              <Tab><div className="tab">curriculum</div></Tab>
                              <Tab><div className="tab">reviews</div></Tab>
                              <Tab><div className="tab">classes</div></Tab>
                            </div>
                            </TabList>
                            <TabPanel>
                              {}
                              <DescriptionTag />
                            </TabPanel>
                            <TabPanel>
                              {}
                              <CurriculumTag />
                            </TabPanel>
                            <TabPanel>
                              {}
                              <ReviewTag />
                            </TabPanel>
                            <TabPanel>
                              {}
                              <MemberTag classes = {this.props.classes} />
                            </TabPanel>
                            </Tabs>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="col-lg-3">
              <Sidebar duration = {this.props.duration} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseDescription;
