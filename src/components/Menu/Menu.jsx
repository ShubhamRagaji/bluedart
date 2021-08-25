import React from "react";
import anpr from "../Images/icons/anpr.png";
import dashboard from "../Images/icons/dashboard.png";
import alerts from "../Images/icons/alerts.png";
import logout from "../Images/icons/loguot.png";
import Profile from "../Images/icons/Profile.png";
import "./menu.scss";
import { NavLink } from "react-router-dom";

export default function Menu() {


  return (
    <div className="Menu">
      <div className="Icons">
        <img src={Profile} alt="Profile" className="profile" />
        <hr className="profile_hr" />
        <NavLink to="/dashboard">
          <img
            src={dashboard}
            alt="dashboard"
            className="menu_icon"
          />
        </NavLink>

        <NavLink to="/anpr">
          <img
            src={anpr}
            alt="anpr"
            className="menu_icon"
          />
        </NavLink>

        <NavLink to="/alerts">
          <img
            src={alerts}
            alt="alerts"
            className="menu_icon"
          />
        </NavLink>
      </div>
      <div className="logout_icon">
        <hr className="hr" />
        <NavLink to="/logout">
          <img src={logout} alt="logout" className="menu_icon logout_icon" />
        </NavLink>
      </div>
    </div>
  );
}
