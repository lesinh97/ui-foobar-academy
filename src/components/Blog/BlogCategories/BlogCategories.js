import React from "react";
import Category from "./Category";

class BlogCategories extends React.Component {
  render() {
    const cate_style = "col-md-4 blog_category_col";
    return (
      <div className="blog_categories">
          {}
          <Category style = {cate_style} />
      </div>
    );
  }
}

export default BlogCategories;
