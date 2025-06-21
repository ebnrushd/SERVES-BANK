import React from 'react';
import styles from '../../styles/DashboardPage.module.css';

const AlertsNotifications = () => {
  // In a real app, alerts would come from state or props
  const alerts = [
    { id: 1, message: 'Low balance warning: Savings Account (****1234)', type: 'warning' },
    { id: 2, message: 'Large transaction: $1,200.50 at Best Buy has been processed.', type: 'info' },
    { id: 3, message: 'Critical: New login detected from an unrecognized device in London, UK.', type: 'critical' },
  ];

  return (
    <div className={styles.widget}>
      <h2>Alerts & Notifications</h2>
      <div aria-live="polite" aria-atomic="true">
        {alerts.length > 0 ? (
          <ul className={styles.alertList}>
            {alerts.map(alert => (
              <li key={alert.id} className={`${styles.alertItem} ${styles[`alert-${alert.type}`]}`}>
                <strong>{alert.type.charAt(0).toUpperCase() + alert.type.slice(1)}:</strong> {alert.message}
              </li>
            ))}
          </ul>
        ) : (
          <p>No new alerts or notifications.</p>
        )}
      </div>
    </div>
  );
};

export default AlertsNotifications;
