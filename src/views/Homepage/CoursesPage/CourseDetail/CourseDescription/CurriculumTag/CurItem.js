import React from "react";

class CurItem extends React.Component {
  render() {
    return (
      <div className="cur_item">
        <div className="cur_title_container d-flex flex-row align-items-start justify-content-start">
          <div className="cur_title">Week 1</div>
          <div className="cur_num ml-auto">0/4</div>
        </div>
        <div className="cur_item_content">
          <div className="cur_item_title">Beginners Level</div>
          <div className="cur_item_text">
            <p>
              Nam egestas lorem ex, sit amet commodo tortor faucibus a.
              Suspendisse commodo, turpis a dapibus fermentum, turpis ipsum
              rhoncus massa, sed commodo nisi lectus id ipsum.
            </p>
          </div>
          <div className="cur_contents">
            <ul>
              <li>
                <i className="fa fa-folder" aria-hidden="true" />
                <span>1 video, 1 audio, 1 reading</span>
                <ul>
                  <li className="d-flex flex-row align-items-center justify-content-start">
                    <i className="fa fa-video-camera" aria-hidden="true" />
                    <span>
                      Video: <a href="#">Greetings and Introductions</a>
                    </span>
                    <div className="cur_time ml-auto">
                      <i className="fa fa-clock-o" aria-hidden="true" />
                      <span>15 minutes</span>
                    </div>
                  </li>
                  <li className="d-flex flex-row align-items-center justify-content-start">
                    <i className="fa fa-file" aria-hidden="true" />
                    <span>
                      Reading: <a href="#">Word Types</a>
                    </span>
                    <div className="cur_time ml-auto">
                      <i className="fa fa-clock-o" aria-hidden="true" />
                      <span>15 minutes</span>
                    </div>
                  </li>
                  <li className="d-flex flex-row align-items-center justify-content-start">
                    <i className="fa fa-volume-up" aria-hidden="true" />
                    <span>
                      Audio: <a href="#">Listening Exercise</a>
                    </span>
                    <div className="cur_time ml-auto">
                      <i className="fa fa-clock-o" aria-hidden="true" />
                      <span>15 minutes</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="d-flex flex-row align-items-center justify-content-start">
                <i className="fa fa-graduation-cap" aria-hidden="true" />
                <span>Graded: Cumulative Language Quiz</span>
                <div className="cur_time ml-auto">
                  <span>3 Questions</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CurItem;
