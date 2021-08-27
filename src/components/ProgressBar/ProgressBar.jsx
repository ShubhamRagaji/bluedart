import React, { useEffect } from "react";
import './progress_bar.scss'

export default function ProgressBar(props) {
    useEffect(() => {
       setTimeout(() => {
           document.getElementById(props.id).style.width=props.percentage
       }, 100);
    }, [])

  return (
    <div className="percentage">
      <div className="usecase">
          {console.log(props.backgroundColor)}
        <p>{props.name}</p>
        <p>{props.percentage}</p>
      </div>
      <div className="bar">
        <div className="bar_color" id={props.id} style={{backgroundColor: props.backgroundColor}} />
      </div>
    </div>
  );
}
