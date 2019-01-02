import React from "react";
import Members from "./Members";

class MemberTag extends React.Component {
  render() {
    return (
      <div className="tab_panel members">
        <div className="panel_title">Members</div>
        <div className="panel_text">
          <p>
            Lorem ipsum dolor sit amet, te eros consulatu pro, quem labores
            petentium no sea, atqui posidonium interpretaris pri eu. At soleat
            maiorum platonem vix, no mei case fierent. Primis quidam ancillae te
            mei.
          </p>
        </div>
        <Members />
      </div>
    );
  }
}

export default MemberTag;
