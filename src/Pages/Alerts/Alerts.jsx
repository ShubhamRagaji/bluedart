import React, { useState } from "react";
import BayGatesButtons from "../../components/BayGatesButtons/BayGatesButtons";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Pagination from "../../components/pagination/Pagination";
import Table from "../../components/Tables/Table";
import { alerts, sec_analysis, actDuration } from "../../dummy_data/alerts";
import "./alerts.scss";
import ActivityDuration from "../../components/ActivityDuration/ActivityDuration";

export default function Alerts() {
  const [activeBayGate, setactiveBayGate] = useState("All Alerts");
  const [activeAnalysis, setactiveAnalysis] = useState("Business Analysis");
  const [activeSecAnalysisBtn, setactiveSecAnalysisBtn] = useState("All");
  const [activeFilteredButton, setactiveFilteredButton] = useState("All");
  const [activityDuration, setactivityDuration] = useState(false);

  const sites = ["All Alerts", "BayGate 2", "BayGate 6", "BayGate 9"];
  const analysisBtns = ["Business Analysis", "Security Analysis"];
  const filterButtons = ["All", "Forklift", "Pallete", "Activity Duration"];
  const security_filterButtons = ["All", "Box Throwing", "Mishandling"];

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
    "Time",
    "Date",
    "Warehouse Location",
    "Camera Location",
    "Camera Name",
    "Location",
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
              onClick={() => {
                setactiveBayGate(site);
              if(activeSecAnalysisBtn === "Business Analysis"){
                if (site === "All Alerts" || site === "BayGate 2") {
                  setdataToDisplay(data);
                  setactivityDuration(false);
                  setactiveFilteredButton("All");
                } else if (site === "BayGate 6" || site === "BayGate 9") {
                  setactiveFilteredButton("All");
                  setdataToDisplay(data);
                }
              }else if(activeSecAnalysisBtn === "Security Analysis"){
                setdataToDisplay(security_data);
                // setactiveBayGate(site === "BayGate 6")
              }
            
            }}
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
                if (item === "Business Analysis") {
                  setactiveAnalysis(item);
                  setactiveBayGate("All Alerts");
                  setdataToDisplay(data);
                } else if (item === "Security Analysis") {
                  setactiveAnalysis(item);
                  setactiveBayGate("All Alerts");
                  setdataToDisplay(security_data);
                }
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {activeAnalysis === "Business Analysis" ? (
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
                    setactivityDuration(false);
                  } else if (filterButton === "Forklift") {
                    let forklift_data = data.filter(
                      (item) => item.alert === "Forklift Detected"
                    );
                    setactivityDuration(false);
                    setCurrentPage(1)

                    setdataToDisplay(forklift_data);
                  } else if (filterButton === "Pallete") {
                    let pallete_data = data.filter(
                      (item) => item.alert === "Pallete Detected"
                    );
                    setactivityDuration(false);
                    setdataToDisplay(pallete_data);
                  } else if (filterButton === "Activity Duration") {
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
                    setCurrentPage(1)
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
        )}

        {dataToDisplay && (
          <div>
            {activeBayGate === "All Alerts" || activeBayGate === "BayGate 2" ? (
              <div>
                {activeAnalysis && "Business Analysis" ? (
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
                      lastPage={Math.ceil(security_data.length / dataPerPage)}
                      nextPage={() => pagination("increment")}
                      prevPage={() => pagination("decrement")}
                    />
                  </div>
                )}
              </div>
            ) : (
              <p className="noData">No Data to Display</p>
            )}
          </div>
        )}

        {activityDuration && (
          <div className="activityDuration">
            {act_Duration.map((activity) => (
              <ActivityDuration
                date={activity.date}
                type={activity.type}
                startTime={activity.startTime}
                endTime={activity.endTime}
                worker={activity.worker}
                location={activity.location}
                actTime={activity.actTime}
                actLocation={activity.actLocation}
                peopleonDeck={activity.peopleonDeck}
                vehType={activity.vehType}
                pl_fk_violation={activity.pl_fk_violation}
                mask={activity.mask}
                soc_distancing={activity.soc_distancing}
                mishandling={activity.mishandling}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
