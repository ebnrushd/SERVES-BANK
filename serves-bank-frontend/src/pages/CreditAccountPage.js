import React from 'react';
// import AccountBalance from '../../components/accounts/AccountBalance'; // Or a more specific CreditBalance component
import TransactionList from '../../components/accounts/TransactionList';
import AccountStatus from '../../components/accounts/AccountStatus';
import CreditLimitInfo from '../../components/accounts/CreditLimitInfo'; // Example specific component
import PaymentInfo from '../../components/accounts/PaymentInfo'; // Example specific component
import InterestInfo from '../../components/accounts/InterestInfo'; // Re-using for APR etc.
import styles from '../../styles/AccountPage.module.css';

const CreditAccountPage = () => {
  const mockTransactions = [
    { id: 1, date: '2023-10-20', description: 'Online Purchase', amount: -150.00, type: 'Debit' },
    { id: 2, date: '2023-10-15', description: 'Payment Received', amount: 500.00, type: 'Credit' },
  ];

  return (
    <div className={styles.accountPageContainer}>
      <h1>Credit Account</h1>
      <div className={styles.componentSection}>
        <CreditLimitInfo currentBalance={1250.50} creditLimit={5000} availableCredit={3749.50} currency="USD" />
      </div>
      <div className={styles.componentSection}>
        <AccountStatus status="Active - Good Standing" />
      </div>
      <div className={styles.componentSection}>
        <PaymentInfo nextDueDate="2023-11-15" minimumPayment={50.00} lastStatementBalance={1200.00} />
      </div>
      <div className={styles.componentSection}>
        <InterestInfo apr="21.5%" /> {/* Using InterestInfo for APR, can be expanded */}
      </div>
      <h2>Recent Transactions</h2>
      <div className={styles.componentSection}>
        <TransactionList transactions={mockTransactions} />
      </div>
      {/* Placeholder for other sections like:
          - Rewards program information
          - Balance transfer offers
          - Request credit limit increase
      */}
    </div>
  );
};

export default CreditAccountPage;
