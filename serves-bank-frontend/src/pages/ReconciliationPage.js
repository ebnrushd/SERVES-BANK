import React from 'react';
import ReconciliationReport from '../../components/features/ReconciliationReport';
import styles from '../../styles/FeaturePage.module.css';

const ReconciliationPage = () => {
  const mockReports = [
    { id: 1, reportDate: '2023-10-27', status: 'Balanced', summary: 'All internal ledgers match corresponding bank statements and transaction logs for the period ending 2023-10-26.' },
    { id: 2, reportDate: '2023-09-30', status: 'Balanced', summary: 'Monthly reconciliation for September 2023 completed successfully. No discrepancies noted.' },
    { id: 3, reportDate: '2023-08-31', status: 'Discrepancies Found', summary: 'Discrepancy of $50.23 found in Nostro account (EUR) reconciliation. Investigation initiated. Ticket #REC-0823-001' },
  ];
  return (
    <div className={styles.featurePageContainer}>
      <h1>Account Reconciliation</h1>
      <p className={styles.infoSection}>View reconciliation reports and status. This page is typically for internal/admin use to ensure financial integrity.</p>
      <div className={styles.listSection}>
        {mockReports.map(report => (
          <ReconciliationReport key={report.id} {...report} />
        ))}
      </div>
      <div className={styles.toolsSection}>
        <h3>Reconciliation Tools</h3>
        <button type="button">Run New Reconciliation</button>
        <button type="button">Upload Bank Statement</button>
        <button type="button">View Discrepancy Reports</button>
      </div>
    </div>
  );
};
export default ReconciliationPage;
