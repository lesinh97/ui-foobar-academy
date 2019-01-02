import React from "react";
import instructor_1 from '../images/instructor_1.jpg'
import instructor_2 from '../images/instructor_2.jpg'
import instructor_3 from '../images/instructor_3.jpg'
import apiCall from '../../utils/ultility';
import { loadBestInstructors } from '../../js/actions/index';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    instructors: state.bestInstructors
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadBestInstructors: instructors => dispatch(loadBestInstructors(instructors))
  }
}

class Instructor extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   instructors: [
    //     {
    //       img: instructor_1,
    //       name: "Vo Duc Hoang",
    //       title: "Internship",
    //       description: "Full eco rush mid"
    //     },
    //     {
    //       img: instructor_2,
    //       name: "Nguyen Van Nguyen",
    //       title: "Feeder",
    //       description: "Force buy"
    //     },
    //     {
    //       img: instructor_3,
    //       name: "Pham Minh Tuan",
    //       title: "Leader",
    //       description: "Full eco rush mid"
    //     },
    //   ]
    // }
  }

  componentDidMount() {
    apiCall('teachers').then(res => {
      this.props.loadBestInstructors(res.data.slice(0, 3));
    })
  }

  render() {
    return (
      <div className="row instructors_row"> 
      {
        this.props.instructors.map((item, index) => (
        <div className="col-lg-4 instructor_col">
        <div className="instructor text-center">
          <div className="instructor_image_container">
            <div className="instructor_image">
              <img src={item.img} />
            </div>
          </div>
          <div className="instructor_name">
            <a href="instructors.html">{item.name}</a>
          </div>
          <div className="instructor_title">{item.title}</div>
          <div className="instructor_text">
            <p>
              {item.description}
            </p>
          </div>
          <div className="instructor_social">
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
        ))
      }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Instructor);
