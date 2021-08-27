import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import "./anpr.scss";
import { anpr } from "../../data";
import { anpr_data } from "../../dummy_data/anpr";
import BayGatesButtons from "../../components/BayGatesButtons/BayGatesButtons";
import Table from "../../components/Tables/Table";
import Pagination from "../../components/pagination/Pagination";

export default function Anpr() {
  const [activeBayGate, setactiveBayGate] = useState("All Alerts");
  const [activeAnalysis, setactiveAnalysis] = useState("Business Analysis");

  const sites = ["All Alerts", "BayGate 2", "BayGate 6", "BayGate 9"];
  const analysisBtns = ["Business Analysis", "Security Analysis"];

  const columnNames = [
    "Sr No",
    "Warehouse Location",
    "Camera Location",
    "Vehicle Number",
    "Entry  Date & Time",
    "Exit  Date & Time",
    "Total Duration",
    "Media",
  ];

  const data = anpr_data;

  //Pagination
  const dataPerPage = 10;
  const totalPages = Math.round(data.length / dataPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const pagination = (type) => {
    if (type === "increment") {
      setCurrentPage((page) => page + 1);
    } else {
      setCurrentPage((page) => page - 1);
    }
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
          <Table
            columnNames={columnNames}
            data={data.slice(
              currentPage * dataPerPage - dataPerPage,
              currentPage * dataPerPage
            )}
            offset={currentPage * dataPerPage - dataPerPage}
          ></Table>

          <Pagination
            currentPage={currentPage}
            lastPage={totalPages}
            nextPage={() => pagination("increment")}
            prevPage={() => pagination("decrement")}
          />
        </div>
      </div>
    </div>
  );
}
