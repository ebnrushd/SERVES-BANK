import React from 'react';
// import styles from '../../styles/TransactionForm.module.css';

const TransferForm = () => {
  return (
    <form /*className={styles.transactionForm}*/>
      <div>
        <label htmlFor="transfer-from-account">From Account:</label>
        <select id="transfer-from-account" name="fromAccount">
          <option value="savings">Savings Account</option>
          <option value="checking">Checking Account</option>
        </select>
      </div>
      <div>
        <label htmlFor="transfer-to-account">To Account:</label>
        <select id="transfer-to-account" name="toAccount">
          <option value="savings">Savings Account (Internal)</option>
          <option value="checking">Checking Account (Internal)</option>
          {/* Add options for external accounts if applicable */}
        </select>
      </div>
      <div>
        <label htmlFor="transfer-amount">Amount:</label>
        <input type="number" id="transfer-amount" name="amount" step="0.01" />
      </div>
      <div>
        <label htmlFor="transfer-schedule">Schedule (Optional):</label>
        <input type="date" id="transfer-schedule" name="schedule" />
      </div>
      <div>
        <label htmlFor="transfer-recurring">
          <input type="checkbox" id="transfer-recurring" name="recurring" />
          Recurring Transfer
        </label>
      </div>
      <button type="submit">Submit Transfer</button>
    </form>
  );
};

export default TransferForm;
