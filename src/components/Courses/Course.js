import React from "react";
import course_1 from '../images/course_1.jpg'
import course_2 from '../images/course_2.jpg'
import course_3 from '../images/course_3.jpg'
import {Link} from "react-router-dom";
import apiCall from '../../utils/ultility';
import { loadBestCourses } from '../../js/actions/index';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    courses: state.bestCourses
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadBestCourses: courses => dispatch(loadBestCourses(courses))
  }
}

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        {
          img: course_1,
        },
        {
          img: course_2,
        },
        {
          img: course_3,
        },
      ]
    }
  }

  componentDidMount() {
    apiCall('courses').then(res => {
      let data = res.data.tableData.data.slice(0,3)
      let dataaaa = data.map((i,j) => {
        return {
          ...i,
          img: this.state.courses[j].img 
        }
      })
      this.props.loadBestCourses(dataaaa)
      console.log(dataaaa);
    }
    );
  }

  render() {
    return (
      <div className="row courses_row">
      {
        this.props.courses.map((item,idex) => (
          <div className="col-lg-4 course_col">
        <div className="course">
          <div className="course_image">
            <img src={item.img} alt />
          </div>
          <div className="course_body">
            <div className="course_title">
            <Link to="/courses">{item.name}</Link>
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
              <a href="#">{item.fee}</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Course);
