import React from "react";
import "./dashboard_card.scss";

export default function DashboardCard(props) {
  return (
    <div className="DashboardCard fadeInDown">
      <p className="card_name">{props.card_name}</p>
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
