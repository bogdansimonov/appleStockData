import React, { useState } from "react";
import ChartTabs from "./components/ChartTabs";
import Chart from "./components/Chart";
import "./App.css";

const App = () => {
  const [selectedTimePeriod, setSelectedTimePeriod] = useState([1, "Minutes"]);

  return (
    <div className="App">
      <h2>Apple Stock Data</h2>
      <ChartTabs setSelectedStockData={setSelectedTimePeriod} />
      <Chart selectedTimePeriod={selectedTimePeriod} />
    </div>
  );
};

export default App;
