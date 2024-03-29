import React from "react";
import "./video_popup.scss";

export default function VideoPopup(props) {
    console.log(props)
  return (
    <div className="VideoPopup">
      {console.log(props)}
      <div className="video_popup">
        <div className="overlay" onClick={props.onClick} />
        <div className="vd-popup">
          <video width="650vw" height="450vw" controls autoPlay>
            <source src={props.videoName} />
            Can't load the video.
          </video>
        </div>
      </div>
    </div>
  );
}
