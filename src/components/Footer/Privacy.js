import React from "react";

class Privacy extends React.Component {
  render() {
    return (
      <div className="col-lg-2 footer_col clearfix">
        <div>
          <div className="footer_title">Privacy & Terms</div>
          <ul className="footer_list">
            <li>
              <a href="#">Community Guidelines</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Brand Guidelines</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Privacy;
