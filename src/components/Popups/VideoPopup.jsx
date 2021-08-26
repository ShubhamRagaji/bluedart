import React from "react";
import "./video_popup.scss";

export default function VideoPopup(props) {
    console.log(props)
    // return true
  return (
    <div className="VideoPopup">
      {console.log(props)}
      <div className="video_popup">
        <div className="overlay" onClick={props.onClick} />
        <div className="vd-popup">
          <video width="65vw" height="45vw" controls autoPlay>
            <source src={props.videoName} />
            Can't load the video.
          </video>
        </div>
      </div>
    </div>
  );
}


// import React from "react";
// // import './table.scss'

// export default function VideoPopup(props) {
//     console.log(props)
// }
