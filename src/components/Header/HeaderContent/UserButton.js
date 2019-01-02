import React from "react";

class UserButton extends React.Component {
  render() {
    const css = this.props.css;
    return (
      <div class="header_content_right ml-auto text-right">
        <div className="header_search">
          <div className="search_form_container">
            <form action="#" id="search_form" className="search_form trans_400">
              <input
              type="search"
              className="header_search_input trans_400"
              placeholder="Type for Search"
              required="required"
              />
              <div className="search_button">
                <i className="fa fa-search" aria-hidden="true" />
              </div>
            </form>
          </div>
        </div>
      <div>
        <div className="user">
          <a href="#">
            <i className="fa fa-user" aria-hidden="true" />
          </a>
        </div>
        <div className="hamburger menu_mm">
          <i className="fa fa-bars menu_mm" aria-hidden="true" />
        </div>
      </div>
    </div>
    );
  }
}

export default UserButton;
