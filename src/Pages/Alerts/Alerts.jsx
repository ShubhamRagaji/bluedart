import React, { useState } from "react";
import BayGatesButtons from "../../components/BayGatesButtons/BayGatesButtons";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import { data } from "../../data";
import "./alerts.scss";

export default function Alerts() {
  const [activeBayGate, setactiveBayGate] = useState("All Alerts");

  return (
    <div className="Alerts">
      <Header heading="Alerts" />
      <Menu />

      <div className="alerts">
        <div className="baygates">
          <BayGatesButtons bg_name="All Alerts" />
          <BayGatesButtons bg_name="BayGate 2" />
          <BayGatesButtons bg_name="BayGate 6" />
          <BayGatesButtons bg_name="BayGate 9" />

          {/* <p className={activeBayGate === "BayGate 2" ? "baygate_toggle activebayGate" : "baygate_toggle"} onClick={() => setactiveBayGate("BayGate 2")}>BayGate 2</p>
          <p className={activeBayGate === "BayGate 9" ? "baygate_toggle activebayGate" : "baygate_toggle"} onClick={() => setactiveBayGate("BayGate 9")}>BayGate 9</p>
          <p className={activeBayGate === "BayGate 6" ? "baygate_toggle activebayGate" : "baygate_toggle"} onClick={() => setactiveBayGate("BayGate 6")}>BayGate 6</p> */}
        </div>
        <div className="al-buttons">
          <button className="businessbtn">Business Analysis</button>
          <button className="businessbtn">Business Analysis</button>
        </div>
        <div className="al-table">
          <table>
            <tr>
              <th>Serial No.</th>
              <th>Time Stamp</th>
              <th>Number Plate</th>
              <th>Vehicle Type</th>
              <th>Video</th>
            </tr>

            {data.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>
                  <img src={item.img} alt="" />
                </td>
                <td>{item.np}</td>
                <td>{item.veh_type}</td>
                <td></td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
