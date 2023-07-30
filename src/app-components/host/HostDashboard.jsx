import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const incomeHostData = [
  { month: "Ju", amount: 4 },
  { month: "Au", amount: 1.4 },
  { month: "Se", amount: 3 },
  { month: "Oc", amount: 2.7 },
  { month: "No", amount: 1.5 },
  { month: "De", amount: 0.5 },
];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
  scales: {
    y: {
      suggestedMin: 1,
      suggestedMax: 5,
      border: {
        dash: [10, 10],
        display: false,
      },
      grid: {
        BorderDash: [20, 20],
        color: "#B9B9B9",
        // borderColor: 'grey',
				drawTicks: false,
      },
    },
    x: {
      grid: {
        display: false,
				drawTicks: false,
        color: "red",
        borderColor: "grey",
      },
      border: {
        display: false,
      },
    },
  },
};

export const data = {
  labels: incomeHostData.map((item) => [item.month]),
  datasets: [
    {
      label: "Dataset 1",
      data: incomeHostData.map((item) => item.amount),
      backgroundColor: "#FFEAD0",
      // barThickness: 20,
      maxBarThickness: 60,
      borderRadius: {
        topRight: 3,
        topLeft: 3,
      },
      barPercentage: 1,
      categoryPercentage: 0.5,
    },
  ],
};

export default function HostDashboard() {
  return (
    // <div className="dashboard-host__body"></div>
    <Bar options={options} data={data} />
  );
}
