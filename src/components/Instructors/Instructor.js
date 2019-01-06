import React from "react";
import instructor_1 from '../images/instructor_1.jpg'
import instructor_2 from '../images/instructor_2.jpg'
import instructor_3 from '../images/instructor_3.jpg'
import Modal from 'react-modal';
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
    this.state = {
      instructors: [
        {
          img: instructor_1,
        },
        {
          img: instructor_2,
        },
        {
          img: instructor_3,
        },
      ],
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);

    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }


  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentDidMount() {
    apiCall('teachers').then(res => {
      let data = res.data.slice(0,3);
      let dataaaa = data.map((i,j) => {
        return {
          ...i,
          img: this.state.instructors[j].img 
        }
      })
      this.props.loadBestInstructors(dataaaa);
      console.log(dataaaa);
    })
  }

  render() {
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };
    return (
      <div className="row instructors_row">
       <Modal
       style={customStyles}
       isOpen={this.state.modalIsOpen}
      onRequestClose={this.closeModal} 
       >
       <div id="gg">
        <center>
        <img src={instructor_3}/>
        <h3 class="media-heading">Gun'n Rose <small>USA</small></h3>
        <span><strong>Skills: </strong></span>
            <span class="label label-warning">HTML5/CSS</span>
            <span class="label label-info">Adobe CS 5.5</span>
            <span class="label label-info">Microsoft Office</span>
            <span class="label label-success">Windows XP, Vista, 7</span>
        </center>
        <center>
        <p class="text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem dui, tempor sit amet commodo a, vulputate vel tellus.</p>
        </center>
        </div>
       </Modal>
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
            <a href="#"  data-target="#gg" role= "button" onClick={this.openModal}>{item.name}</a>
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
