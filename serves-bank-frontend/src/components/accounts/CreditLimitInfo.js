import React from 'react';
import styles from '../../styles/CreditLimitInfo.module.css';

const CreditLimitInfo = ({ currentBalance, creditLimit, availableCredit, currency }) => {
  return (
    <div className={styles.creditLimitInfoContainer}>
      <h3>Credit Limit Information</h3>
      <p>Current Balance: {currency} {currentBalance?.toFixed(2)}</p>
      <p>Credit Limit: {currency} {creditLimit?.toFixed(2)}</p>
      <p>Available Credit: {currency} {availableCredit?.toFixed(2)}</p>
    </div>
  );
};

export default CreditLimitInfo;
