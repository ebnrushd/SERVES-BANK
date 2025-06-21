import React from 'react';
import DepositForm from '../../components/transactions/DepositForm';
import styles from '../../styles/TransactionPage.module.css'; // Optional

const DepositsPage = () => {
  return (
    <div className={styles.transactionPageContainer}>
      <h1>Make a Deposit</h1>
      <DepositForm />
      <div className={styles.additionalInfo}>
        <h2>Deposit Information</h2>
        <p>Standard deposit limits apply. Please refer to our terms and conditions.</p>
        <p>Mobile check deposits are typically processed within 1-2 business days.</p>
      </div>
    </div>
  );
};

export default DepositsPage;
