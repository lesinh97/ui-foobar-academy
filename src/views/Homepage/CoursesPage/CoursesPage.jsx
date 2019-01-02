import React from "react";
import SingleCourse from "./SingleCourse";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer"
import Home from "../../../components/Home/Home";
import img1 from '../../../components/images/course_9.jpg';
import img2 from '../../../components/images/course_2.jpg';
import img3 from '../../../components/images/course_3.jpg';
import img4 from '../../../components/images/course_4.jpg'
import img5 from '../../../components/images/course_5.jpg'
import img6 from '../../../components/images/course_6.jpg'

import './CoursesPage.css'
class CoursePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      single_course: [
        {
          img: img1,
          title: "Rush B non stop",
          instructor: "Le Dinh Sinh",
          lang: "English"
        },
        {
          img: img2,
          title: "Rush B non stop",
          instructor: "Le Dinh Sinh",
          lang: "English"
        },
        {
          img: img3,
          title: "Rush B non stop",
          instructor: "Le Dinh Sinh",
          lang: "English"
        },
        {
          img: img4,
          title: "Rush B non stop",
          instructor: "Le Dinh Sinh",
          lang: "English"
        },
        {
          img: img5,
          title: "IELTS",
          instructor: "Le Dinh Sinh",
          lang: "Spanish"
        },
        {
          img: img6,
          title: "JLPT N1",
          instructor: "Le Dinh Sinh",
          lang: "Japanese"
        },
      ]
    }
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
            {this.state.single_course.map((item,index)=> (
              <SingleCourse img ={item.img} title ={item.title} instructor = {item.instructor} lang = {item.lang} />
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

export default CoursePage;
