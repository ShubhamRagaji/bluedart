import alert_png from "../components/Images/icons/jpg.png";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  console.log(images);
  return images;
}

const images = importAll(
  require.context("../components/Images/Anpr", false, /\.(png|jpe?g)$/)
);

export const bay_data = [
  {
    veh_arr_TS: "mh03ar2435".toUpperCase(),
    veh_dep_TS: "2021-08-19 08:44:52",
    act_start: "-",
    act_end: "Van",
    no_of_emp: "In",
    fork_used: "-",
    pal_used: "Yes",
  },
  {
    veh_arr_TS: "mh47x4124".toUpperCase(),
    veh_dep_TS: "2021-08-19 09:44:56",
    act_start: "-",
    act_end: "Van",
    no_of_emp: "In",
    fork_used: "-",
    pal_used: "Yes",
  },
  {
    veh_arr_TS: "hh47y2981".toUpperCase(),
    veh_dep_TS: "2021-08-19 09:45:27",
    act_start: "-",
    act_end: "Sedan",
    no_of_emp: "In",
    fork_used: "-",
    pal_used: "Yes",
  },
  {
    veh_arr_TS: "mh10bf1747".toUpperCase(),
    veh_dep_TS: "2021-08-19 09:45:34",
    act_start: "-",
    act_end: "Sedan",
    no_of_emp: "In",
    fork_used: "-",
    pal_used: "Yes",
  },
  {
    veh_arr_TS: "mh4hm3053".toUpperCase(),
    veh_dep_TS: "2021-08-19 09:45:44",
    act_start: "-",
    act_end: "Big Truck",
    no_of_emp: "In",
    fork_used: "-",
    pal_used: "Yes",
  },
  {
    veh_arr_TS: "mh44iq3053".toUpperCase(),
    veh_dep_TS: "2021-08-19 09:45:47",
    act_start: "-",
    act_end: "Big Truck",
    no_of_emp: "In",
    fork_used: "-",
    pal_used: "Yes",
  },
  {
    veh_arr_TS: "mh01lf1650".toUpperCase(),
    veh_dep_TS: "2021-08-19 09:46:05",
    act_start: "-",
    act_end: "Sedan",
    no_of_emp: "In",
    fork_used: "-",
    pal_used: "Yes",
  },
  {
    veh_arr_TS: "mh01gv1869".toUpperCase(),
    veh_dep_TS: "2021-08-19 09:46:07",
    act_start: "-",
    act_end: "Sedan",
    no_of_emp: "In",
    fork_used: "-",
    pal_used: "Yes",
  },
  {
    veh_arr_TS: "mh04ge7821".toUpperCase(),
    veh_dep_TS: "2021-08-19 09:46:43",
    act_start: "-",
    act_end: "Van",
    no_of_emp: "In",
    fork_used: "-",
    pal_used: "Yes",
  },
  {
    veh_arr_TS: "mh02ecq102".toUpperCase(),
    veh_dep_TS: "2021-08-19 09:53:52",
    act_start: "-",
    act_end: "Sedan",
    no_of_emp: "In",
    fork_used: "-",
    pal_used: "Yes",
  },
  {
    veh_arr_TS: "mh04gr7322".toUpperCase(),
    veh_dep_TS: "2021-08-19 10:24:08",
    act_start: "-",
    act_end: "Van",
    no_of_emp: "In",
    fork_used: "-",
    pal_used: "Yes",
  },
  {
    veh_arr_TS: "mh43f8763".toUpperCase(),
    veh_dep_TS: "2021-08-19 10:24:16",
    act_start: "-",
    act_end: "Sedan",
    no_of_emp: "In",
    fork_used: "-",
    pal_used: "Yes",
  },
  {
    veh_arr_TS: "mh42y2381".toUpperCase(),
    veh_dep_TS: "2021-08-19 10:25:14",
    act_start: "-",
    act_end: "Unknown",
    no_of_emp: "In",
    fork_used: "-",
    pal_used: "Yes",
  },
  {
    veh_arr_TS: "mh462302".toUpperCase(),
    veh_dep_TS: "2021-08-19 10:25:29",
    act_start: "-",
    act_end: "Sedan",
    no_of_emp: "In",
    fork_used: "-",
    pal_used: "Yes",
  },
  {
    veh_arr_TS: "mh01cw1434".toUpperCase(),
    veh_dep_TS: "2021-08-19 10:25:41",
    act_start: "-",
    act_end: "Sedan",
    no_of_emp: "In",
    fork_used: "-",
    pal_used: "Yes",
  },
  {
    veh_arr_TS: "mh01wd3053".toUpperCase(),
    veh_dep_TS: "2021-08-19 10:25:50",
    act_start: "-",
    act_end: "Big truck",
    no_of_emp: "In",
    fork_used: "-",
    pal_used: "Yes",
  },
  {
    veh_arr_TS: "wh10u21747".toUpperCase(),
    veh_dep_TS: "2021-08-19 10:26:11",
    act_start: "-",
    act_end: "Sedan",
    no_of_emp: "In",
    fork_used: "-",
    pal_used: "Yes",
  },
  {
    veh_arr_TS: "mh43ad5010".toUpperCase(),
    veh_dep_TS: "2021-08-19 10:26:20",
    act_start: "-",
    act_end: "Sedan",
    no_of_emp: "In",
    fork_used: "-",
    pal_used: "Yes",
  },
];

