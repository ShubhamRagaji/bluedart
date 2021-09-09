import React from "react";
import "./act_dur.scss";
import mp4 from "../../components/Images/icons/mp4.png";

export default function ActivityDuration(props) {
  return (
    <div className="activityTime fadeInDown">
      <div className="Details">
        <div className="details_1">
          <p>Date : {props.date}</p>
          <p>Activity Type : {props.type}</p>
          <p>Activity Start Time : {props.startTime}</p>
          <p>Activity End Time : {props.endTime}</p>
          <p>Activity Location : {props.actLocation}</p>
          <p>Ware House Location : {props.location}</p>
          <p>Total Activity Time : {props.actTime}</p>
        </div>

        <div className="details_2">
          <p>Number of people on Deck : {props.peopleonDeck}</p>
          <p>Vehicle Type : {props.vehType}</p>
          <div className="radio">
            <input type="radio" id="radio1" name="radio" />
            <p>Pallete and Forklift Violations : {props.pl_fk_violation} </p>
          </div>
          <div className="radio">
            <input type="radio" id="radio2" name="radio" />
            <p>Mask Violations : {props.mask} </p>
          </div>
          <div className="radio">
            <input type="radio" id="radio3" name="radio" />
            <p>Social Distancing Violations : {props.soc_distancing}</p>
          </div>
          <div className="radio">
            <input type="radio" id="radio4" name="radio" />
            <p>Loitering / Mishandling : {props.mishandling} </p>
          </div>
          <div className="media">
            <p>Media : </p>
            <a rel="noopener noreferrer" href={props.media} target="_blank">
              <img src={mp4} alt="mp4" className="mp4" />
            </a>
          </div>
        </div>
      </div>
      <div className="bottomPart">
        <p>No Alerts</p>
      </div>
    </div>
  );
}
