import React from "react";
import Logo from "./HeaderContent/Logo";
import NavBar from "./HeaderContent/NavBar";
import HeaderContentRight from "./HeaderContent/HeaderContentRight";

class HeaderContent extends React.Component {
  render() {
    return (
      <div className="header_container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="header_content d-flex flex-row align-items-center justify-content-start">
                <Logo />
                <NavBar />
                <HeaderContentRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderContent;
