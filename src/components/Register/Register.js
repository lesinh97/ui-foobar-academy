import React from "react";
import RegisterForm from "./RegisterForm";
import RegisterTimer from "./RegisterTimer";

class Register extends React.Component {
  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            {}
            <RegisterForm />
            {}
            <RegisterTimer date={`${year}-12-24T00:00:00`} />
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
