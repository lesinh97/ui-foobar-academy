import React from "react";
import CourseFeature from "./CourseFeature";
import LikeItem from "./LikeItem";
import cert from "../../../../../../components/images/cert.jpg";
import Modal from 'react-modal';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      formName: "",
      formEmail: "",
      formPhone: "",
      formNaiyou: "",
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
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
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
      <div className="sidebar">
        <div className="sidebar_background" />
        <div className="sidebar_top">
          <a href="#" data-toggle="modal" data-target="#squarespaceModal" role= "button" onClick={this.openModal} >Apply this course</a>
        </div>
        <Modal
        style={customStyles}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
        <div id = 'squarespaceModal'>
        <div className="register_form_container">
            <div className="register_form_title">Join this course. Get high</div>
            <form action="#" id="register_form" className="register_form">
              <div className="row register_row">
                <div className="col-lg-6 register_col">
                  <input
                    type="text"
                    className="form_input"
                    placeholder="Name"
                    value={this.state.formName}
                    required="required"
                    onChange={this.handleChange('formName')}
                  />
                </div>
                <div className="col-lg-6 register_col">
                  <input
                    type="email"
                    className="form_input"
                    placeholder="Email"
                    value={this.state.formEmail}
                    required="required"
                    onChange={this.handleChange('formEmail')}
                  />
                </div>
                <div className="col-lg-6 register_col">
                  <input
                    type="tel"
                    className="form_input"
                    placeholder="Phone"
                    value={this.state.formPhone}
                    onChange={this.handleChange('formPhone')}
                  />
                </div>
                <div className="col-lg-6 register_col">
                  <input
                    type="url"
                    className="form_input"
                    placeholder="Note"
                    value={this.state.formNaiyou}
                    onChange={this.handleChange('formNaiyou')}
                  />
                </div>
                <div className="col">
                  <button className="form_button trans_200" onClick={this.btnSubmitClick}>
                    get it now
                </button>
                </div>
              </div>
            </form>
          </div>
          </div>
        </Modal>

        <div className="sidebar_content">
          {}
          <div className="sidebar_section features">
            <div className="sidebar_title">Course Features</div>
            <CourseFeature duration = {this.props.duration} />
          </div>
          {}
          <div className="sidebar_section cert">
            <div className="sidebar_title">Certification</div>
            <div className="cert_image">
              <img src={cert} alt />
            </div>
          </div>
          {}
          <div className="sidebar_section like">
            <div className="sidebar_title">You may like</div>
            <LikeItem />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
