import React from 'react';
import AccountBalance from '../../components/accounts/AccountBalance';
import TransactionList from '../../components/accounts/TransactionList';
import AccountStatus from '../../components/accounts/AccountStatus';
import OverdraftProtection from '../../components/accounts/OverdraftProtection'; // Example specific component
import styles from '../../styles/AccountPage.module.css';

const CheckingAccountPage = () => {
  const mockTransactions = [
    { id: 1, date: '2023-10-26', description: 'Paycheck Deposit', amount: 2200, type: 'Credit' },
    { id: 2, date: '2023-10-24', description: 'Grocery Store', amount: -75.50, type: 'Debit' },
  ];

  return (
    <div className={styles.accountPageContainer}>
      <h1>Checking Account</h1>
      <div className={styles.componentSection}>
        <AccountBalance balance={1500.00} availableBalance={1450.00} currency="USD" />
      </div>
      <div className={styles.componentSection}>
        <AccountStatus status="Active" />
      </div>
      <div className={styles.componentSection}>
        <OverdraftProtection status="Enabled" limit={500} />
      </div>
      <h2>Recent Transactions</h2>
      <div className={styles.componentSection}>
        <TransactionList transactions={mockTransactions} />
      </div>
      {/* Placeholder for other sections like:
          - Direct deposit information
          - Check ordering
          - Fee schedule
      */}
    </div>
  );
};

export default CheckingAccountPage;
