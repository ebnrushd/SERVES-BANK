import React from 'react';
// import styles from '../../styles/DataSecurityFeature.module.css';

const DataSecurityFeature = ({ featureName, description }) => {
  return (
    <div /*className={styles.featureItem}*/>
      <h4>{featureName}</h4>
      <p>{description}</p>
    </div>
  );
};

export default DataSecurityFeature;
