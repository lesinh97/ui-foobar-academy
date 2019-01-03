import React from "react";

class SingleInstructor extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="col-lg-4 col-md-6">
        <div className="teacher d-flex flex-row align-items-center justify-content-start">
          <div className="teacher_image">
            <div>
            <a href="#aboutModal" data-toggle="modal"><img src={this.props.img} alt /></a>
            
            </div>
          </div>
          <div className="teacher_content">
            <div className="teacher_name">
              <a href="instructors.html">{this.props.name}</a>
            </div>
            <div className="teacher_title">{this.props.title}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleInstructor;
