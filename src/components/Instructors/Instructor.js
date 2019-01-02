import React from "react";
import instructor_1 from '../images/instructor_1.jpg'
import instructor_2 from '../images/instructor_2.jpg'
import instructor_3 from '../images/instructor_3.jpg'

class Instructor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          img: instructor_1,
          name: "Vo Duc Hoang",
          title: "Internship",
          description: "Full eco rush mid"
        },
        {
          img: instructor_2,
          name: "Nguyen Van Nguyen",
          title: "Feeder",
          description: "Force buy"
        },
        {
          img: instructor_3,
          name: "Pham Minh Tuan",
          title: "Leader",
          description: "Full eco rush mid"
        },
      ]
    }
  }
  render() {
    return (
      <div className="row instructors_row"> 
      {
        this.state.instructors.map((item, index) => (
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

export default Instructor;
