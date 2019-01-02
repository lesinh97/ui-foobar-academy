import React from "react";
import BlogCategories from "./BlogCategories/BlogCategories";

class BlogLeft extends React.Component {
  render() {
    return (
      <div className="col-lg-6">
        <div className="blog_left">
          <div className="blog_title">From Our Teacher</div>
          <div className="blog_text">
            <p>
              Once a day, write it down!
            </p>
          </div>
          <BlogCategories />
        </div>
      </div>
    );
  }
}

export default BlogLeft;
