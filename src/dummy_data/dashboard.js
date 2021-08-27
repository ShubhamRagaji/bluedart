import vehicle from "../components/Images/icons/van.png";
import loading from "../components/Images/icons/loading.png";
import unloading from "../components/Images/icons/unloading.png";
import delivery from "../components/Images/icons/delivery.png";
import camera from "../components/Images/icons/anpr.png";

export const dashboard_card_details = [
    {
      card_name: "Vehicle Counter",
      count: "62",
      img: vehicle,
    },
    {
      card_name: "Loding Vehicle Counter",
      count: "420",
      img: loading,
    },
    {
      card_name: "Unloading Vehicle Counter",
      count: "164",
      img: unloading,
    },
    {
      card_name: "Number Plate Recognized",
      count: "565",
      img: vehicle,
    },
    {
      card_name: "Avg Vehicle Per Hour",
      count: "9",
      img: delivery,
    },
    {
      card_name: "Total Cameras Connected",
      count: "658",
      img: camera,
    },
];

export const bar_graph_data = {
    labels: ["16-08-2021", "17-08-2021", "18-08-2021", "19-08-2021", "20-08-2021"],
    datasets: [
        {
            label: "Vehicle In",
            data: [0,15,26,21,0],
            backgroundColor: "#d82b23",
        },
        {
            label: "Vehicle Out",
            data: [0,0,0,0,0],
            backgroundColor: "darkblue",
        },
    ],

};

export const doughnut_graph_data = {
    labels: ["Active", "Inactive"],
    datasets: [
        {
            label: "Active Cameras",
            data: [19, 1],
            backgroundColor: [
                "rgba(75, 192, 192, 0.8)",
                "rgba(255, 159, 64, 0.8)",
            ],
            borderColor: [
                "rgba(75, 192, 192, 1)",
                "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
        },
    ],
};

export const horizontal_graph_data = {
    labels: ["No Mask", "Social Distancing", "Tresspassing", "Loitering", "Pallete & Forklifting"],
    datasets: [
      {
        label: "horizontal graph",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
}

const rand = () => Math.floor(Math.random() * 255);

export const crazy_graph_data = {
    labels: ["16-08-2021", "17-08-2021", "18-08-2021", "19-08-2021", "20-08-2021"],
    datasets: [
      {
        type: "line",
        label: "Avg Activity Time",
        borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
        borderWidth: 2,
        fill: false,
        data: [15, 17, 24, 18, 16],
      },
      {
        type: "bar",
        label: "Avg Loading Time",
        backgroundColor: "#447d95",
        data: [17, 19, 23, 20, 14],
        borderColor: "white",
        borderWidth: 2,
      },
      {
        type: "bar",
        label: "Avg Unloading Time",
        backgroundColor: "#862952",
        data: [13, 15, 25, 16, 17],
      },
    ],
  };

  export const progressBar = [{
    name:"Mask",
    percent:"65%"
  },
  {
    name:"Palette & Forklift",
    percent:"96%"
  },
  {
    name:"Social Distancing",
    percent:"88%"
  },
  {
    name:"MasLoiteringk",
    percent:"96%"
  },]