import React, { useState } from "react";
import "./styles/ChartTabs.css";

const ChartTabs = ({ setSelectedStockData }) => {
  const tabs = [
    { label: "1M", period: 1, precision: "Minutes" },
    { label: "5M", period: 5, precision: "Minutes" },
    { label: "1H", period: 1, precision: "Hours" },
    { label: "1W", period: 7*24, precision: "Hours" },
  ];

  const [selectedChartTab, setSelectedChartTab] = useState(0);

  const handleChartTabClicked = (selectedChartTab, index) => {
    setSelectedChartTab(index);
    setSelectedStockData(selectedChartTab);
  };

  return (
    <div className="tabs-container">
      {tabs.map(({ label, period, precision }, index) => (
        <button
          key={index}
          className={selectedChartTab === index ? "active" : "inactive"}
          onClick={() => handleChartTabClicked([period, precision], index)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default ChartTabs;
