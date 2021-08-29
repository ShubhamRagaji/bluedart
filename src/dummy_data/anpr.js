import mp4 from "../components/Images/icons/mp4.png";
import video1 from "../components/Videos/video1.mp4";
import video2 from "../components/Videos/video2.mp4";
import alert_png from "../components/Images/icons/jpg.png";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  console.log(images)
  return images;
}

const images = importAll(require.context('../components/Images/Anpr', false, /\.(png|jpe?g)$/));

export const anpr_data = [
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["08-44-52.849455.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["09-44-56.762890.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["09-45-27.101053.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["09-45-34.083128.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["09-45-44.781114.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["09-45-47.199411.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["09-46-05.710903.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["09-46-07.006331.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["09-46-43.552307.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["09-53-52.793178.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["10-24-08.062299.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["10-24-16.185000.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["10-25-14.644265.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["10-25-29.239350.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["10-25-41.879138.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["10-25-50.990025.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["10-26-11.280045.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["10-26-20.786257.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["15-20-15.758320.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["15-20-56.327480.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["15-21-09.489072.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["15-22-02.902603.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["15-22-51.245947.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["15-24-02.521280.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["15-24-22.233612.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["15-24-45.603409.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["15-24-59.704280.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["15-26-08.561263.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["15-27-15.012526.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["15-27-28.831883.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["15-29-35.804553.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["15-29-49.349048.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["15-30-01.659131.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["15-30-14.104621.jpg"]["default"]
    },
    {
      warehouse_location: "Delhi",
      camera_location: "Main Gate",
      vehicle_number: 1234567899,
      entry: "2021-08-19 08:44:52",
      exit: "2021-08-19 08:44:52",
      duration: "10",
      img: alert_png,
      img_url: images["15-30-39.176289.jpg"]["default"]
    },
  ];
  