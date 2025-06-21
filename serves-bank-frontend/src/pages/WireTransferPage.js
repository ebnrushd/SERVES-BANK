import React from 'react';
import WireTransferForm from '../../components/transactions/WireTransferForm';
import styles from '../../styles/TransactionPage.module.css'; // Optional

const WireTransferPage = () => {
  return (
    <div className={styles.transactionPageContainer}>
      <h1>Send a Wire Transfer</h1>
      <WireTransferForm />
      <div className={styles.additionalInfo}>
        <h2>Wire Transfer Information</h2>
        <p>Wire transfers are typically processed the same business day if submitted before the cut-off time.</p>
        <p>Fees apply for domestic and international wire transfers. Please review our fee schedule.</p>
      </div>
    </div>
  );
};

export default WireTransferPage;
