import React from "react";

class Faqs extends React.Component {
  render() {
    return (
      <div className="elements_accordions">
        <div className="accordion_container">
          <div className="accordion d-flex flex-row align-items-center active">
            <div>
              Can I just enroll in a single course? I'm not interested in the
              entire Specializat
            </div>
          </div>
          <div className="accordion_panel">
            <p>
              Nam egestas lorem ex, sit amet commodo tortor faucibus a.
              Suspendisse commodo, turpis a dapibus fermentum, turpis ipsum
              rhoncus massa, sed commodo nisi lectus id ipsum. Sed nec elit
              vehicula, aliquam neque euismod, porttitor ex. Nam consequat
              iaculis maximus.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Faqs;
