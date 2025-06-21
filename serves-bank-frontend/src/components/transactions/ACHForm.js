import React from 'react';
// import styles from '../../styles/TransactionForm.module.css';

const ACHForm = () => {
  return (
    <form /*className={styles.transactionForm}*/>
      <div>
        <label htmlFor="ach-account">Account (From/To):</label>
        <select id="ach-account" name="account">
          <option value="checking">Checking Account</option>
          <option value="savings">Savings Account</option>
          {/* Option for external linked accounts */}
        </select>
      </div>
      <div>
        <label htmlFor="ach-type">ACH Type:</label>
        <select id="ach-type" name="achType">
          <option value="debit">Debit (Payment)</option>
          <option value="credit">Credit (Deposit)</option>
        </select>
      </div>
      <div>
        <label htmlFor="ach-amount">Amount:</label>
        <input type="number" id="ach-amount" name="amount" step="0.01" />
      </div>
      <div>
        <label htmlFor="ach-company-name">Company/Recipient Name:</label>
        <input type="text" id="ach-company-name" name="companyName" />
      </div>
      <div>
        <label htmlFor="ach-effective-date">Effective Date:</label>
        <input type="date" id="ach-effective-date" name="effectiveDate" />
      </div>
      <button type="submit">Submit ACH Transaction</button>
    </form>
  );
};

export default ACHForm;
