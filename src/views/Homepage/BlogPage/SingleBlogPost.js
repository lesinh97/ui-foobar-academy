import React from "react";

import blog_7 from '../../../components/images/blog_7.jpg'
class SingleBlogPost extends React.Component {
  render() {
    return (
      <div className="row blog_row">
        {}
        <div className="col-lg-6">
          <div className="blog_post">
            <div
              className="blog_image"
              style={{
                backgroundImage: `url(${blog_7})`
              }}
            />
            <div className="blog_title_container">
              <div className="blog_post_category">
                <a href="#">travel</a>
              </div>
              <div className="blog_post_title">
                <a href="blog_single.html">How to learn English</a>
              </div>
              <div className="blog_post_text">
                <p>
                  Whether it is a signup flow, a multi-view stepper, or a
                  monotonous data entry interface, forms are one of the most
                  important components of digital product design.
                </p>
              </div>
              <div className="read_more">
                <a href="blog_single.html">
                  Read More <img src="images/right.png" alt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBlogPost;
