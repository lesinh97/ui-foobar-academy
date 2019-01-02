import React from "react";
import {Link} from "react-router-dom";

class MenuNav extends React.Component {
  render() {
    return (
      <nav className="menu_nav">
        <ul className="menu_mm">
          <li className="menu_mm">
            <Link to="/homepage">Home</Link>
          </li>
          <li className="menu_mm">
            <Link to="/courses">Courses</Link>
          </li>
          <li className="menu_mm">
            <Link to="/instructors">instructors</Link>
          </li>
          <li className="menu_mm">
            <a href="#">Events</a>
          </li>
          <li className="menu_mm">
            <a href="blog.html">Blog</a>
          </li>
          <li className="menu_mm">
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default MenuNav;
