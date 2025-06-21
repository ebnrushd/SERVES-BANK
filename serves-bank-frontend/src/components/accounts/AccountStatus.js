import React from 'react';
import styles from '../../styles/AccountStatus.module.css';

const AccountStatus = ({ status }) => {
  return (
    <div className={styles.accountStatusContainer}>
      <p>Account Status: <strong>{status}</strong></p>
    </div>
  );
};

export default AccountStatus;
