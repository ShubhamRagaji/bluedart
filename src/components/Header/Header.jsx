import React from "react";
import user from "../Images/icons/user.png";
import dtdc_logo from "../Images/dtdc.png";
import './header.scss'

export default function Header(props) {
  return (
    <div className="Header">
      <div className="label">
        <img src={dtdc_logo} alt="DTDC_logo" className="dtdc-logo" />
        <button className="headingbtn" disabled>{props.heading}</button>
      </div>
      <div className="user">
        <img src={user} alt="user" className="user-icon" />
      </div>
    </div>
  );
}
