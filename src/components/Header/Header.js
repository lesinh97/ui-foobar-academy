import React from "react";
import TopBar from "./TopBar";
import HeaderContent from "./HeaderContent";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        {}
        <TopBar />
        {}
        <HeaderContent />
      </header>
    );
  }
}

export default Header;
