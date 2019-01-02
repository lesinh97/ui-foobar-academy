import React from "react";
import event_1 from '../images/event_1.jpg'
import event_2 from '../images/event_2.jpg'
import event_3 from '../images/event_3.jpg'

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          img: event_1,
          day: "26",
          month: "Aug",
          title: "Code war",
          fee: "Free"
        },
        {
          img: event_2,
          day: "12",
          month: "Dec",
          title: "Teacher's Day",
          fee: "150$"
        },
        {
          img: event_3,
          day: "15",
          month: "Jan",
          title: "DevDay",
          fee: "Free"
        }
      ]
    }
  }
  render() {
    return (
      <div class="row events_row">
      {
        this.state.events.map((item,index)=> (
          <div className="col-lg-4 event_col">
            <div className="event">
              <div className="event_image">
                <img src={item.img} alt />
              </div>
          <div className="event_date d-flex flex-column align-items-center justify-content-center">
            <div className="event_day">{item.day}</div>
            <div className="event_month">{item.month}</div>
          </div>
          <div className="event_body d-flex flex-row align-items-center justify-content-start">
            <div className="event_title">
              <a href="#">{item.title}</a>
            </div>
            <div className="event_tag ml-auto">{item.fee}</div>
          </div>
        </div>
      </div>
        ))
      }
      </div>
    );
  }
}

export default Event;
