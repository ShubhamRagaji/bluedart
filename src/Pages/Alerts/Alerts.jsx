import React, { useState } from "react";
import BayGatesButtons from "../../components/BayGatesButtons/BayGatesButtons";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Pagination from "../../components/pagination/Pagination";
import Table from "../../components/Tables/Table";
import { alerts } from "../../data";
import "./alerts.scss";

export default function Alerts() {
  const [activeBayGate, setactiveBayGate] = useState("All Alerts");
  const [activeAnalysis, setactiveAnalysis] = useState("Business Analysis");

  const sites = ["All Alerts", "BayGate 2", "BayGate 6", "BayGate 9"];
  const analysisBtns = ["Business Analysis", "Security Analysis"];

  const td = ["Sr. No", "a", "a", "a", "a", "Videos"];

  const data = alerts;

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
          <Table
            columnNames={td}
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
