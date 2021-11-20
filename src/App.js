import { Line } from "react-chartjs-2";
import Details from "./data/A1.json"

//for mi_band
let min_band  = [];
Details.forEach(item => {
    min_band.push(item.min_band);
});

//for max_band
let max_band  = [];
Details.forEach(item => {
    max_band.push(item.max_band);
});

//for forcasted
let forcasted  = [];
Details.forEach(item => {
    forcasted.push((item.min_band + item.max_band)/2);
});

//for timeStamp
let timestamp = [];
Details.forEach(item => {
  timestamp.push(item.timestamp);
});


const data = {
  labels: timestamp,
  datasets: [
    {
      label: "Max_Band",
      data: max_band,
      fill: false,
      borderColor: "#000000",
      border: "0.5px",
      outerWidth: "20px"
    },
    {
      label: "Min_Band",
      data: min_band,
      fill: false,
      borderColor: "#000000"
    },
    {
        label: "Original_Value",
        data: forcasted,
        fill: false,
        borderColor: "#000092"
    }
  ]
};

export default function App() {
  return (
    <div className="App">
     <Line data={data} />
    </div>
  );
}