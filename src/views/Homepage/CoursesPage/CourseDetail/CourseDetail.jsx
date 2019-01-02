import React from "react";
import CourseIntro from "./CourseIntro";
import CourseDescription from "./CourseDescription";
import Header from "../../../../components/Header/Header";
import Footer from "../../../../components/Footer/Footer";
import intro from "../../../../components/images/intro.jpg";
import "./CourseDetail.css";
class CourseDetail extends React.Component {
  render() {
    const style = {
      backgroundImage: `url(${intro})`
    }
    return(
      <div>
      <div className= "parallax-mirror" style = {style}>
        <CourseIntro />
      </div>
      <div className="super_container">
        <Header />
        <CourseDescription />
        <Footer />
      </div>
      </div>
    )
  }
}
export default CourseDetail;