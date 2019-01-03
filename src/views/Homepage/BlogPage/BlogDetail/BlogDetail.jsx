import React from "react";
import Header from "../../../../components/Header/Header";
import Footer from "../../../../components/Footer/Footer";
import blog_7 from '../../../../components/images/blog_7.jpg'


import BlogContent from "./BlogContent"
import "./BlogDetail.css"
class BlogDetail extends React.Component {
  render() {
    const style = {
      backgroundImage: `url(${blog_7})`
    }
    return(
      <div className = "super_container">
      <Header />
      <div class="blog_top_image">
      <div class="blog_top">
        <div class="blog_background parallax-window" data-parallax="scroll" style={style} data-speed="0.8"></div>
      </div>
      <BlogContent />
    </div>
    <Footer />
    </div>
    )
  }
}
export default BlogDetail;