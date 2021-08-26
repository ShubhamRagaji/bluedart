import React from "react";
import DashboardCard from "../../components/DashboardCards/DashboardCard";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import "./dashboard.scss";
import { card_details } from "../../data";
import { Bar, Doughnut } from "react-chartjs-2";

const card = card_details;

export default function Dashboard() {
  //Bar Graph
  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "Vehicle In",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "#d82b23",
      },
      {
        label: "Vehicle Out",
        data: [2, 3, 20, 5, 1, 4],
        backgroundColor: "darkblue",
      },
    ],
  };

  const options = {
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

  //Doghnut Graph
  const data2 = {
    labels: ["Red", "Blue"],
    datasets: [
      {
        label: "# of Votes",
        data: [16, 19],
        backgroundColor: [
          // "rgba(255, 99, 132, 1)",
          // "rgba(54, 162, 235, 1)",
          // 'rgba(255, 206, 86, 1)',
          "rgba(75, 192, 192, 0.8)",
          // 'rgba(153, 102, 255, 1)',
          "rgba(255, 159, 64, 0.8)",
        ],
        borderColor: [
          // "rgba(255, 99, 132, 1)",
          // "rgba(54, 162, 235, 1)",
          // 'rgba(255, 206, 86, 1)',
          "rgba(75, 192, 192, 1)",
          // 'rgba(153, 102, 255, 1)',
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  //Horizontal
  const data3 = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options3 = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Chart.js Horizontal Bar Chart",
      },
    },
  };

  //Crazy Graph
  const rand = () => Math.floor(Math.random() * 255);

  const crazyData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        type: "line",
        label: "Dataset 1",
        borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
        borderWidth: 2,
        fill: false,
        data: [0.6, 0.2, 0.6, 0.8, 1, 0.5, 0.8],
      },
      {
        type: "bar",
        label: "Dataset 2",
        backgroundColor: "#447d95",
        data: [0.6, 0.2, 0.6, 0.8, 1, 0.5, 0.8],
        borderColor: "white",
        borderWidth: 2,
      },
      {
        type: "bar",
        label: "Dataset 3",
        backgroundColor: "#862952",
        data: [0.6, 0.2, 0.6, 0.8, 1, 0.5, 0.8],
      },
    ],
  };

  const options4 = {
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
            />
          ))}
        </div>

        <div className="Graphs">
          <div className="barGraph">
            <p>Bar</p>
            <Bar data={data} options={options} />
          </div>

          <div className="DoughnutGraph">
            <p>Doughnut</p>
            <Doughnut data={data2} />
          </div>
          <div className="HorizontalGraph">
            <p>HorizontalGraph</p>
            <Bar data={data3} options={options3} />
          </div>
          <div className="CrazyGraph">
            <p>Crazy Graph</p>
            <Bar height={400} width={950} data={crazyData} options={options4} />
          </div>
        </div>
      </div>
    </div>
  );
}
