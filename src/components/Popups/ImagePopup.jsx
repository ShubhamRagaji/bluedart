import React from "react";
import ReactImageMagnify from "react-image-magnify";
import "./image_popup.scss";

export default function ImagePopup(props) {
  console.log(props);
  return (
    <div className="ImagePopup">
      <div className="image_popup">
        <div className="overlay" onClick={props.onClick} />
        <div className="img-popup">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "detected_img",
                isFluidWidth: true,
                src: props.imageName,
              },
              largeImage: {
                src: props.imageName,
                width: 2000,
                height: 2000,
              },
            }}
          >
            <img width="650vw" height="450vw" src={props.imageName} alt="" />{" "}
          </ReactImageMagnify>
        </div>
      </div>
    </div>
  );
}
