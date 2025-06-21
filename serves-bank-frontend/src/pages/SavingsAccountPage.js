import React from 'react';
import AccountBalance from '../../components/accounts/AccountBalance';
import TransactionList from '../../components/accounts/TransactionList';
import AccountStatus from '../../components/accounts/AccountStatus';
import InterestInfo from '../../components/accounts/InterestInfo';
import styles from '../../styles/AccountPage.module.css'; // Optional: for page-specific styling

const SavingsAccountPage = () => {
  const mockTransactions = [
    { id: 1, date: '2023-10-26', description: 'Deposit', amount: 1000, type: 'Credit' },
    { id: 2, date: '2023-10-25', description: 'Withdrawal', amount: -100, type: 'Debit' },
  ];

  return (
    <div className={styles.accountPageContainer}>
      <h1>Savings Account</h1>
      <div className={styles.componentSection}>
        <AccountBalance balance={5000.75} availableBalance={4950.75} currency="USD" />
      </div>
      <div className={styles.componentSection}>
        <AccountStatus status="Active" />
      </div>
      <div className={styles.componentSection}>
        <InterestInfo interestRate="1.5%" nextPaymentDate="2023-11-01" accruedInterest={12.34} />
      </div>
      <h2>Recent Transactions</h2>
      <div className={styles.componentSection}>
        <TransactionList transactions={mockTransactions} />
      </div>
      {/* Placeholder for other sections like:
          - Minimum balance requirements
          - Tiered interest rate structures
          - Monthly statement generation link/info
      */}
    </div>
  );
};

export default SavingsAccountPage;
