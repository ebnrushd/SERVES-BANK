import React from 'react';
import TransferForm from '../../components/transactions/TransferForm';
import styles from '../../styles/TransactionPage.module.css'; // Optional

const TransfersPage = () => {
  return (
    <div className={styles.transactionPageContainer}>
      <h1>Make a Transfer</h1>
      <TransferForm />
      <div className={styles.additionalInfo}>
        <h2>Transfer Information</h2>
        <p>Review transfer limits and processing times. External transfers may take 2-3 business days.</p>
        <p>You can set up recurring transfers for automatic payments.</p>
      </div>
    </div>
  );
};

export default TransfersPage;
