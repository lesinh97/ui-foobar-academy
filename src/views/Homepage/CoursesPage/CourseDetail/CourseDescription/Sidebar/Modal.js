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

        </div>
      </div>
    </div>
    )
  }
}
export default Modal;