import React, { useState, useEffect } from 'react';
import styles from '../../styles/CurrencyConverter.module.css';

const CurrencyConverter = ({ initialFromCurrency = 'USD', initialToCurrency = 'EUR', initialRate = 0.92 }) => {
  const [fromCurrency, setFromCurrency] = useState(initialFromCurrency);
  const [toCurrency, setToCurrency] = useState(initialToCurrency);
  const [rate, setRate] = useState(initialRate); // In a real app, this would be fetched
  const [amountToConvert, setAmountToConvert] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');

  useEffect(() => {
    // Placeholder for fetching rate if currencies change
    // For now, just use the initialRate or a mocked one
    if (fromCurrency === 'USD' && toCurrency === 'EUR') setRate(0.92);
    else if (fromCurrency === 'EUR' && toCurrency === 'USD') setRate(1.08);
    else if (fromCurrency === 'USD' && toCurrency === 'GBP') setRate(0.80);
    else if (fromCurrency === 'GBP' && toCurrency === 'USD') setRate(1.25);
    // Add more mocked rates or a fetch call here
  }, [fromCurrency, toCurrency]);

  const handleConversion = (e) => {
    e.preventDefault();
    if (amountToConvert && rate) {
      setConvertedAmount((parseFloat(amountToConvert) * rate).toFixed(2));
    } else {
      setConvertedAmount('');
    }
  };

  return (
    <form onSubmit={handleConversion} className={styles.converterForm}>
      <div>
        <label htmlFor="from-currency">From:</label>
        <select id="from-currency" value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}>
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound</option>
          {/* Add more currencies */}
        </select>
      </div>
      <div>
        <label htmlFor="to-currency">To:</label>
        <select id="to-currency" value={toCurrency} onChange={e => setToCurrency(e.target.value)}>
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound</option>
          {/* Add more currencies */}
        </select>
      </div>
      <div>
        <label htmlFor="amount-to-convert">Amount to Convert:</label>
        <input
          type="number"
          id="amount-to-convert"
          value={amountToConvert}
          onChange={e => setAmountToConvert(e.target.value)}
          step="0.01"
          placeholder="Enter amount"
        />
      </div>
      <button type="submit">Convert</button>
      {convertedAmount && (
        <div className={styles.result}>
          <p>Converted Amount: {toCurrency} {convertedAmount}</p>
          <p>Exchange Rate Used: 1 {fromCurrency} = {rate} {toCurrency}</p>
        </div>
      )}
    </form>
  );
};

export default CurrencyConverter;
