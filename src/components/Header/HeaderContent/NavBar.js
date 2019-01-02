import React from "react";
import {Link} from "react-router-dom";
class NavBar extends React.Component {
  render() {
    const css = this.props.css;
    return (
      <nav className="main_nav_contaner">
        <ul className="main_nav">
          <li className="active">
          <Link to="/homepage">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/instructors">Instructors</Link>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
          <Link to="/blogs">Blog</Link>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
