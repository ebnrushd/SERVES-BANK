import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const PieChart = ({ data, options, ariaLabel }) => {
  const chartOptions = {
    ...options,
    plugins: {
      ...options?.plugins,
      title: {
        ...options?.plugins?.title,
        display: true,
        text: options?.plugins?.title?.text || ariaLabel || 'Pie chart',
      },
    },
  };
  return <Pie data={data} options={chartOptions} aria-label={ariaLabel} role="img"/>;
};

export default PieChart;
