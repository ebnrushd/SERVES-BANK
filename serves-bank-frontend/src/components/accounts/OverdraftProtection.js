import React from 'react';
// import styles from '../../styles/OverdraftProtection.module.css';

const OverdraftProtection = ({ status, limit }) => {
  return (
    <div /*className={styles.overdraftProtectionContainer}*/>
      <h3>Overdraft Protection</h3>
      <p>Status: {status}</p>
      {limit && <p>Limit: {limit?.toFixed(2)}</p>}
    </div>
  );
};

export default OverdraftProtection;
