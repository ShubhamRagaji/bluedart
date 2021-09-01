import React from "react";
import "./act_dur.scss";

export default function ActivityDuration(props) {
  return (
    <div className="activityDuration">
      <div className="details">
        <p>Sr. No: {props.srNo}</p>
        <p>Date: {props.date}</p>
        <p>Activity Type: {props.type}</p>
        <p>Activity Start Time: {props.startTime}</p>
        <p>Activity End Time: {props.endTime}</p>
        <p>Worker: {props.worker}</p>
        <p>Ware House Location: {props.location}</p>
        <p>Total Activity Time: {props.actTime}</p>
      </div>
      <div className="video">
        <p>asa</p>
      </div>
    </div>
  );
}
