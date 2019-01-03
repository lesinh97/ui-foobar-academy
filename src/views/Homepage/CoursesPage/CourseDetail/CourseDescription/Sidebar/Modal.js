import React from "react"
class Modal extends React.Component {
  state = {
    formName: "",
    formEmail: "",
    formPhone: "",
    formNaiyou: "",
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  render() {
    return (
      <div className="modal fade" id="squarespaceModal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title" id="lineModalLabel">Course Register</h3>
          </div>
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
      </div>
    </div>
    )
  }
}
export default Modal;