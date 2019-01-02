import React from "react";
import Event from "./Event";

class Events extends React.Component {
  render() {
    return (
      <div className="events">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="section_title text-center">Upcoming Events</h2>
            </div>
          </div>
            {}
            <Event />
        </div>
      </div>
    );
  }
}

export default Events;
