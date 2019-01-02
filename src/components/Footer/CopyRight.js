import React from "react";
import FooterPhone from "./Copyright/FooterPhone";
import FooterSocial from "./Copyright/FooterSocial";

class CopyRight extends React.Component {
  render() {
    return (
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="copyright_content d-flex flex-md-row flex-column align-items-md-center align-items-start justify-content-start">
                <div className="cr">
                  {}
                  Copyright © 2018 All rights reserved | This academy is made
                  with <i
                    className="fa fa-heart-o"
                    aria-hidden="true"
                  /> by{" "}
                  <a href="google.com" target="_blank">
                    AN HIU XINH
                  </a>
                  {}
                </div>
                <div className="cr_right ml-md-auto">
                  <FooterPhone />
                  <FooterSocial />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CopyRight;
