import React from 'react';
import styles from '../../styles/DoubleEntryStatus.module.css'; // Optional: Create if needed

const DoubleEntryStatus = () => {
  // In a real application, this would involve fetching and checking ledger balances.
  const isBalanced = true; // Placeholder
  const lastCheckTime = new Date().toLocaleString(); // Placeholder

  return (
    <div className={styles.statusContainer}>
      <h4>Double-Entry Ledger Status</h4>
      {isBalanced ? (
        <p style={{ color: 'green' }}>All ledgers are currently balanced. Last checked: {lastCheckTime}</p>
      ) : (
        <p style={{ color: 'red' }}>Discrepancy found in ledgers! Immediate attention required. Last checked: {lastCheckTime}</p>
      )}
      {/* Optionally, add a button to trigger a manual check or view detailed report */}
      {/* <button type="button">Verify Ledgers</button> */}
    </div>
  );
};

export default DoubleEntryStatus;
