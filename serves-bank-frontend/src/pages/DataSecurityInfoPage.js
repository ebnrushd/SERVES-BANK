import React from 'react';
import DataSecurityFeature from '../../components/security/DataSecurityFeature';
import styles from '../../styles/SecurityPage.module.css';

const DataSecurityInfoPage = () => {
  const securityFeatures = [
    { name: 'End-to-End Encryption (E2EE)', description: 'All sensitive data, including PII and financial transactions, is encrypted at rest (AES-256) and in transit (TLS 1.2+), ensuring that only authorized parties can access it.' },
    { name: 'Intrusion Detection and Prevention System (IDPS)', description: 'Actively monitors network and system activities for malicious activities or policy violations, and can block or alert on potential threats.' },
    { name: 'Regular Security Audits & Penetration Testing', description: 'Periodic security assessments, vulnerability scanning, and penetration testing conducted by independent third-party experts.' },
    { name: 'Secure Data Backup and Recovery', description: 'Regular, encrypted backups of critical data with a robust and tested disaster recovery plan in place to ensure business continuity.' },
    { name: 'Multi-Factor Authentication (MFA)', description: 'MFA is enforced for all administrative access and offered as an option for all customer accounts to provide an additional layer of security.' },
    { name: 'Principle of Least Privilege', description: 'Users and systems are granted only the permissions necessary to perform their intended functions.'}
  ];

  return (
    <div className={styles.securityPageContainer}>
      <h1>Data Security Information</h1>
      <p className={styles.infoSection}>Overview of the security measures implemented to protect customer and bank data.</p>
      <div>
        {securityFeatures.map(feature => (
          <DataSecurityFeature key={feature.name} featureName={feature.name} description={feature.description} />
        ))}
      </div>
    </div>
  );
};

export default DataSecurityInfoPage;
