import React from 'react';
import styles from '../../styles/InterestInfo.module.css';

const InterestInfo = ({ interestRate, nextPaymentDate, accruedInterest, apr }) => {
  return (
    <div className={styles.interestInfoContainer}>
      <h3>Interest Information</h3>
      {interestRate && <p>Interest Rate: {interestRate}</p>}
      {apr && <p>APR: {apr}</p>}
      {accruedInterest && <p>Accrued Interest: {accruedInterest?.toFixed(2)}</p>}
      {nextPaymentDate && <p>Next Interest Payment Date: {nextPaymentDate}</p>}
    </div>
  );
};

export default InterestInfo;
