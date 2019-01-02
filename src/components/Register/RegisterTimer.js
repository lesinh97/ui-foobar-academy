import React, {PropTypes, Component } from "react";

class RegisterTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    }
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;
    return (
      <div className="col-lg-6">
        <div className="register_timer_container">
          <div className="register_timer_title">Register Now</div>
          <div className="register_timer_text">
            <p>
            If the writer of these lines has succeeded in providing some material for clarifying these problems, he may regard his labours as not having been fruitless. <strong>Marx Lenin</strong>  
            </p>
          </div>
          <div className="timer_container">
            <ul className="timer_list">
              <li>
                <div id="day" className="timer_num">
                  <strong>{this.addLeadingZeros(countDown.days)}</strong>
                </div>
                <div className="timer_ss"><span>{countDown.days === 1 ? 'Day' : 'Days'}</span></div>
              </li>
              <li>
                <div id="hour" className="timer_num">
                  <strong>{this.addLeadingZeros(countDown.hours)}</strong>
                </div>
                <div className="timer_ss">hours</div>
              </li>
              <li>
                <div id="minute" className="timer_num">
                  <strong>{this.addLeadingZeros(countDown.min)}</strong>
                </div>
                <div className="timer_ss">minutes</div>
              </li>
              <li>
                <div id="second" className="timer_num">
                  <strong>{this.addLeadingZeros(countDown.sec)}</strong>
                </div>
                <div className="timer_ss">seconds</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterTimer;
