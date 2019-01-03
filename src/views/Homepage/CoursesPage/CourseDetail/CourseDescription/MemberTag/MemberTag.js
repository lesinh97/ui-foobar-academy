import React from "react";
import Members from "./Members";

class MemberTag extends React.Component {
  render() {
    return (
      <div className="tab_panel members active">
        <div className="panel_title">Members</div>
        <div className="panel_text">
          <p>
            This course contain: 
          </p>
        </div>
        <Members classes = {this.props.classes} />
      </div>
    );
  }
}

export default MemberTag;
