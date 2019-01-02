import React from "react";
import background from '../images/blog_7.jpg'
import read_more from '../images/right.png'
class BlogRight extends React.Component {
  render() {
    return (
      <div className="col-lg-6">
        <div className="blog_right">
          <div
            className="blog_image"
            style={{
              backgroundImage: `url(${background})`,
            }}
          />
          <div className="blog_title_container">
            <div className="blog_right_category">
              <a href="#">Vo Duc Hoang</a>
            </div>
            <div className="blog_right_title">
              <a href="blog_single.html">How to easily learning English</a>
            </div>
            <div className="blog_right_text">
              <p>
                Whether it is a signup flow, a multi-view stepper, or a
                monotonous data entry interface, forms are one of the most
                important components of digital product design.
              </p>
            </div>
            <div className="read_more">
              <a href="blog_single.html">
                Read More <img src={read_more} alt />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogRight;
