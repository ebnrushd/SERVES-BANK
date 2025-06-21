import React from 'react';
// import styles from '../../styles/TransactionForm.module.css';

const DepositForm = () => {
  return (
    <form /*className={styles.transactionForm}*/>
      <div>
        <label htmlFor="deposit-account">Account:</label>
        <select id="deposit-account" name="account" required aria-required="true">
          <option value="">Select an account...</option>
          <option value="savings">Savings Account</option>
          <option value="checking">Checking Account</option>
        </select>
      </div>
      <div>
        <label htmlFor="deposit-amount">Amount:</label>
        <input type="number" id="deposit-amount" name="amount" step="0.01" required aria-required="true" placeholder="e.g., 100.00" />
      </div>
      <div>
        <label htmlFor="deposit-check-front">Check Image (Front) (Optional):</label>
        <input type="file" id="deposit-check-front" name="checkFront" />
      </div>
      <div>
        <label htmlFor="deposit-check-back">Check Image (Back) (Optional):</label>
        <input type="file" id="deposit-check-back" name="checkBack" />
      </div>
      <button type="submit">Submit Deposit</button>
    </form>
  );
};

export default DepositForm;
