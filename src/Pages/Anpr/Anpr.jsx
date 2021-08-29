import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import "./anpr.scss";
import { anpr_data } from "../../dummy_data/anpr";
import BayGatesButtons from "../../components/BayGatesButtons/BayGatesButtons";
import Table from "../../components/Tables/Table";
import Pagination from "../../components/pagination/Pagination";

export default function Anpr() {
  const [activeBayGate, setactiveBayGate] = useState("All Reports");

  const sites = ["All Reports", "Main Gate", "BayGate 6", "BayGate 9"];

  const columnNames = [
    "Sr No",
    "Warehouse Location",
    "Camera Location",
    "Vehicle Number",
    "Entry  Date & Time",
    "Exit  Date & Time",
    "Total Duration",
    "Media"
  ];

  const data = anpr_data;
  const [dataToDisplay, setdataToDisplay] = useState(data);

  //Pagination
  const dataPerPage = 10;
  // const totalPages = Math.ceil(data.length / dataPerPage);
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
      <Header heading="ANPR" />
      <Menu />
      <div className="anpr">
        <div className="baygates">
          {sites.map((site) => (
            <BayGatesButtons
              bg_name={site}
              isActive={site === activeBayGate}
              onClick={() => {
                setactiveBayGate(site);
                setCurrentPage(1);
                if (site === "Main Gate") {
                  filteredData();
                } else {
                  setdataToDisplay(data);
                }
              }}
            />
          ))}
        </div>

        <div className="anpr-table">
          <Table
            columnNames={columnNames}
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
  );
}
