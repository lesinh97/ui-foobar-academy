import React from "react";
import index_background from '../images/index_background.jpg'
class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div
          className="home_background"
          style={{
            backgroundImage: `url(${index_background})`
          }}
        />
        <div className="home_content">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h1 className="home_title">Learn Languages Easily</h1>
                <div className="home_button trans_200">
                  <a href="#">get started</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
