import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search">
        <form action="#" className="header_search_form menu_mm">
          <input
            type="search"
            className="search_input menu_mm"
            placeholder="Search"
            required="required"
          />
          <button className="header_search_button d-flex flex-column align-items-center justify-content-center menu_mm">
            <i className="fa fa-search menu_mm" aria-hidden="true" />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
