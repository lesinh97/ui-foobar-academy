import React from "react";
import SingleCourse from "./SingleCourse";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer"
import Home from "../../../components/Home/Home";

import img1 from '../../../components/images/course_9.jpg';
import img2 from '../../../components/images/course_2.jpg';
import img3 from '../../../components/images/course_3.jpg';
import img4 from '../../../components/images/course_4.jpg';
import img5 from '../../../components/images/course_5.jpg';
import img6 from '../../../components/images/course_6.jpg';
import img7 from '../../../components/images/course_7.jpg';
import img8 from '../../../components/images/course_8.jpg';
import img9 from '../../../components/images/course_9.jpg';
import img10 from '../../../components/images/course_10.jpg';
import img11 from '../../../components/images/course_11.jpg';
import img12 from '../../../components/images/course_12.jpg';
import img13 from '../../../components/images/course_13.jpg';
import img14 from '../../../components/images/course_13.jpg';
import img15 from '../../../components/images/course_13.jpg';
import img16 from '../../../components/images/course_13.jpg';
import img17 from '../../../components/images/course_13.jpg';
import img18 from '../../../components/images/course_13.jpg';
import img19 from '../../../components/images/course_13.jpg';
import img20 from '../../../components/images/course_13.jpg';
import img21 from '../../../components/images/course_13.jpg';
import img22 from '../../../components/images/course_13.jpg';
import img23 from '../../../components/images/course_9.jpg';
import img24 from '../../../components/images/course_10.jpg';
import img25 from '../../../components/images/course_11.jpg';
import img26 from '../../../components/images/course_12.jpg';
import img27 from '../../../components/images/course_13.jpg';
import img28 from '../../../components/images/course_1.jpg';
import img29 from '../../../components/images/course_2.jpg';
import img30 from '../../../components/images/course_3.jpg';
import img31 from '../../../components/images/course_4.jpg';



import apiCall from '../../../utils/ultility';
import { connect } from 'react-redux';
import { loadCourses } from '../../../js/actions/index';
import './CoursesPage.css'

const mapStateToProps = state => {
  return { single_course: state.courses }
}

const mapDispatchToProps = dispatch => {
  return {
    loadCourses: courses => dispatch(loadCourses(courses))
  }
}
class CoursePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      single_course_img: [
        {img: img1,},
        {img: img2,},
        {img: img3,},
        {img: img4,},
        {img: img5,},
        {img: img6,},
        {img: img7,},
        {img: img8,},
        {img: img9,},
        {img: img10,},
        {img: img11,},
        {img: img12,},
        {img: img13,},
        {img: img14,},
        {img: img15,},
        {img: img16,},
        {img: img17,},
        {img: img18,},
        {img: img19,},
        {img: img20,},
        {img: img21,},
        {img: img22,},
        {img: img23,},
        {img: img24,},
        {img: img25,},
        {img: img26,},
        {img: img27,},
        {img: img28,},
        {img: img29,},
        {img: img30,},
        {img: img31,},
      ]
    }
  }

  componentDidMount() {
    apiCall('courses').then(res => {
      // console.log(res);
      let dataaaa = res.data.tableData.data.map((i,j) => {
        return {
          ...i,
          img: this.state.single_course_img[j].img 
        }
      })
      this.props.loadCourses(dataaaa)
      // console.log(dataaaa);
    }
    );
  }

  render() {
    return (
      <div className ="super-container">
        {}
        <Header />
        {}
        <Home />
      <div className="courses">
        <div className="container">  
          <div className="row courses_row">
            {this.props.single_course.map((item,index)=> (
              <SingleCourse img ={item.img} title ={item.name} instructor = {item.instructor} lang = {item.lang} id = {item.id} />
            ))}
          </div>
          <div className="row">
            <div className="col">
              <div className="load_more_button">
                <a href="#">load more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {}
      <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
