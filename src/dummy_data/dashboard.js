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
    count: "43",
    name: "Total Count",
    img: vehicle,
    content:
      "Total count of Loading & Unloading vehicles from the collected videos of the DTDC warehouse",
  },

  {
    card_name: "Vehicle Out",
    count: "43",
    name: "Total Count",
    img: vehicle,
    content:
      "Total count of Loading & Unloading vehicles from the collected videos of the DTDC warehouse",
  },
  {
    card_name: "Loading Vehicle Counter",
    count: "27",
    name: "Total Count",
    img: loading,
    content:
      "Total count of Loading vehicles from the collected videos of the DTDC warehouse",
  },
  {
    card_name: "Unloading Vehicle Counter",
    count: "16",
    name: "Total Count",
    img: unloading,
    content:
      "Total count of Unloading vehicles from the collected videos of the DTDC warehouse",
  },
  {
    card_name: "Number Plate Recognized",
    count: "18",
    name: "Total Count",
    img: np,
    content:
      "Total count of correctly recognized vehicle number plates using ANPR algorithm",
  },
  {
    card_name: "Avg Vehicle Per Hour",
    count: "2",
    name: "Total Count",
    img: vehicle1,
    content: "Average count of vehicles visiting per hour",
  },
  {
    card_name: "Total Cameras Connected",
    count: "98",
    name: "Total Count",
    img: camera,
    content: "Total count of active cameras at DTDC warehouse",
  },
];

export const bar_graph_data = {
  labels: [
    "16-08-2021",
    "17-08-2021",
    "18-08-2021",
    "19-08-2021",
    "20-08-2021",
  ],
  datasets: [
    {
      label: "Vehicle In",
      data: [0, 15, 26, 21, 0],
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
      data: [98, 1],
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
      data: [0, 11, 12],

      backgroundColor: [
        "rgba(0, 0, 0, 0)",
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
  labels: ["11-08-2021", "15-08-2021", "24-08-2021"],
  datasets: [
    {
      type: "line",
      label: "Avg Activity Time",
      borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      borderWidth: 2,
      fill: false,
      data: [22.5, 30, 27.5],
    },
    {
      type: "bar",
      label: "Avg Loading Time in Min",
      backgroundColor: "rgba(216,43,35,0.8)",
      data: [35, 25, 40],
      borderColor: "white",
      borderWidth: 2,
    },
    {
      type: "bar",
      label: "Avg Unloading Time in Min",
      backgroundColor: "rgba(0,0,139,0.76)",
      data: [10, 35, 15],
    },
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
