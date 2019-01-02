import React from "react";
import TopBarLanguage from "./Topbar/TopBarLanguage";
import TopBarSocial from "./Topbar/TopBarSocial";

class TopBar extends React.Component {
  render() {
    return (
      <div className="top_bar">
        <div className="top_bar_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
                  <div className="top_bar_phone">
                    <span className="top_bar_title">phone:</span>+84 77 858 2046
                  </div>
                  <div className="top_bar_right ml-auto">
                    {}
                    <TopBarLanguage />
                    {}
                    <TopBarSocial />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
