import React from 'react';
import styles from '../../styles/ActivityLogTable.module.css';

const ActivityLogTable = ({ logs }) => {
  if (!logs || logs.length === 0) {
    return <p>No activity logs to display.</p>;
  }

  return (
    <table className={styles.logTable}>
      <thead>
        <tr>
          <th>Timestamp</th>
          <th>User</th>
          <th>Action</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log) => (
          <tr key={log.id}>
            <td>{log.timestamp}</td>
            <td>{log.user}</td>
            <td>{log.action}</td>
            <td>{log.details}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ActivityLogTable;
