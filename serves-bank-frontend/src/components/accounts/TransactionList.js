import React from 'react';
import styles from '../../styles/TransactionList.module.css';

const TransactionList = ({ transactions }) => {
  if (!transactions || transactions.length === 0) {
    return <p>No transactions to display.</p>;
  }

  return (
    <div className={styles.transactionListContainer}>
      {/* <h3>Recent Transactions</h3> */}
      <table className={styles.transactionTable}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td className={transaction.type === 'Credit' ? styles.credit : styles.debit}>
                {transaction.amount?.toFixed(2)}
              </td>
              <td>{transaction.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
