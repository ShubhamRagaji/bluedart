import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import "./anpr.scss";
import { anpr_data, bay_data, veh_data } from "../../dummy_data/anpr";
import BayGatesButtons from "../../components/BayGatesButtons/BayGatesButtons";
import Table from "../../components/Tables/Table";
import Pagination from "../../components/pagination/Pagination";

export default function Anpr() {
  const [activeBayGate, setactiveBayGate] = useState("Bay Activity");

  const sites = ["Bay Activity", "Vehicle Entry / Exit"];

  const bayColumnNames = [
    "Sr No",
    "Vehile Arrival TS",
    "Vehicle Departure TS",
    "Activity Start",
    "Activity End",
    "No. of Employees",
    "Forkift Used",
    "Pallette Used",
  ];

  const vehColumnNames1 = [
    "Sr No",
    "Vehicle Number",
    "Vehile IN Date & Time",
    "Vehicle Out Date & Time",
    "Media"
    
  ];

  const data = bay_data;
  const data1 = veh_data;

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

  const filteredData = () => {
    let filtered_data = data.filter(
      (item) => item.camera_location === "Main Gate"
    );
    setdataToDisplay(filtered_data);
    console.log(filtered_data);
  };

  return (
    <div className="Anpr">
      {console.log(activeBayGate)}
      <Header heading="ANPR" />
      <Menu />
      <div className="anpr">
        <div className="baygates">
          {sites.map((site, index) => (
            <BayGatesButtons
              id={"Baygate-" + index}
              bg_name={site}
              isActive={site === activeBayGate}
              onClick={() => {
                setactiveBayGate(site);
                setCurrentPage(1);
                if (site === "Vehicle Entry / Exit") {
                  setdataToDisplay(data1);
                } else if (site === "Bay Activity") {
                  setdataToDisplay(data);
                }
              }}
            />
          ))}
        </div>

        {dataToDisplay && activeBayGate === "Bay Activity" ? (
          <div className="anpr-table">
            <Table
              columnNames={bayColumnNames}
              data={dataToDisplay.slice(
                currentPage * dataPerPage - dataPerPage,
                currentPage * dataPerPage
              )}
              offset={currentPage * dataPerPage - dataPerPage}
            ></Table>

            <div className="anpr-pagination">
              <Pagination
                currentPage={currentPage}
                lastPage={Math.ceil(dataToDisplay.length / dataPerPage)}
                nextPage={() => pagination("increment")}
                prevPage={() => pagination("decrement")}
              />
            </div>
          </div>
        ) : activeBayGate === "Vehicle Entry / Exit" ? (
          <div className="anpr-table anpr-table1">
            <Table
              columnNames={vehColumnNames1}
              data={dataToDisplay.slice(
                currentPage * dataPerPage - dataPerPage,
                currentPage * dataPerPage
              )}
              offset={currentPage * dataPerPage - dataPerPage}
            ></Table>

            <div className="anpr-pagination">
              <Pagination
                currentPage={currentPage}
                lastPage={Math.ceil(dataToDisplay.length / dataPerPage)}
                nextPage={() => pagination("increment")}
                prevPage={() => pagination("decrement")}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
