import React from "react";
import anpr from "../Images/icons/anpr.png";
import dashboard from "../Images/icons/dashboard.png";
import alerts from "../Images/icons/alerts.png";
import logout from "../Images/icons/loguot.png";
import Profile from "../Images/icons/user.png";
import Tooltip from "react-simple-tooltip";
import "./menu.scss";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div className="Menu">
      <div className="Icons">
        <img src={Profile} alt="Profile" className="profile" />
        <hr className="profile_hr" />
        <Tooltip
          content="Dashboard"
          placement="right"
          fadeDuration={400}
          radius={4}
          style={{ zIndex: "1" }}
        >
          <NavLink to="/dashboard" activeClassName="activeRoute">
            <img src={dashboard} alt="dashboard" className="menu_icon" />
          </NavLink>
        </Tooltip>

        <Tooltip content="ANPR" placement="right" fadeDuration={400} radius={4}>
          <NavLink to="/anpr" activeClassName="activeRoute">
            <img src={anpr} alt="anpr" className="menu_icon" />
          </NavLink>
        </Tooltip>

        <Tooltip
          content="Alerts"
          placement="right"
          fadeDuration={400}
          radius={4}
        >
          <NavLink to="/alerts" activeClassName="activeRoute">
            <img src={alerts} alt="alerts" className="menu_icon" />
          </NavLink>
        </Tooltip>
      </div>
      <div className="logout_icon" activeClassName="activeRoute">
        <hr className="hr" />
        <Tooltip
          content="Logout"
          placement="right"
          fadeDuration={400}
          radius={4}
        >
          <NavLink to="/logout">
            <img src={logout} alt="logout" className="menu_icon logout_icon" />
          </NavLink>
        </Tooltip>
      </div>
    </div>
  );
}
