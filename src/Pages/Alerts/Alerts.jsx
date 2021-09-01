import React, { useState } from "react";
import BayGatesButtons from "../../components/BayGatesButtons/BayGatesButtons";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Pagination from "../../components/pagination/Pagination";
import Table from "../../components/Tables/Table";
import { alerts, sec_analysis, actDuration } from "../../dummy_data/alerts";
import "./alerts.scss";
import ActivityDuration from '../../components/ActivityDuration/ActivityDuration'

export default function Alerts() {
  const [activeBayGate, setactiveBayGate] = useState("All Alerts");
  const [activeAnalysis, setactiveAnalysis] = useState("Business Analysis");
  const [activeFilteredButton, setactiveFilteredButton] = useState("All");
  const [activityDuration, setactivityDuration] = useState(false);

  const sites = ["All Alerts", "BayGate 2", "BayGate 6", "BayGate 9"];
  const analysisBtns = ["Business Analysis", "Security Analysis"];
  const filterButtons = ["All", "Forklift", "Pallete", "Activity Duration"];

  const td = [
    "Sr. No",
    "Priority",
    "Location",
    "Camera Location",
    "Camera Name",
    "Alert",
    "Date & Time",
    "Media",
  ];

  const security_td = [
    "Sr. No",
    "Priority",
    "Location",
    "Camera Location",
    "Camera Name",
    "Alert",
    "Date & Time",
    "Assigned To",
    "Status",
    "Camera Tampering",
    "Alerts Detected",
    "Accuracy",
    "Media",
  ];

  const data = alerts;
  const [dataToDisplay, setdataToDisplay] = useState(data);

  const security_data = sec_analysis;

  const act_Duration = actDuration;

  //Pagination
  const dataPerPage = 10;
  const sec_analysis_totalPages = Math.ceil(security_data.length / dataPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const pagination = (type) => {
    if (type === "increment") {
      setCurrentPage((page) => page + 1);
    } else {
      setCurrentPage((page) => page - 1);
    }
  };

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

        <div className="al-buttons bounceInDown">
          {analysisBtns.map((item) => (
            <button
              className={
                activeAnalysis === item
                  ? "businessSecuritybtn activeAnalysis"
                  : "businessSecuritybtn"
              }
              onClick={() => {
                setactiveAnalysis(item);
                setactiveBayGate("All Alerts");
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {activeAnalysis === "Business Analysis" && (
          <div className="bussinessAnalysis-filterButtons bounceInDown">
            {filterButtons.map((filterButton) => (
              <button
                className={
                  activeFilteredButton === filterButton
                    ? "filter_btns activefilteredbtn"
                    : "filter_btns"
                }
                onClick={() => {
                  setactiveFilteredButton(filterButton);
                  if (filterButton === "All") {
                    setdataToDisplay(data);
                  } else if (filterButton === "Forklift") {
                    let forklift_data = data.filter(
                      (item) => item.alert === "Forklift Detected"
                    );
                    setdataToDisplay(forklift_data);
                  } else if (filterButton === "Pallete") {
                    let pallete_data = data.filter(
                      (item) => item.alert === "Pallete Detected"
                    );
                    setdataToDisplay(pallete_data);
                  } else if (filterButton === "Activity Duration") {
                    // setdataToDisplay("");  
                    setactivityDuration(true);
                  }
                }}
              >
                {filterButton}{" "}
              </button>
            ))}
          </div>
        )}

        {/* {dataToDisplay && (
          <div>
            {activeBayGate === "All Alerts" || activeBayGate === "BayGate 2" ? (
              <div>
                {activeAnalysis === "Business Analysis" ? (
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
                ) : (
                  <div className="alerts-table">
                    <Table
                      columnNames={security_td}
                      data={security_data.slice(
                        currentPage * dataPerPage - dataPerPage,
                        currentPage * dataPerPage
                      )}
                      offset={currentPage * dataPerPage - dataPerPage}
                    ></Table>

                    <Pagination
                      currentPage={currentPage}
                      lastPage={sec_analysis_totalPages}
                      nextPage={() => pagination("increment")}
                      prevPage={() => pagination("decrement")}
                    />
                  </div>
                )}
              </div>
            ) : 
            (
              <p className="noData">No Data to Display</p>
            )
            } 
          </div>
        )} */}

        {activityDuration && (
          <div className="activityDuration">
            {act_Duration.map((activity) => (
              <ActivityDuration
                srNo={activity.srNo}
                date={activity.date}
                type={activity.type}
                startTime={activity.startTime}
                endTime={activity.endTime}
                worker={activity.worker}
                location={activity.location}
                actTime={activity.actTime}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
