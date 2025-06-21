import React from 'react';
import OverdraftSettings from '../../components/features/OverdraftSettings';
import styles from '../../styles/FeaturePage.module.css';

const OverdraftProtectionPage = () => {
  const mockSettings = {
    status: 'Opt-In',
    linkedAccount: 'Savings Account (****1234)',
    limit: 500,
    fee: 35
  };
  return (
    <div className={styles.featurePageContainer}>
      <h1>Overdraft Protection</h1>
      <div className={styles.settingsSection}>
        <OverdraftSettings {...mockSettings} />
      </div>
      <div className={styles.historySection}>
        <h2>Overdraft Usage History</h2>
        <p>No overdrafts in the last 6 months.</p>
        {/* Placeholder for actual history list */}
      </div>
    </div>
  );
};
export default OverdraftProtectionPage;
