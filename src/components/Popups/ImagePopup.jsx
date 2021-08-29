import React from "react";
import "./image_popup.scss";

export default function ImagePopup(props) {
    console.log(props)
  return (
    <div className="ImagePopup">
      <div className="image_popup">
        <div className="overlay" onClick={props.onClick} />
        <div className="img-popup">
          <img width="650vw" height="450vw" src={props.imageName} alt=""/>
        </div>
      </div>
    </div>
  );
}
