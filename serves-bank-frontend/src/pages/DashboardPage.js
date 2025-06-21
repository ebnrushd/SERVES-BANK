import React from 'react';
import BalanceSummary from '../components/dashboard/BalanceSummary';
import RecentTransactions from '../components/dashboard/RecentTransactions';
import QuickActions from '../components/dashboard/QuickActions';
import AlertsNotifications from '../components/dashboard/AlertsNotifications';
import FinancialHealth from '../components/dashboard/FinancialHealth';
import styles from '../styles/DashboardPage.module.css';
import LineChart from '../components/charts/LineChart';
import PieChart from '../components/charts/PieChart';

// Mock data for Balance History
const balanceHistoryData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Account Balance (USD)',
      data: [3000, 3200, 2800, 3500, 3700, 4000, 3850, 4100, 4300, 4050, 4500, 4700],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};
const balanceHistoryOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Balance Over Last 12 Months' }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

// Mock data for Spending Categories
const spendingCategoriesData = {
  labels: ['Groceries', 'Utilities', 'Transport', 'Entertainment', 'Healthcare', 'Other'],
  datasets: [
    {
      label: 'Spending by Category (Last Month)',
      data: [350, 180, 120, 250, 90, 70],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
const spendingCategoriesOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'right' },
    title: { display: true, text: 'Spending by Category (Last Month)' },
  },
};


const DashboardPage = () => {
  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <section className={styles.widgetsContainer} aria-labelledby="dashboard-widgets-title">
        <h2 id="dashboard-widgets-title" className="visually-hidden">Dashboard Widgets</h2>
        <BalanceSummary />
        <RecentTransactions />
        <QuickActions />
        <AlertsNotifications />
        <FinancialHealth />
      </section>

      <section className={styles.chartsArea} aria-labelledby="dashboard-charts-title">
        <h2 id="dashboard-charts-title" className="visually-hidden">Financial Charts</h2>
        <div className={styles.chartContainer}>
          <LineChart data={balanceHistoryData} options={balanceHistoryOptions} ariaLabel="Line chart showing balance history over the last 12 months" />
        </div>
        <div className={styles.chartContainer}>
          <PieChart data={spendingCategoriesData} options={spendingCategoriesOptions} ariaLabel="Pie chart showing spending by category for the last month" />
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
