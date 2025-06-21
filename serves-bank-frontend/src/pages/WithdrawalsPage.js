import React from 'react';
import WithdrawalForm from '../../components/transactions/WithdrawalForm';
import styles from '../../styles/TransactionPage.module.css'; // Optional

const WithdrawalsPage = () => {
  return (
    <div className={styles.transactionPageContainer}>
      <h1>Make a Withdrawal</h1>
      <WithdrawalForm />
      <div className={styles.additionalInfo}>
        <h2>Withdrawal Information</h2>
        <p>Daily withdrawal limits apply. Check your account details for more information.</p>
        <p>Find a fee-free ATM using our ATM Locator tool.</p>
      </div>
    </div>
  );
};

export default WithdrawalsPage;
