import React from 'react';
// import styles from '../../styles/TransactionForm.module.css';

const WireTransferForm = () => {
  return (
    <form /*className={styles.transactionForm}*/>
      <div>
        <label htmlFor="wire-from-account">From Account:</label>
        <select id="wire-from-account" name="fromAccount">
          <option value="checking">Checking Account</option>
          <option value="savings">Savings Account</option>
        </select>
      </div>
      <div>
        <label htmlFor="wire-beneficiary-name">Beneficiary Name:</label>
        <input type="text" id="wire-beneficiary-name" name="beneficiaryName" />
      </div>
      <div>
        <label htmlFor="wire-beneficiary-account">Beneficiary Account Number:</label>
        <input type="text" id="wire-beneficiary-account" name="beneficiaryAccount" />
      </div>
      <div>
        <label htmlFor="wire-bank-name">Beneficiary Bank Name:</label>
        <input type="text" id="wire-bank-name" name="bankName" />
      </div>
      <div>
        <label htmlFor="wire-swift-iban">SWIFT/BIC or IBAN:</label>
        <input type="text" id="wire-swift-iban" name="swiftIban" />
      </div>
      <div>
        <label htmlFor="wire-amount">Amount:</label>
        <input type="number" id="wire-amount" name="amount" step="0.01" />
      </div>
      <div>
        <label htmlFor="wire-currency">Currency:</label>
        <select id="wire-currency" name="currency">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          {/* Add more currencies as needed */}
        </select>
      </div>
      <button type="submit">Submit Wire Transfer</button>
    </form>
  );
};

export default WireTransferForm;
