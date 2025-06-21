import React from 'react';
import PermissionMatrix from '../../components/security/PermissionMatrix';
import styles from '../../styles/SecurityPage.module.css';

const AccessControlPage = () => {
  const mockRoles = ['Admin', 'Manager', 'Teller', 'Customer', 'Auditor'];
  const mockPermissions = {
    'Admin': ['Create User', 'Delete User', 'Set Permissions', 'View Audit Trail', 'Configure System Settings'],
    'Manager': ['Approve Transactions', 'View Reports', 'Manage Users (limited)', 'Override Transaction Flags'],
    'Teller': ['Process Deposits', 'Process Withdrawals', 'View Customer Accounts', 'Issue Cashier Checks'],
    'Customer': ['View Own Accounts', 'Make Transfers', 'View Own Transactions', 'Pay Bills'],
    'Auditor': ['View Audit Trail', 'View Reports', 'Access Read-Only System Logs'],
  };

  return (
    <div className={styles.securityPageContainer}>
      <h1>Access Control Management</h1>
      <p className={styles.infoSection}>Define and manage user roles, permissions, and authentication settings to ensure proper system access.</p>

      <div className={styles.infoSection}>
        <h2>Role-Based Permissions</h2>
        <PermissionMatrix roles={mockRoles} permissions={mockPermissions} />
      </div>

      <div className={styles.infoSection}>
        <h2>Multi-Factor Authentication (MFA)</h2>
        <p>Status: Enabled for all admin and manager roles.</p>
        <button type="button">Configure MFA Settings</button>
      </div>

      <div className={styles.infoSection}>
        <h2>Session Management</h2>
        <p>Session Timeout: 30 minutes of inactivity.</p>
        <button type="button">Configure Session Settings</button>
      </div>
    </div>
  );
};

export default AccessControlPage;
