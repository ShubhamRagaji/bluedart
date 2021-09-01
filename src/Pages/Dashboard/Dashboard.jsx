import React, { useEffect, useState } from "react";
import DashboardCard from "../../components/DashboardCards/DashboardCard";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import "./dashboard.scss";
import {
  dashboard_card_details,
  bar_graph_data,
  doughnut_graph_data,
  horizontal_graph_data,
  crazy_graph_data,
  progressBar,
} from "../../dummy_data/dashboard";
import { Bar, Doughnut } from "react-chartjs-2";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import information from "../../components/Images/icons/information.png";
import ReactTooltip from "react-tooltip";

const card = dashboard_card_details;
const barGraphData = bar_graph_data;
const doughnutGraphData = doughnut_graph_data;
const horizontalGraphData = horizontal_graph_data;
const crazyGraphData = crazy_graph_data;

export default function Dashboard() {
  const [progressedData, setprogressedData] = useState(progressBar);

  const setBg = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  useEffect(() => {
    const newArr = progressBar.map((v) => ({ ...v, backgroundColor: setBg() }));
    setprogressedData(newArr);
  }, []);

  const barGraphOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const horizontalGraphOptions = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const crazyGraphOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="Dashboard">
      <Header heading="Dashboard" />
      <Menu />
      <div className="dash">
        <div className="dashboard">
          {card.map((detail) => (
            <DashboardCard
              card_name={detail.card_name}
              count={detail.count}
              img={detail.img}
              total={detail.name}
              content={detail.content}
            />
          ))}
        </div>

        <div className="Graphs">
		{/* <ReactTooltip
          place="right"
          type="info"
          effect="solid"
		  className="ttp"
        /> */}
          <div className="barGraph">
            <p>Vehicle In & Out</p>
            <Bar data={barGraphData} options={barGraphOptions} />
            <img
              src={information}
              alt="information"
              className="information vehInOut"
              data-tip="Per day calculations of vehicle In and Out"
            />
          </div>

          <div className="DoughnutGraph">
            <p>Active-Inactive Cameras</p>
            <Doughnut data={doughnutGraphData} />
            <img
              src={information}
              alt="information"
              className="information activeInactiveCam"
			  data-tip="Total count of active and inactive cameras"
            />
          </div>
          <div className="HorizontalGraph">
            <p>Total Alerts</p>

            <Bar data={horizontalGraphData} options={horizontalGraphOptions} />
            <img
              src={information}
              alt="information"
              className="information totalAlerts"
              data-tip="Total count of alerts for specified usecase"
            />
          </div>
          <div className="CrazyGraph">
            <p>Daily Activity Analyzer</p>
            <Bar
              height={400}
              width={950}
              data={crazyGraphData}
              options={crazyGraphOptions}
            />
            <img
              src={information}
              alt="information"
              className="information actAnalyzer"
              data-tip="Per day calculations of Average Loading, Unloading and Activity time"
            />
          </div>

          <div className="rangeBar">
            <p className="rangeBar_Header">Guideline Compliance Score</p>
            <hr />

            {progressedData.map((progressBar, index) => (
              <ProgressBar
                name={progressBar.name}
                percentage={progressBar.percent}
                backgroundColor={progressBar.backgroundColor}
                id={"bar-" + index}
              />
            ))}
            <img
              src={information}
              alt="information"
              className="information progressBar"
              data-tip="Average percentage of the activity followed by the workers"
            />
          </div>

          <div className="info"></div>
        </div>
      </div>
    </div>
  );
}
