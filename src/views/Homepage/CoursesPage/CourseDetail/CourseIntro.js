import React from "react";
import intro from "../../../../components/images/intro_user.jpg";
class CourseIntro extends React.Component {
  render() {
    return (
      <div className="intro">
        <div
          className="intro_background parallax-window"
          data-parallax="scroll"
          data-speed="0.8"
        />
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="intro_container d-flex flex-column align-items-start justify-content-end">
                <div className="intro_content">
                  <div className="intro_price">{this.props.fee}</div>
                  <div className="rating_r rating_r_4 intro_rating">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="intro_title">{this.props.name}</div>
                  <div className="intro_meta">
                    <div className="intro_image">
                      <img src={intro} alt />
                    </div>
                    <div className="intro_instructors">
                      <a href="instructors.html">Vo Duc Hoang</a> and{" "}
                      <span>
                        <a href="instructors.html">5 other instructors</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseIntro;
