import React from "react";

class Video extends React.Component {
  render() {
    return (
      <div className="video">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="video_content">
                <div className="video_container_outer">
                  <div className="video_overlay d-flex flex-column align-items-start justify-content-center">
                    <div>Be</div>
                    <div>The Best</div>
                    <div>Teacher</div>
                  </div>
                  <div className="video_container" />
                </div>
                <div className="register_button">
                  <a href="#">register</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Video;