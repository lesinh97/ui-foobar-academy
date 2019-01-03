import React from "react";
import {Link} from "react-router-dom"
class SingleCourse extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-lg-4 course_col">
        <div className="course">
          <div className="course_image">
            <img src={this.props.img} alt />
          </div>
          <div className="course_body">
            <div className="course_title">
              <Link to={"/course_detail/" + this.props.id}>{this.props.title}</Link>
            </div>
            <div className="course_info">
              <ul>
                <li>
                  <a href="instructors.html">{this.props.instructor}</a>
                </li>
                <li>
                  <a href="#">{this.props.lang}</a>
                </li>
              </ul>
            </div>
            <div className="course_text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                enim nulla.
              </p>
            </div>
          </div>
          <div className="course_footer d-flex flex-row align-items-center justify-content-start">
            <div className="course_students">
              <i className="fa fa-user" aria-hidden="true" />
              <span>10</span>
            </div>
            <div className="course_rating ml-auto">
              <i className="fa fa-star" aria-hidden="true" />
              <span>4,5</span>
            </div>
            <div className="course_mark course_free trans_200">
              <a href="#">{this.props.fee}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleCourse;
