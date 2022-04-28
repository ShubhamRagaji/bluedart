import React from "react";
import user from "../Images/icons/user.png";
import bluedart_logo from "../Images/bluedart.png";
import './header.scss'

export default function Header(props) {
  return (
    <div className="Header">
      <div className="label">
        <img src={bluedart_logo} alt="Bluedart" className="bluedart-logo" />
        <button className="headingbtn" disabled>{props.heading}</button>
      </div>
      <div className="user">
        <img src={user} alt="user" className="user-icon" />
      </div>
    </div>
  );
}
