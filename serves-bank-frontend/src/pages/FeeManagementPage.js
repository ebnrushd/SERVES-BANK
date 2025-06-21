import React from 'react';
import FeeSchedule from '../../components/features/FeeSchedule';
import styles from '../../styles/FeaturePage.module.css';

const FeeManagementPage = () => {
  const mockFees = [
    { id: 1, feeName: 'Monthly Maintenance Fee (Checking)', amount: 15, currency: 'USD', frequency: 'Monthly', conditions: 'Waived with minimum daily balance of $1,500 or cumulative direct deposits of $500/month.' },
    { id: 2, feeName: 'Monthly Maintenance Fee (Savings)', amount: 5, currency: 'USD', frequency: 'Monthly', conditions: 'Waived with minimum daily balance of $300.' },
    { id: 3, feeName: 'Out-of-Network ATM Fee', amount: 3, currency: 'USD', frequency: 'Per Transaction', conditions: 'Applies to withdrawals from non-Serves Bank ATMs. First 2 per month waived for Premier accounts.' },
    { id: 4, feeName: 'Overdraft Fee', amount: 35, currency: 'USD', frequency: 'Per Occurrence', conditions: 'Charged when account balance drops below zero. Maximum 3 per day.' },
    { id: 5, feeName: 'Wire Transfer Fee (Domestic Outgoing)', amount: 25, currency: 'USD', frequency: 'Per Transfer', conditions: '-' },
    { id: 6, feeName: 'Wire Transfer Fee (International Outgoing)', amount: 45, currency: 'USD', frequency: 'Per Transfer', conditions: '-' },
  ];
  return (
    <div className={styles.featurePageContainer}>
      <h1>Fee Schedule & Management</h1>
      <div className={styles.infoSection}>
        <FeeSchedule fees={mockFees} />
      </div>
      <div className={styles.disputeSection}>
        <h3>Dispute a Fee</h3>
        <p>If you believe a fee was charged in error, please contact customer support or visit a branch. You can also submit a fee dispute claim online through our secure messaging portal.</p>
        <button type="button">Submit Fee Dispute</button>
      </div>
    </div>
  );
};
export default FeeManagementPage;
