import React from "react";
import CourseFeature from "./CourseFeature";
import LikeItem from "./LikeItem";
import Modal from "./Modal";
import cert from "../../../../../../components/images/cert.jpg";
class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar_background" />
        <div className="sidebar_top">
          <a href="#" data-toggle="modal" data-target="#squarespaceModal" role= "button" >Apply this course</a>
        </div>
        {}
        <Modal />
        <div className="sidebar_content">
          {}
          <div className="sidebar_section features">
            <div className="sidebar_title">Course Features</div>
            <CourseFeature duration = {this.props.duration} />
          </div>
          {}
          <div className="sidebar_section cert">
            <div className="sidebar_title">Certification</div>
            <div className="cert_image">
              <img src={cert} alt />
            </div>
          </div>
          {}
          <div className="sidebar_section like">
            <div className="sidebar_title">You may like</div>
            <LikeItem />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
