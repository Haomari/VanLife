import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register necessary chart elements and scales
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

// Sample income data
const incomeHostData = [
  { month: "January", amount: 4 },
  { month: "August", amount: 1.4 },
  { month: "September", amount: 3 },
  { month: "October", amount: 2.7 },
  { month: "November", amount: 1.5 },
  { month: "December", amount: 0.5 },
];

// Configuration options for the chart
export const options = {
  // responsive: true,
  layout: {
    padding: {
      bottom: 0,
    },
  },
  plugins: {
    legend: {
      position: "top",
      callback: function (value) {
        if (value === 0) {
          return "$" + value;
        } else {
          return "$" + value + "k";
        }
      },
    },
  },
  scales: {
    y: {
      suggestedMin: 1,
      suggestedMax: 5,
      lineWidth: 7,
      grid: {
        BorderDash: [20, 20],
        tickLength: 0,
        color: "#B9B9B9",
        drawTicks: false,
        lineWidth: 1.4,
      },
      ticks: {
        backdropPadding: 43,
        stepSize: 1,
        padding: 0,
        callback: function (value) {
          if (value === 0) {
            return "$" + value;
          } else {
            return "$" + value + "k";
          }
        },
      },
      border: {
        dash: [10, 10],
        display: false,
      },
    },
    x: {
      lineWidth: 7,
      grid: {
        display: false,
        drawTicks: false,
        color: "red",
        borderColor: "grey",
      },
      border: {
        display: false,
      },
      ticks: {
        padding: 0,
      },
    },
  },
};

// Data for the chart
export const data = {
  labels: incomeHostData.map((item) => [item.month.slice(0, 2)]),
  datasets: [
    {
      label: "Profit",
      data: incomeHostData.map((item) => item.amount),
      backgroundColor: [
        "#FFEAD0",
        "#FFEAD0",
        "#FFEAD0",
        "#FFEAD0",
        "#FF8C38",
        "#FF8C38",
      ],
      maxBarThickness: 60,
      borderRadius: {
        topRight: 4,
        topLeft: 4,
      },
      barPercentage: 1,
      categoryPercentage: 0.5,
    },
  ],
};

export default function HostDashboard() {
  return (
    <Bar options={options} data={data} />
  );
}
