import React from "react";

class MenuSocial extends React.Component {
  render() {
    return (
      <div className="menu_social">
        <span className="menu_title">follow us</span>
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-facebook" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default MenuSocial;
