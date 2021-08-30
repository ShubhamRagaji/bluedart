import React, { useState } from "react";
import VideoPopup from "../Popups/VideoPopup";
import ImagePopup from "../Popups/ImagePopup";

import './table.scss'

export default function Table(props) {
  console.log(props.data)
  const [video, setVideo] = useState(null)  
  const [image, setImage] = useState(null)  

  return (
    <div className="Table fadeInDown">
      {image && <ImagePopup onClick={()=> setImage(null)} imageName={image}/>}
      {video && <VideoPopup onClick={()=> setVideo(null)} videoName={video}/>}
      
      <table>
          <tr>
              {props.columnNames.map((columnName) => (
                <th>{columnName}</th>
              ))}
            </tr>
            {props.data.map((row, index) => {
              return <tr>
                <td>{props.offset + index + 1}</td>
                {
                Object.keys(row).map(
                  (rowData) => {
                    if (typeof(props.data[index][rowData]) === "string"){
                      if (!props.data[index][rowData].includes(".png") 
                      && !props.data[index][rowData].includes(".jpg") 
                      && !props.data[index][rowData].includes(".mp4")){
                        if (props.data[index][rowData].includes("image")) {
                          return <td><img
                                      src={props.data[index][rowData]}
                                      alt=""
                                      onClick={() => setImage(props.data[index].img_url)}
                                  /></td>
                        }
                        return <td>{props.data[index][rowData]}</td>
                      }}
                    else {
                      return <td>{props.data[index][rowData]}</td>
                    }}
                )
              }
              </tr>
            })}
      </table>
    </div>
  );
}
