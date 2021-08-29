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
          <img width="650vw" height="450vw" src={props.videoName} alt="Can't load the video."/>
            {/* <source  />
            Can't load the video. */}
        </div>
      </div>
    </div>
  );
}
