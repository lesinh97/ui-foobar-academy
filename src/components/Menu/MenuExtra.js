import React from "react";
import Phone from "./Phone";
import MenuSocial from "./MenuSocial";

class MenuExtra extends React.Component {
  render() {
    return (
      <div className="menu_extra">
        <Phone />
        <MenuSocial />
      </div>
    );
  }
}

export default MenuExtra;
