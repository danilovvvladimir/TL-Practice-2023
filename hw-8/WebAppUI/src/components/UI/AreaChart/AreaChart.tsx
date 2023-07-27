import { FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

interface ChartProps {
  dataSet: number[];
  labels: string[];
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        display: false,
      },
    },
  },
};

export const AreaChart: FC<ChartProps> = ({ dataSet, labels }) => {
  const data = {
    labels,
    datasets: [
      {
        data: dataSet,
        borderColor: "#3367d8",
        backgroundColor: "#93b5ff8b",
        fill: true,
      },
    ],
  };
  return <Line options={options} data={data} width="400px" height="200px" />;
};

export default AreaChart;
