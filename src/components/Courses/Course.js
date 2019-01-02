import React from "react";
import course_1 from '../images/course_1.jpg'
import course_2 from '../images/course_2.jpg'
import course_3 from '../images/course_3.jpg'
import {Link} from "react-router-dom";
class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        {
          img: course_1,
          title: "Vocabulary",
          instructors: "Mai Nam Hai",
          lang: "English",
          description: "Everything is easy",
          price: "150$",
          participants: "123"
        },
        {
          img: course_2,
          title: "Grammar",
          instructors: "Inferno",
          lang: "Japanese",
          description: "Get an JLPT N3",
          price: "350$",
          participants: "500"
        },
        {
          img: course_3,
          title: "Listening",
          instructors: "Vodkashinikov",
          lang: "Spainish",
          description: "Hearing aid",
          price: "300$",
          participants: "40"
        },
      ]
    }
  }
  render() {
    return (
      <div className="row courses_row">
      {
        this.state.courses.map((item,idex) => (
          <div className="col-lg-4 course_col">
        <div className="course">
          <div className="course_image">
            <img src={item.img} alt />
          </div>
          <div className="course_body">
            <div className="course_title">
            <Link to="/courses">{item.title}</Link>
            </div>
            <div className="course_info">
              <ul>
                <li>
                  <a href="instructors.html">{item.instructors}</a>
                </li>
                <li>
                  <a href="#">{item.lang}</a>
                </li>
              </ul>
            </div>
            <div className="course_text">
              <p>
                {item.description}
              </p>
            </div>
          </div>
          <div className="course_footer d-flex flex-row align-items-center justify-content-start">
            <div className="course_students">
              <i className="fa fa-user" aria-hidden="true" />
              <span>{item.participants}</span>
            </div>
            <div className="course_rating ml-auto">
              <i className="fa fa-star" aria-hidden="true" />
              <span>4,5</span>
            </div>
            <div className="course_mark course_free trans_200">
              <a href="#">{item.price}</a>
            </div>
          </div>
        </div>
      </div>
        ))
      }
      </div>
    );
  }
}

export default Course;