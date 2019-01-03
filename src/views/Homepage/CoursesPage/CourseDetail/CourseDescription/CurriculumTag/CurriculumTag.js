import React from "react";
import CurItem from "./CurItem";

class CurriculumTag extends React.Component {
  render() {
    return (
      <div className="tab_panel curriculum active">
        <div className="panel_title">Syllabus</div>
        <div className="panel_text">
          <p>
            Nam egestas lorem ex, sit amet commodo tortor faucibus a.
            Suspendisse commodo, turpis a dapibus fermentum, turpis ipsum
            rhoncus massa, sed commodo nisi lectus id ipsum. Sed nec elit
            vehicula, aliquam neque euismod, porttitor ex. Nam consequat iaculis
            maximus. Suspendisse potenti. In rutrum justo et diam egestas
            luctus. Mauris eu neque eget odio suscipit eleifend. Sed imperdiet
            ante quis felis tempor hendrerit. Curabitur eget fermentum ipsum.
            Sed efficitur eget velit eu vulputate. Duis tincidunt quam in erat
            dignissim consequat. Praesent tempus leo eu nisl fringilla interdum.
            Maecenas rutrum libero eget lacus bibendum tristique. Curabitur at
            felis lobortis, mollis ante ut, tempus elit. Morbi justo nisi,
            posuere sed augue id, iaculis tincidunt mi. Pellentesque sed dolor
            sed dui congue tempus a et felis.
          </p>
        </div>
        <div className="curriculum_items">
          <CurItem />
        </div>
      </div>
    );
  }
}

export default CurriculumTag;
