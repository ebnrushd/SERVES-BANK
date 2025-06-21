import React from 'react';
import ActivityLogTable from '../../components/security/ActivityLogTable';
import styles from '../../styles/SecurityPage.module.css';

const AuditTrailPage = () => {
  const mockLogs = [
    { id: 1, timestamp: '2023-10-27 10:00:00', user: 'admin', action: 'User login', details: 'User admin logged in from IP 192.168.1.100' },
    { id: 2, timestamp: '2023-10-27 10:05:00', user: 'jane.doe', action: 'Balance inquiry', details: 'Account ******7890' },
    { id: 3, timestamp: '2023-10-27 10:06:15', user: 'john.smith', action: 'Failed login attempt', details: 'Invalid password for user john.smith' },
    { id: 4, timestamp: '2023-10-27 10:07:00', user: 'admin', action: 'Permission change', details: 'Role "Teller" permission "Process Wires" granted' },
  ];
  return (
    <div className={styles.securityPageContainer}>
      <h1>Audit Trail</h1>
      <p className={styles.infoSection}>Comprehensive log of all system and user activities, critical for security analysis and compliance.</p>
      <ActivityLogTable logs={mockLogs} />
    </div>
  );
};
export default AuditTrailPage;
