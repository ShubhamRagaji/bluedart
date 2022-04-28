import vehicle from "../components/Images/icons/van.png";
import loading from "../components/Images/icons/loading.png";
import unloading from "../components/Images/icons/unloading.png";
import camera from "../components/Images/icons/anpr.png";
import np from "../components/Images/icons/np.png";
import vehicle1 from "../components/Images/icons/vehicle.png";
import pallete from "../components/Images/icons/pallete.png";
import forklift from "../components/Images/icons/fork.jpg";

export const dashboard_card_details = [
  {
    card_name: "Vehicle In",
    count: "6",
    name: "Total Count",
    img: vehicle,
    content: "Total count of Vehicles In",
  },

  {
    card_name: "Vehicle Out",
    count: "-",
    name: "Total Count",
    img: vehicle,
    content: "Total count of Vehicles Out",
  },
  {
    card_name: "Average Vehicle Waiting Time",
    count: "-",
    name: "Total Time",
    img: vehicle,
    content: "Total Average Time of all the vehicles",
  },
  {
    card_name: "Avg Vehicle Per Hour",
    count: "1",
    name: "Total Count",
    img: vehicle1,
    content: "Average count of vehicles visiting per hour",
  },
  {
    card_name: "Total Cameras Connected",
    count: "15",
    name: "Total Count",
    img: camera,
    content: "Total count of active cameras",
  },

  {
    card_name: "RAM Usage",
    count: "2.7GB / 4GB",
    name: "Usage",
    img: camera,
    content: "Total count of active cameras",
  },
  {
    card_name: "CPU Usage",
    count: "20 / 100%",
    name: "Usage",
    img: camera,
    content: "Total count of active cameras",
  },
  {
    card_name: "GPU Usage",
    count: "0/ 100%",
    name: "Usage",
    img: camera,
    content: "Total count of active cameras",
  },
];

export const bar_graph_data = {
  labels: [
    "13-04-2022",
    "12-04-2022",
    "12-04-2022",
    "05-04-2022",
    "31-03-2022",
    "23-03-2022",
  ],
  datasets: [
    {
      label: "Vehicle In",
      data: [1, 2, 1, 1, 1, 1],
      backgroundColor: "rgba(216,43,35,0.8)",
    },
    {
      label: "Vehicle Out",
      data: [0, 0, 0, 0, 0],
      backgroundColor: "darkblue",
    },
  ],
};

export const doughnut_graph_data = {
  labels: ["Active", "Inactive"],
  datasets: [
    {
      label: "Active Cameras",
      data: [15, 0],
      backgroundColor: ["rgba(75, 192, 192, 0.8)", "rgba(255, 159, 64, 0.8)"],
      borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 159, 64, 1)"],
      borderWidth: 1,
    },
  ],
};

export const horizontal_graph_data = {
  labels: ["No Mask", "Pallete", "Forklifting"],
  datasets: [
    {
      label: "horizontal graph",
      data: [107, 73, 68],

      backgroundColor: [
        "rgba(75, 192, 192, 0.8)",
        "rgba(216,43,35,0.8)",
        "rgba(0,0,139,0.76)",
      ],
      borderColor: [
        "rgba(0, 0, 0, 0)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const rand = () => Math.floor(Math.random() * 255);

export const crazy_graph_data = {
  labels: ["16-03-2022", "15-03-2022"],
  datasets: [
    // {
    //   type: "line",
    //   label: "Avg Activity Time",
    //   borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
    //   borderWidth: 2,
    //   fill: false,
    //   data: [22.5, 30, 27.5],
    // },
    {
      type: "bar",
      label: "Avg Loading Time in Min",
      backgroundColor: "rgba(216,43,35,0.8)",
      data: [35, 26],
      borderColor: "white",
      borderWidth: 2,
    },
    {
      type: "bar",
      label: "Avg Unloading Time in Min",
      backgroundColor: "rgba(0,0,139,0.76)",
      data: [20, 36],
    },
  ],
};

export const bay_avgTime__data = {
  labels: [
    "Bay1",
    "Bay2",
    "Bay3",
    "Bay4",
    "Bay5",
    "Bay6",
    "Bay7",
    "Bay8",
    "Bay9",
    "Bay10",
    "Bay11",
    "Bay12",
    "Bay13",
    "Bay14",
    "Bay15",
  ],
  datasets: [
    // {
    //   type: "line",
    //   label: "Avg Activity Time",
    //   borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
    //   borderWidth: 2,
    //   fill: false,
    //   data: [22.5, 30, 27.5],
    // },
    {
      type: "bar",
      label: "Avg Idling Time in Min",
      backgroundColor: "rgba(216,43,35,0.8)",
      data: [26, 30, 20, 34, 24, 36, 20, 28, 38, 26, 30, 26, 38, 20, 30],
      borderColor: "white",
      borderWidth: 2,
    },
    // {
    //   type: "bar",
    //   label: "Avg Unloading Time in Min",
    //   backgroundColor: "rgba(0,0,139,0.76)",
    //   data: [10, 35, 15],
    // },
  ],
};

export const progressBar = [
  {
    name: "Mask",
    percent: "0%",
  },
  {
    name: "Palette ",
    percent: "96%",
  },

  {
    name: "Forklift",
    percent: "84%",
  },
];
