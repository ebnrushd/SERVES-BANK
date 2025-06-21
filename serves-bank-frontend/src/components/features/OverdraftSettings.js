import React from 'react';
import styles from '../../styles/OverdraftSettings.module.css';

const OverdraftSettings = ({ status, linkedAccount, limit, fee }) => {
  return (
    <div className={styles.settingsContainer}>
      <h3>Overdraft Protection Status: <span className={status === 'Opt-In' ? styles.optIn : styles.optOut}>{status}</span></h3>
      {status === 'Opt-In' && (
        <>
          <p><strong>Linked Account:</strong> {linkedAccount || 'N/A'}</p>
          <p><strong>Overdraft Limit:</strong> ${limit?.toFixed(2) || 'N/A'}</p>
          <p><strong>Overdraft Fee:</strong> ${fee?.toFixed(2) || 'N/A'} per occurrence</p>
        </>
      )}
      {/* Placeholder for form elements to change settings */}
      <div className={styles.actions}>
        <button type="button">
          {status === 'Opt-In' ? 'Opt-Out of Overdraft Protection' : 'Opt-In to Overdraft Protection'}
        </button>
        {status === 'Opt-In' && <button type="button">Modify Settings</button>}
      </div>
      <p className={styles.disclaimer}>
        Opting out may result in transactions being declined if you do not have sufficient funds.
        Fees and terms are subject to change.
      </p>
    </div>
  );
};

export default OverdraftSettings;
