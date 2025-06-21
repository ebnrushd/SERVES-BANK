import React from 'react';
import CurrencyConverter from '../../components/features/CurrencyConverter';
import styles from '../../styles/FeaturePage.module.css';

const CurrencyConversionPage = () => {
  // Mock data for the converter - in a real app, rates would be dynamic
  const conversionProps = {
    initialFromCurrency: 'USD',
    initialToCurrency: 'EUR',
    initialRate: 0.92, // Example rate: 1 USD = 0.92 EUR
    // amountToConvert will be handled by the component's state
  };
  return (
    <div className={styles.featurePageContainer}>
      <h1>Currency Converter</h1>
      <div className={styles.formSection}>
        <CurrencyConverter {...conversionProps} />
      </div>
      <div className={styles.disclaimerSection}>
         <h3>Important Notice</h3>
         <p>Exchange rates are indicative and subject to change without notice.
            Actual rates applied at the time of transaction may vary.
            Serves Bank may apply a margin to the wholesale exchange rate.
            Please confirm the final rate before proceeding with any transaction.
         </p>
      </div>
    </div>
  );
};
export default CurrencyConversionPage;
