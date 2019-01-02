import React from "react";

class Members extends React.Component {
  render() {
    return (
      <div className="members_list d-flex flex-row flex-wrap align-items-start justify-content-start">
        {}
        <div className="member">
          <div className="member_image">
            <img src="images/member_1.jpg" alt />
          </div>
          <div className="member_title">
            <a href="#">Sarah Parker</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Members;
