import React from "react";

class TopBarLanguage extends React.Component {
  render() {
    return (
      <div className="top_bar_lang">
        <span className="top_bar_title">site language:</span>
        <ul className="lang_list">
          <li className="hassubs">
            <a href="#">
              English
              <i className="fa fa-angle-down"/>
            </a>
            <ul>
              <li>
                <a href="#">Ukrainian</a>
              </li>
              <li>
                <a href="#">Japanese</a>
              </li>
              <li>
                <a href="#">Lithuanian</a>
              </li>
              <li>
                <a href="#">Swedish</a>
              </li>
              <li>
                <a href="#">Italian</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default TopBarLanguage;
