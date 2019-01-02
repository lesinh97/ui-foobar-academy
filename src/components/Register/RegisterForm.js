import React from "react";

class RegisterForm extends React.Component {
  render() {
    const css = this.props.css;
    return (
      <div className="col-lg-6">
        <div className="register_form_container">
          <div className="register_form_title">Courses For Free</div>
          <form action="#" id="register_form" className="register_form">
            <div className="row register_row">
              <div className="col-lg-6 register_col">
                <input
                  type="text"
                  className="form_input"
                  placeholder="Name"
                  required="required"
                />
              </div>
              <div className="col-lg-6 register_col">
                <input
                  type="email"
                  className="form_input"
                  placeholder="Email"
                  required="required"
                />
              </div>
              <div className="col-lg-6 register_col">
                <input type="tel" className="form_input" placeholder="Phone" />
              </div>
              <div className="col-lg-6 register_col">
                <input type="url" className="form_input" placeholder="Site" />
              </div>
              <div className="col">
                <button type="submit" className="form_button trans_200">
                  get it now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
