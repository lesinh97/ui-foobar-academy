import React from "react";
import Newsletter from "./Newsletter";
import About from "./About";
import Help from "./Help";
import Privacy from "./Privacy";
import CopyRight from "./CopyRight";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer_body">
          <div className="container">
            <div className="row">
              {}
              <Newsletter />
              {}
              <About />
              {}
              <Help />
              {}
              <Privacy />
            </div>
          </div>
        </div>
        <CopyRight />
      </footer>
    );
  }
}

export default Footer;
