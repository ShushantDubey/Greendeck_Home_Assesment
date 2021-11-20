import {min_band, max_band, forcasted, timestamp} from "./utils"
export const data = {
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
