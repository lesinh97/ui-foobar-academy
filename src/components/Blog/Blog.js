import React from "react";
import BlogLeft from "./BlogLeft";
import BlogRight from "./BlogRight";

class Blog extends React.Component {
  render() {
    return (
      <div className="blog">
        <div className="container">
          <div className="row row-lg-eq-height">
            {}
            <BlogLeft />
            {}
            <BlogRight />
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
