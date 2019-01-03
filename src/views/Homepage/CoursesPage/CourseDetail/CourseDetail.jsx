import React from "react";
import CourseIntro from "./CourseIntro";
import CourseDescription from "./CourseDescription";
import Header from "../../../../components/Header/Header";
import Footer from "../../../../components/Footer/Footer";
import intro from "../../../../components/images/intro.jpg";

import apiCall from "../../../../utils/ultility";
import { connect } from 'react-redux';
import {loadSingleCourse} from "../../../../js/actions/index";
import "./CourseDetail.css";

  
const mapStateToProps = state => {
  return { singleCourse: state.singleCourse }
}

const mapDispatchToProps = dispatch => {
  return {
    loadSingleCourse: singleCourse => dispatch(loadSingleCourse(singleCourse))
  }
}


class CourseDetail extends React.Component {
  
  componentDidMount() {
    const id = this.props.match.params.id;
    apiCall('courses/'+id).then(res => {
      console.log(res.data)
      this.props.loadSingleCourse(res.data)
    });
  }

  render() {
    const style = {
      backgroundImage: `url(${intro})`
    }
    console.log(this.props.singleCourse)
    const courseFromAPI = {...this.props.singleCourse.courseData};
    const classInCourse = this.props.singleCourse.courseClass;
    console.log(courseFromAPI);
    console.log(classInCourse)
    return(
      <div>
      <div className= "parallax-mirror" style = {style}>
        <CourseIntro name = {courseFromAPI.name} fee = {courseFromAPI.fee} />
      </div>
      <div className="super_container">
        <Header />
        <CourseDescription duration = {courseFromAPI.duration} classes = {classInCourse} />
        <Footer />
      </div>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail);
