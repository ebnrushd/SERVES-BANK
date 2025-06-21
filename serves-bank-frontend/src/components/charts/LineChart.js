import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ data, options, ariaLabel }) => {
  const chartOptions = {
    ...options,
    plugins: {
      ...options?.plugins,
      title: {
        ...options?.plugins?.title,
        display: true, // Ensure title is always displayed if provided for context
        text: options?.plugins?.title?.text || ariaLabel || 'Line chart', // Use ariaLabel as fallback title
      },
    },
  };
  return <Line data={data} options={chartOptions} aria-label={ariaLabel} role="img"/>;
  // Note: 'aria-label' on canvas might not be perfectly read by all screen readers.
  // Consider a wrapper div with aria-label or off-screen text if issues persist.
  // For now, Chart.js's own accessibility features with title should help.
};

export default LineChart;
