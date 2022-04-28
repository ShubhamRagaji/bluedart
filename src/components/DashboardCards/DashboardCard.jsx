import React from "react";
import "./dashboard_card.scss";
import information from "../Images/icons/information.png";
import ReactTooltip from "react-tooltip";

export default function DashboardCard(props) {
  return (
    <div className="DashboardCard fadeInDown">
      <div className="topPart">
        <p className="card_name">{props.card_name}</p>

       <ReactTooltip
          place="right"
          type="info"
          effect="solid"
          className="tooltip"
        />
        {/* <img
          src={information}
          alt="information"
          className="information"
          data-tip={props.content}
        /> */}
      </div>
      <hr />
      <div className="count">
        <img className="card_icon" src={props.img} alt="icon" />
        <div className="totalCount">
          <p className="amount">{props.total}</p>
          <p>{props.count}</p>
        </div>
      </div>
    </div>
  );
}
