import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import username from '../../components/Images/username-icon.png';
import eye_icon from '../../components/Images/visibility-off.png';
import eye_icon1 from '../../components/Images/visibility-on.png';
import { useState } from "react";

export default function RoleLogin() {
const [passwordVisibility, setpasswordVisibility] = useState(false)

  return (
    <div className="Role-Login">
      <div className="rl-login">
        <div className="rl-info">
          <h2>Welcome to DTDC</h2>
          <p className="info">
            To keep connected with us please login with your personal info
          </p>
        </div>
        <div className="rl-login-fields">
          <h2>Role Login</h2>
          <div className="username">
            <input
              type="text"
              id="username"
              name="Username"
              placeholder="Enter Username"
              autoFocus={true}
            />
            <img src={username} alt="username" className="username-icon" />
          </div>

          <div className="password">
            <input
              type={passwordVisibility ? "text": "password"}
              id="password"
              name="Password"
              placeholder="Enter Password"
            />
            {passwordVisibility ? <img src={eye_icon1} alt="visibility-on" className="eye-icon"  onClick={() => setpasswordVisibility(false)} /> :
            <img src={eye_icon} alt="visibility-off" className="eye-icon" onClick={() => setpasswordVisibility(true)}/>}  
          </div>

          <Link to="" className="forgot-password-link">
            Forgot Password
          </Link>

          <Link to="/dashboard">
            <button className="roleLogin-button">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
