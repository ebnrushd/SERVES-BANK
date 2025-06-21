import React from 'react';
import styles from '../../styles/FeeSchedule.module.css';

const FeeSchedule = ({ fees }) => {
  if (!fees || fees.length === 0) {
    return <p>Fee information is currently unavailable.</p>;
  }

  return (
    <table className={styles.feeTable}>
      <thead>
        <tr>
          <th>Fee Name</th>
          <th>Amount</th>
          <th>Frequency</th>
          <th>Conditions/Notes</th>
        </tr>
      </thead>
      <tbody>
        {fees.map((fee) => (
          <tr key={fee.id}>
            <td>{fee.feeName}</td>
            <td>{fee.currency} {fee.amount?.toFixed(2)}</td>
            <td>{fee.frequency}</td>
            <td>{fee.conditions}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FeeSchedule;
