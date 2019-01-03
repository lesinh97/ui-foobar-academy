import React from "react";
import SingleInstructor from './SingleInstructor';
import { loadInstructors } from '../../../js/actions/index';
import { connect } from 'react-redux';
import apiCall from '../../../utils/ultility';

import img1 from '../../../components/images/instructor_1.jpg';
import img2 from '../../../components/images/instructor_2.jpg';
import img3 from '../../../components/images/instructor_3.jpg';
import img4 from '../../../components/images/instructor_4.jpg';
import img5 from '../../../components/images/instructor_5.jpg';
import img6 from '../../../components/images/instructor_6.jpg';
import img7 from '../../../components/images/instructor_7.jpg';
import img8 from '../../../components/images/instructor_8.jpg';
import img9 from '../../../components/images/instructor_9.jpg';

const mapStateToProps = state => {
  return {
    teachers: state.instructors
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadInstructors: instructors => dispatch(loadInstructors(instructors))
  }
}
class Instructors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: [
        {
          img: img1,
        },
        {
          img: img2,
        },
        {
          img: img3,
        },
        {
          img: img4,
        },
        {
          img: img5,
        },
        {
          img: img6,
        },
        {
          img: img7,
        },
        {
          img: img8,
        },
        {
          img: img9,
        },
      ]
    }
  }

  componentDidMount() {
    apiCall('teachers').then(res => {
      let data = res.data;
      let dataaaa = data.map((i,j) => {
        return {
          ...i,
          img: this.state.teachers[j].img 
        }
      })
      this.props.loadInstructors(dataaaa);
      // console.log(dataaaa);
    }
    );
  }
  render() {
    // console.log(this.props.teachers);
    return (
      <div className="teachers">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="section_title text-center">
                Top Teachers in Every Field
              </h2>
            </div>
          </div>
          <div className="row teachers_row">
            {this.props.teachers.map((item, index) => (
              <SingleInstructor img={item.img} title={item.title} name={item.name} />
            ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Instructors);
