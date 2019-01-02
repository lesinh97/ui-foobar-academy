import React from "react";
import SingleBlogPost from "./SingleBlogPost";
import Category from "../../../components/Blog/BlogCategories/Category";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import './BlogPage.css';

class BlogPage extends React.Component {
  render() {
    const cate_style = "col-xl-2 col-lg-4 col-md-6 blog_category_col";
    return (
      <div className= "super_container">
      <Header />
      <div className="blog">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="welcome_title">Welcome to our blog!</div>
            </div>
          </div>
          <Category style = {cate_style} />
          {}
          <SingleBlogPost />
          {}
          <div className="row">
            <div className="col">
              <div className="load_more_button">
                <a href="#">load more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    );
  }
}

export default BlogPage;
