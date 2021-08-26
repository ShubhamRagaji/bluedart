import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import "./anpr.scss";
import { anpr } from "../../data";
import { videos } from "../../data";
import BayGatesButtons from "../../components/BayGatesButtons/BayGatesButtons";
import Table from "../../components/Tables/Table";
import exit from "../../components/Images/exitImage.png";
import VideoPopup from "../../components/Popups/VideoPopup";

export default function Anpr() {
  const [activeBayGate, setactiveBayGate] = useState("All Alerts");
  const [activeAnalysis, setactiveAnalysis] = useState("Business Analysis");

  const [videoPopup, setvideoPopup] = useState(false);

  const sites = ["All Alerts", "BayGate 2", "BayGate 6", "BayGate 9"];
  const analysisBtns = ["Business Analysis", "Security Analysis"];

  const td = [
    "Warehouse Location",
    "Camera Location",
    "Vehicle Number",
    "Entry Time & Date",
    "Exit Time & Date",
    "Total Duration",
    "Media",
  ];

  const data = anpr;
  const videosToShow = videos;

  let onMediaIconClick = (index) => {
    console.log(index);
    console.log(data[index].video);
    return <VideoPopup videoName={data[index].video} />;
  };

  return (
    <div className="Anpr">
      <Header heading="ANPR" />
      <Menu />
      <div className="anpr">
        <div className="baygates">
          {sites.map((site) => (
            <BayGatesButtons
              bg_name={site}
              isActive={site === activeBayGate}
              onClick={() => setactiveBayGate(site)}
            />
          ))}
        </div>

        <div className="anpr-buttons">
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

        <div className="anpr-table">
          <Table>
            <tr>
              {td.map((td) => (
                <th>{td}</th>
              ))}
            </tr>

            {data.map((td, index) => (
              <tr>
                <td>{td.name}</td>
                <td>{td.Age}</td>
                <td>{td.Phone}</td>
                <td>{td.UName}</td>

                <td>{td.time}</td>

                <td>{td.abc}</td>
                <td>
                  <img
                    src={td.img}
                    alt=""
                    // onClick={() => onMediaIconClick(index)}
                    onClick={() => (<VideoPopup videoName={data[index].video} />)}
                  />
                </td>
              </tr>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
}
