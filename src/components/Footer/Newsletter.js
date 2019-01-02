import React from "react";

class Newsletter extends React.Component {
  render() {
    return (
      <div className="col-lg-3 footer_col">
        <div className="newsletter_container d-flex flex-column align-items-start justify-content-end">
          <div className="footer_logo mb-auto">
            <a href="#">ANHIUXINH</a>
          </div>
          <div className="footer_title">Subscribe</div>
          <form action="#" id="newsletter_form" className="newsletter_form">
            <input
              type="email"
              className="newsletter_input"
              placeholder="Email"
              required="required"
            />
            <button className="newsletter_button">
              <i className="fa fa-long-arrow-right" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Newsletter;
