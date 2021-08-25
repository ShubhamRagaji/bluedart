import React from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import "./dashboard.scss";

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <Header heading="Dashboard" />
      <Menu />

      <div className="dashboard"></div>
    </div>
  );
}
