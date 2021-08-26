import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./logout.scss";
import logout from '../../components/Images/logout.png';


function Logout(props) {
  return (
    <div className="LogoutPopup">
          <div className="Logout bounceInDown">
            <img src={logout} alt="logout" className="logout_img" />
            <p>Are you sure you want to Logout?</p>
            <div className="yes-no">
              <NavLink to="/">
                <button className="yes-btn">Yes</button>
              </NavLink>
              <button className="no-btn" onClick={() => props.history.goBack()}>
                No
              </button>
            </div>
          </div>
        </div>
  );
}

export default withRouter(Logout);
