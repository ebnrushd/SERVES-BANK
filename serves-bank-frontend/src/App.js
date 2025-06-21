import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Breadcrumbs from './components/layout/Breadcrumbs';
import DashboardPage from './pages/DashboardPage';
import SavingsAccountPage from './pages/SavingsAccountPage';
import CheckingAccountPage from './pages/CheckingAccountPage';
import CreditAccountPage from './pages/CreditAccountPage';
import DepositsPage from './pages/DepositsPage';
import WithdrawalsPage from './pages/WithdrawalsPage';
import TransfersPage from './pages/TransfersPage';
import WireTransferPage from './pages/WireTransferPage';
import ACHTransactionsPage from './pages/ACHTransactionsPage';
import AuditTrailPage from './pages/AuditTrailPage';
import RegulatoryReportingPage from './pages/RegulatoryReportingPage';
import AccessControlPage from './pages/AccessControlPage';
import DataSecurityInfoPage from './pages/DataSecurityInfoPage';
import OverdraftProtectionPage from './pages/OverdraftProtectionPage';
import StatementGenerationPage from './pages/StatementGenerationPage';
import FeeManagementPage from './pages/FeeManagementPage';
import CurrencyConversionPage from './pages/CurrencyConversionPage';
import ReconciliationPage from './pages/ReconciliationPage';
// Placeholder for other pages
// import AccountsPage from './pages/AccountsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <header className="App-header">
          <Navbar />
          <Breadcrumbs />
        </header>
        <main id="main-content">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/accounts/savings" element={<SavingsAccountPage />} />
            <Route path="/accounts/checking" element={<CheckingAccountPage />} />
            <Route path="/accounts/credit" element={<CreditAccountPage />} />
            <Route path="/transactions/deposit" element={<DepositsPage />} />
            <Route path="/transactions/withdraw" element={<WithdrawalsPage />} />
            <Route path="/transactions/transfer" element={<TransfersPage />} />
            <Route path="/transactions/wire" element={<WireTransferPage />} />
            <Route path="/transactions/ach" element={<ACHTransactionsPage />} />
            <Route path="/security/audit-trail" element={<AuditTrailPage />} />
            <Route path="/security/regulatory-reporting" element={<RegulatoryReportingPage />} />
            <Route path="/security/access-control" element={<AccessControlPage />} />
            <Route path="/security/data-security" element={<DataSecurityInfoPage />} />
            <Route path="/features/overdraft" element={<OverdraftProtectionPage />} />
            <Route path="/features/statements" element={<StatementGenerationPage />} />
            <Route path="/features/fees" element={<FeeManagementPage />} />
            <Route path="/features/currency-converter" element={<CurrencyConversionPage />} />
            <Route path="/features/reconciliation" element={<ReconciliationPage />} />
            {/* <Route path="/accounts" element={<AccountsPage />} /> */}
            {/* Add other routes here as pages are created */}
          </Routes>
        </main>
        <footer className="App-footer">
          <p>&copy; {new Date().getFullYear()} SERVES Bank. All rights reserved.</p>
          {/* Add other footer links like Privacy Policy, Terms of Service if needed */}
        </footer>
      </div>
    </Router>
  );
}

export default App;
