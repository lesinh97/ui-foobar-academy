import React from "react";

class Help extends React.Component {
  render() {
    return (
      <div className="col-lg-2 footer_col">
        <div className="footer_title">Help & Support</div>
        <ul className="footer_list">
          <li>
            <a href="#">Discussions</a>
          </li>
          <li>
            <a href="#">Troubleshooting</a>
          </li>
          <li>
            <a href="#">Duolingo FAQs</a>
          </li>
          <li>
            <a href="#">Schools FAQs</a>
          </li>
          <li>
            <a href="#">Duolingo English Test FAQs</a>
          </li>
          <li>
            <a href="#">Status</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Help;
