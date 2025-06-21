import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data, options, ariaLabel }) => {
  const chartOptions = {
    ...options,
    plugins: {
      ...options?.plugins,
      title: {
        ...options?.plugins?.title,
        display: true,
        text: options?.plugins?.title?.text || ariaLabel || 'Bar chart',
      },
    },
  };
  return <Bar data={data} options={chartOptions} aria-label={ariaLabel} role="img"/>;
};

export default BarChart;
