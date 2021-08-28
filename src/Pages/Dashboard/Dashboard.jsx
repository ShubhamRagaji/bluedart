import React, { useEffect, useState } from "react";
import DashboardCard from "../../components/DashboardCards/DashboardCard";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import "./dashboard.scss";
// import { progressBar } from "../../data";
import { dashboard_card_details, bar_graph_data, doughnut_graph_data, horizontal_graph_data, crazy_graph_data, progressBar } from "../../dummy_data/dashboard";
import { Bar, Doughnut } from "react-chartjs-2";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const card = dashboard_card_details;
const barGraphData = bar_graph_data;
const doughnutGraphData = doughnut_graph_data;
const horizontalGraphData = horizontal_graph_data;
const crazyGraphData = crazy_graph_data;

export default function Dashboard() {
	const [progressedData, setprogressedData] = useState(progressBar)

	const setBg = () => {
	return "#" + Math.floor(Math.random()*16777215).toString(16); 
	}

	useEffect(() => {
	const newArr = progressBar.map(v => ({...v, backgroundColor: setBg()}))
	setprogressedData(newArr)
	}, [])


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
				display: false
			}
			}
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
				/>
			))}
			</div>

			<div className="Graphs">
			<div className="barGraph">
				<p>Vehicle In & Out</p>
				<Bar data={barGraphData} options={barGraphOptions} />
			</div>

			<div className="DoughnutGraph">
				<p>Active-Inactive Cameras</p>
				<Doughnut data={doughnutGraphData} />
			</div>
			<div className="HorizontalGraph">
				<p>Total Alerts</p>
				<Bar data={horizontalGraphData} options={horizontalGraphOptions} />
			</div>
			<div className="CrazyGraph">
				<p>Daily Activity Analyzer</p>
				<Bar height={400} width={950} data={crazyGraphData} options={crazyGraphOptions} />
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
			</div>
			</div>
		</div>
		</div>
	);
}

