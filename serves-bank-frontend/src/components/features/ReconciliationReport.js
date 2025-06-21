import React from 'react';
// import styles from '../../styles/ReconciliationReport.module.css';

const ReconciliationReport = ({ reportDate, status, summary }) => {
  // const statusStyle = status === 'Balanced' ? styles.balanced : styles.discrepancy;
  return (
    <div /*className={styles.reportContainer}*/>
      <h4>Reconciliation Report - {reportDate}</h4>
      <p>Status: <strong /*className={statusStyle}*/>{status}</strong></p>
      <p>Summary: {summary}</p>
      {status !== 'Balanced' && (
        <button type="button" /*className={styles.investigateButton}*/>
          View Details & Investigate
        </button>
      )}
    </div>
  );
};

export default ReconciliationReport;