export const veh_data = [
  {
    vehicle_num: "-",
    vehicle_in_dt: "2021-08-19 08:44:52",
    vehicle_out_dt: "2021-08-19 08:44:52",
    media: alert_png,
    img_url: images["10-25-29.239350.jpg"]["default"],
  },

  {
    vehicle_num: "-",
    vehicle_in_dt: "2021-08-19 08:44:52",
    vehicle_out_dt: "2021-08-19 08:44:52",
    media: alert_png,
    img_url: images["10-25-29.239350.jpg"]["default"],
  },

  {
    vehicle_num: "-",
    vehicle_in_dt: "2021-08-19 08:44:52",
    vehicle_out_dt: "2021-08-19 08:44:52",
    media: alert_png,
    img_url: images["10-25-29.239350.jpg"]["default"],
  },

  {
    vehicle_num: "-",
    vehicle_in_dt: "2021-08-19 08:44:52",
    vehicle_out_dt: "2021-08-19 08:44:52",
    media: alert_png,
    img_url: images["10-25-29.239350.jpg"]["default"],
  },

  {
    vehicle_num: "-",
    vehicle_in_dt: "2021-08-19 08:44:52",
    vehicle_out_dt: "2021-08-19 08:44:52",
    media: alert_png,
    img_url: images["10-25-29.239350.jpg"]["default"],
  },

  {
    vehicle_num: "-",
    vehicle_in_dt: "2021-08-19 08:44:52",
    vehicle_out_dt: "2021-08-19 08:44:52",
    media: alert_png,
    img_url: images["10-25-29.239350.jpg"]["default"],
  },
  {
    vehicle_num: "-",
    vehicle_in_dt: "2021-08-19 08:44:52",
    vehicle_out_dt: "2021-08-19 08:44:52",
    media: alert_png,
    img_url: images["10-25-29.239350.jpg"]["default"],
  },
  {
    vehicle_num: "-",
    vehicle_in_dt: "2021-08-19 08:44:52",
    vehicle_out_dt: "2021-08-19 08:44:52",
    media: alert_png,
    img_url: images["10-25-29.239350.jpg"]["default"],
  },
  {
    vehicle_num: "-",
    vehicle_in_dt: "2021-08-19 08:44:52",
    vehicle_out_dt: "2021-08-19 08:44:52",
    media: alert_png,
    img_url: images["10-25-29.239350.jpg"]["default"],
  },
  {
    vehicle_num: "-",
    vehicle_in_dt: "2021-08-19 08:44:52",
    vehicle_out_dt: "2021-08-19 08:44:52",
    media: alert_png,
    img_url: images["10-25-29.239350.jpg"]["default"],
  },
];
