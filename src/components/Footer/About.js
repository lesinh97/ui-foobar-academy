import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="col-lg-2 offset-lg-3 footer_col">
        <div>
          <div className="footer_title">About Us</div>
          <ul className="footer_list">
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Brand Guidelines</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Advertise with us</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default About;
