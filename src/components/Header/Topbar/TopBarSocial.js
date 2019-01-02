import React from "react";

class TopBarSocial extends React.Component {
  render() {
    const css = this.props.css;
    return (
      <div className="top_bar_social">
        <span className="top_bar_title social_title">follow us</span>
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-facebook"/>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default TopBarSocial;
