import React from 'react';
import ACHForm from '../../components/transactions/ACHForm';
import styles from '../../styles/TransactionPage.module.css'; // Optional

const ACHTransactionsPage = () => {
  return (
    <div className={styles.transactionPageContainer}>
      <h1>ACH Transaction</h1>
      <ACHForm />
      <div className={styles.additionalInfo}>
        <h2>ACH Information</h2>
        <p>ACH transactions (e.g., direct deposits, bill payments) can take 1-3 business days to process.</p>
        <p>Ensure account and routing numbers are correct to avoid delays or returns.</p>
      </div>
    </div>
  );
};

export default ACHTransactionsPage;
