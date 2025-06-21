import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Navbar.module.css'; // Example for CSS Modules

const Navbar = () => {
  return (
    <nav className={styles.navbar} role="navigation" aria-label="Main navigation">
      <div className={styles.logo}><Link to="/">SERVES BANK</Link></div>
      <ul className={styles.navLinks}>
        <li><Link to="/">Dashboard</Link></li>
        {/* <li><Link to="/accounts">Accounts</Link></li> Placeholder link */}
        <li><Link to="/accounts/savings">Savings</Link></li>
        <li><Link to="/accounts/checking">Checking</Link></li>
        <li><Link to="/accounts/credit">Credit</Link></li>
        {/* <li><Link to="/transactions">Transactions</Link></li> Placeholder link */}
        <li><Link to="/transactions/deposit">Deposit</Link></li>
        <li><Link to="/transactions/withdraw">Withdraw</Link></li>
        <li><Link to="/transactions/transfer">Transfer Funds</Link></li>
        <li><Link to="/transactions/wire">Wire Transfer</Link></li>
        <li><Link to="/transactions/ach">ACH</Link></li>
        {/* Grouping Security Links - could be a dropdown */}
        <li className={styles.navSection}>Security</li>
        <li><Link to="/security/audit-trail">Audit Trail</Link></li>
        <li><Link to="/security/regulatory-reporting">Regulatory Reporting</Link></li>
        <li><Link to="/security/access-control">Access Control</Link></li>
        <li><Link to="/security/data-security">Data Security</Link></li>
        {/* Grouping Features Links */}
        <li className={styles.navSection}>Features</li>
        <li><Link to="/features/overdraft">Overdraft</Link></li>
        <li><Link to="/features/statements">Statements</Link></li>
        <li><Link to="/features/fees">Fees</Link></li>
        <li><Link to="/features/currency-converter">Converter</Link></li>
        <li><Link to="/features/reconciliation">Reconciliation</Link></li>
        <li><Link to="/settings">Settings</Link></li> {/* Placeholder link */}
      </ul>
      <div className={styles.userProfile}>
        {/* Placeholder for user profile/logout */}
        <span>User Profile</span>
      </div>
    </nav>
  );
};

export default Navbar;
