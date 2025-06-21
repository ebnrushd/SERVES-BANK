import React from 'react';
import styles from '../../styles/AccountBalance.module.css';

const AccountBalance = ({ balance, availableBalance, currency }) => {
  return (
    <div className={styles.accountBalanceContainer}>
      <h3>Account Balance</h3>
      <p>Current Balance: {currency} {balance?.toFixed(2)}</p>
      <p>Available Balance: {currency} {availableBalance?.toFixed(2)}</p>
    </div>
  );
};

export default AccountBalance;
