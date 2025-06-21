import React from 'react';
import styles from '../../styles/PermissionMatrix.module.css';

const PermissionMatrix = ({ roles, permissions }) => {
  if (!roles || !permissions || roles.length === 0) {
    return <p>No role or permission data to display.</p>;
  }

  // Assuming permissions is an object where keys are roles and values are arrays of permission strings.
  // For a more complex matrix, you might need a different data structure.

  // Get all unique permissions for table headers
  const allPermissions = [...new Set(Object.values(permissions).flat())];

  return (
    <table className={styles.permissionTable}>
      <thead>
        <tr>
          <th>Role</th>
          {allPermissions.map(permission => (
            <th key={permission}>{permission}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {roles.map(role => (
          <tr key={role}>
            <td><strong>{role}</strong></td>
            {allPermissions.map(permission => (
              <td key={`${role}-${permission}`}>
                {permissions[role]?.includes(permission) ? '✔️' : '❌'}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PermissionMatrix;
