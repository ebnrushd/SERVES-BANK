import React from 'react';
// import styles from '../../styles/TransactionForm.module.css';

const WithdrawalForm = () => {
  return (
    <form /*className={styles.transactionForm}*/>
      <div>
        <label htmlFor="withdrawal-account">Account:</label>
        <select id="withdrawal-account" name="account">
          <option value="savings">Savings Account</option>
          <option value="checking">Checking Account</option>
        </select>
      </div>
      <div>
        <label htmlFor="withdrawal-amount">Amount:</label>
        <input type="number" id="withdrawal-amount" name="amount" step="0.01" />
      </div>
      <button type="submit">Submit Withdrawal</button>
    </form>
  );
};

export default WithdrawalForm;
