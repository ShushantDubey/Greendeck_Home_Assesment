import React from "react";
import "./style.css";
import {data} from "./data/constants"
import { Line } from "react-chartjs-2";

export default function App() {
  return (
    <div className="App">
      <Line data={data} />
    </div>
  );
}