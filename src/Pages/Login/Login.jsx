import React, { useEffect } from "react";
import "./login.scss";
import { Link, useHistory } from "react-router-dom";
import username from "../../components/Images/username-icon.png";
import eye_icon from "../../components/Images/visibility-off.png";
import eye_icon1 from "../../components/Images/visibility-on.png";
import gif from "../../components/Images/4.gif"
// import bk_img from "../../components/Images/4.gif";
import { useState } from "react";

export default function RoleLogin() {
  const [passwordVisibility, setpasswordVisibility] = useState(false);

  const [uname, setuname] = useState();
  const [password, setpassword] = useState();
  // const [accessKey, setaccessKey] = useState();
  // const [data, setData] = useState();

  const history = useHistory();

  const loginCredentials = () => {
    if (uname === "admin" && password === "admin@123") {
      history.push("/dashboard");
    } else {
      alert("Wrong Username or Password");
    }
  };

  // const requestOptions = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json", username: uname, password: password},
  
  // };

  // const loginData = () => {
  //   fetch("http://marketplace.diycam.com/api/v1/users/login", requestOptions)
  //   .then((response) => response.json())
  //   .then((items) => {
  //     console.log(items)
  //   });
    
  // }

  return (
    <div className="Role-Login">
      <div className="rl-login">
        {/* <img src={bk_img} alt="" /> */}
        <div className="rl-info">
          <img src={gif} alt="gif" className="gif" />
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
              value={uname}
              placeholder="Enter Username"
              autoFocus={true}
              onChange={(e) => setuname(e.target.value)}
            />
            <img src={username} alt="username" className="username-icon" />
          </div>

          <div className="password">
            <input
              type={passwordVisibility ? "text" : "password"}
              id="password"
              name="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter Password"
            />
            {passwordVisibility ? (
              <img
                src={eye_icon1}
                alt="visibility-on"
                className="eye-icon"
                onClick={() => setpasswordVisibility(false)}
              />
            ) : (
              <img
                src={eye_icon}
                alt="visibility-off"
                className="eye-icon"
                onClick={() => setpasswordVisibility(true)}
              />
            )}
          </div>

          {/* <div className="access-key">
            <input
              type="text"
              id="accessKey"
              name="accessKey"
              value={accessKey}
              placeholder="Enter Access Key"
              onChange={(e) => setaccessKey(e.target.value)}
            />
          </div> */}

          <Link to="" className="forgot-password-link">
            Forgot Password
          </Link>

          <button
            className="roleLogin-button"
            onClick={() => {
              loginCredentials();
              // loginData()
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
