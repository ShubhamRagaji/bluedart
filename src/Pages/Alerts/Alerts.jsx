import React, { useState } from "react";
import BayGatesButtons from "../../components/BayGatesButtons/BayGatesButtons";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Table from "../../components/Tables/Table";
import { alerts } from "../../data";
import "./alerts.scss";

export default function Alerts() {
  const [activeBayGate, setactiveBayGate] = useState("All Alerts");
  const [activeAnalysis, setactiveAnalysis] = useState("Business Analysis");

  const sites = ["All Alerts", "BayGate 2", "BayGate 6", "BayGate 9"];
  const analysisBtns = ["Business Analysis", "Security Analysis"];

  const td = ["a", "a", "a", "a", "Videos"];

  const data = alerts;

  return (
    <div className="Alerts">
      <Header heading="Alerts" />
      <Menu />
      <div className="alerts">
        <div className="baygates">
          {sites.map((site) => (
            <BayGatesButtons
              bg_name={site}
              isActive={site === activeBayGate}
              onClick={() => setactiveBayGate(site)}
            />
          ))}
        </div>

        <div className="al-buttons">
          {analysisBtns.map((item) => (
            <button
              className={
                activeAnalysis === item
                  ? "businessSecuritybtn activeAnalysis"
                  : "businessSecuritybtn"
              }
              onClick={() => setactiveAnalysis(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="alerts-table">
          <Table>
            <tr>
              {td.map((td) => (
                <th>{td}</th>
              ))}
            </tr>

            {data.map((td) => (
              <tr>
                <td>{td.name}</td>
                <td>{td.Age}</td>
                <td>{td.Phone}</td>
                <td>{td.UName}</td>
                <td>
                  <img src={td.img} alt="" />
                </td>
              </tr>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
}
