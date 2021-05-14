import React, { useEffect, useState } from "react";
import { getStockData } from "../services/StockDataService";
import CustomTooltip from "./CustomTooltip";
import CustomAxisTick from "./CustomAxisTick";
import "./styles/Chart.css";
import {
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ selectedTimePeriod }) => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchStockData = () => {
      try {
        getStockData(selectedTimePeriod[0], selectedTimePeriod[1]).then(
          (jsonStockData) => setStockData(jsonStockData)
        );
      } catch (err) {
        console.log(err);
      }
    };
    fetchStockData();
  }, [selectedTimePeriod]);

  

  return (
    <div className="chart">
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={stockData}>
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#007cc7" stopOpacity={0.5} />
                <stop offset="90%" stopColor="#007cc7" stopOpacity={0.03} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="Close"
              stroke="#007cc7"
              fill="url(#color)"
            />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="Date"
              tick={CustomAxisTick}
              domain={["dataMin", "dataMax"]}
            />
            <YAxis
              type="number"
              orientation={"right"}
              domain={["dataMin", "dataMax"]}
              tickFormatter={(number) => `${number.toFixed(2)}`}
            />
            <Tooltip content={<CustomTooltip />} animationDuration={0} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
