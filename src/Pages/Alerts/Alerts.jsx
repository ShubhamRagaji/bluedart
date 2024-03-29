import React, { useState } from "react";
import BayGatesButtons from "../../components/BayGatesButtons/BayGatesButtons";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Pagination from "../../components/pagination/Pagination";
import Table from "../../components/Tables/Table";
import { alerts } from "../../dummy_data/alerts";
import "./alerts.scss";
import ActivityDuration from "../../components/ActivityDuration/ActivityDuration";

export default function Alerts() {
  const [activeBayGate, setactiveBayGate] = useState("All Alerts");
  const [activeAnalysis, setactiveAnalysis] = useState("All");
  const [activeSecAnalysisBtn, setactiveSecAnalysisBtn] = useState("All");
  const [activeFilteredButton, setactiveFilteredButton] = useState("All");
  const [activityDuration, setactivityDuration] = useState(false);

  const sites = ["All Alerts", "BayGate 2", "BayGate 6", "BayGate 9"];
  const analysisBtns = ["Business Analysis", "Security Analysis"];
  const filterButtons = ["All", "Forklift", "Pallete", "Activity Duration"];
  const security_filterButtons = ["All", "Box Throwing", "Mishandling"];

  const [date, setdate] = useState("");
  const [newDate, setnewDate] = useState();

  const td = [
    "Sr. No",
    "Camera Name",
    "Camera Location",
    "Alert",
    "Date & Time",
    "Media",
  ];

  const security_td = [
    "Sr. No",
    "Time",
    "Date",
    "Warehouse Location",
    "Camera Location",
    "Camera Name",
    "Location",
  ];

  const data = alerts;
  const [dataToDisplay, setdataToDisplay] = useState(data);



  //Pagination
  const dataPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const pagination = (type) => {
    if (type === "increment") {
      setCurrentPage((page) => page + 1);
    } else {
      setCurrentPage((page) => page - 1);
    }
  };

  const filteredDateData = (dt) => {
    let splitted_date = dt.split("-");
    let splitData =
      splitted_date[2] + "/" + splitted_date[1] + "/" + splitted_date[0];
  };

  return (
    <div className="Alerts">
      <Header heading="Alerts" />
      <Menu />
      <div className="alerts">
        <div className="baygates">
          {/* {sites.map((site, index) => (
            <BayGatesButtons
              id={index}
              bg_name={site}
              isActive={site === activeBayGate}
              onClick={() => {
                setactiveBayGate(site);

                if (site === "All Alerts" || site === "BayGate 2") {
                  setdataToDisplay(data);
                  setactivityDuration(false);
                  setactiveFilteredButton("All");
                  setactiveSecAnalysisBtn("All");
                  // setactivityDuration(false)
                } else if (site === "BayGate 6" || site === "BayGate 9") {
                  setactiveFilteredButton("All");
                  setactiveSecAnalysisBtn("All");
                  setdataToDisplay(data);
                  setactivityDuration(false);
                }
              }}
            />
          ))} */}
        </div>

        {/* <div className="al-buttons bounceInDown">
          {analysisBtns.map((item) => (
            <button
              className={
                activeAnalysis === item
                  ? "businessSecuritybtn activeAnalysis"
                  : "businessSecuritybtn"
              }
              onClick={() => {
                if (item === "Business Analysis") {
                  setactiveAnalysis(item);
                  setactiveBayGate("All Alerts");
                  setactiveFilteredButton("All");
                  setdataToDisplay(data);
                  setactivityDuration(false);
                } else if (item === "Security Analysis") {
                  setactiveAnalysis(item);
                  setactiveBayGate("All Alerts");
                  setdataToDisplay(security_data);
                  setactiveSecAnalysisBtn("All");
                  setactiveBayGate("BayGate 6");
                  setCurrentPage(1);
                  setactivityDuration(false);
                }
              }}
            >
              {item}
            </button>
          ))}
        </div> */}

        {/* {activeAnalysis === "Business Analysis" ? (
          <div className="bussinessAnalysis-filterButtons bounceInDown">
            {filterButtons.map((filterButton, index) => (
              <button
                id={"btn-" + index}
                className={
                  activeFilteredButton === filterButton
                    ? "filter_btns activefilteredbtn"
                    : "filter_btns"
                }
                onClick={() => {
                  setactiveFilteredButton(filterButton);
                  if (filterButton === "All") {
                    setdataToDisplay(data);
                    setactivityDuration(false);
                  } else if (filterButton === "Forklift") {
                    let forklift_data = data.filter(
                      (item) => item.alert === "Forklift Detected"
                    );
                    setactivityDuration(false);
                    setCurrentPage(1);

                    setdataToDisplay(forklift_data);
                  } else if (filterButton === "Pallete") {
                    let pallete_data = data.filter(
                      (item) => item.alert === "Pallete Detected"
                    );
                    setactivityDuration(false);
                    setdataToDisplay(pallete_data);
                  } else if (filterButton === "Activity Duration") {
                    setact_Duration1(actDuration);
                    if (
                      activeBayGate === "All Alerts" ||
                      activeBayGate === "BayGate 2"
                    ) {
                      setdataToDisplay("");
                      setactivityDuration(true);
                    } else {
                      setdataToDisplay(data);
                    }
                  }
                }}
              >
                {filterButton}{" "}
              </button>
            ))}
          </div>
        ) : (
          <div className="security_btns">
            {security_filterButtons.map((security) => (
              <button
                className={
                  activeSecAnalysisBtn === security
                    ? "securityAnalysis-filterButtons activeSecBtn bounceInDown"
                    : "securityAnalysis-filterButtons bounceInDown"
                }
                onClick={() => {
                  setactiveSecAnalysisBtn(security);

                  if (security === "All") {
                    setdataToDisplay(security_data);
                  } else if (security === "Box Throwing") {
                    let sec_filteredData = security_data.filter(
                      (item) => item.war_location === "Box Throwing"
                    );
                    setdataToDisplay(sec_filteredData);
                    setCurrentPage(1);
                  } else if (security === "Mishandling") {
                    let sec_filteredData1 = security_data.filter(
                      (item) => item.war_location === "Mishandling"
                    );
                    setdataToDisplay(sec_filteredData1);
                  }
                }}
              >
                {security}
              </button>
            ))}
          </div>
        )} */}

        {/* {activityDuration && (
          <input
            type="date"
            className="date"
            name="date"
            value={newDate}
            onChange={(e) => filteredDateData(e.target.value)}
          />
        )} */}

        {dataToDisplay && (
          <div>
            <div>
              <div>
                <div className="alerts-table">
                  <Table
                    columnNames={td}
                    data={dataToDisplay.slice(
                      currentPage * dataPerPage - dataPerPage,
                      currentPage * dataPerPage
                    )}
                    offset={currentPage * dataPerPage - dataPerPage}
                  ></Table>

                  <Pagination
                    currentPage={currentPage}
                    lastPage={Math.ceil(dataToDisplay.length / dataPerPage)}
                    nextPage={() => pagination("increment")}
                    prevPage={() => pagination("decrement")}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* {activityDuration && (
          <div className="activityDuration">
            {act_Duration1.length > 0 ? (
              act_Duration1.map((activity) => (
                <ActivityDuration
                  date={activity.date}
                  type={activity.type}
                  startTime={activity.startTime}
                  endTime={activity.endTime}
                  location={activity.location}
                  actTime={activity.actTime}
                  actLocation={activity.actLocation}
                  peopleonDeck={activity.peopleonDeck}
                  vehType={activity.vehType}
                  pl_fk_violation={activity.pl_fk_violation}
                  mask={activity.mask}
                  soc_distancing={activity.soc_distancing}
                  mishandling={activity.mishandling}
                  media={activity.media}
                />
              ))
            ) : (
              <p className="noData">No Data to Display</p>
            )}
          </div>
        )} */}
      </div>
    </div>
  );
}
