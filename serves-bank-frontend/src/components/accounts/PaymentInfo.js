import React from 'react';
import styles from '../../styles/PaymentInfo.module.css';

const PaymentInfo = ({ nextDueDate, minimumPayment, lastStatementBalance, currency = "USD" }) => {
  return (
    <div className={styles.paymentInfoContainer}>
      <h3>Payment Information</h3>
      <p>Next Due Date: {nextDueDate}</p>
      <p>Minimum Payment: {currency} {minimumPayment?.toFixed(2)}</p>
      <p>Last Statement Balance: {currency} {lastStatementBalance?.toFixed(2)}</p>
    </div>
  );
};

export default PaymentInfo;
