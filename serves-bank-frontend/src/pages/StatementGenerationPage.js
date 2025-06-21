import React from 'react';
import StatementList from '../../components/features/StatementList';
import styles from '../../styles/FeaturePage.module.css';

const StatementGenerationPage = () => {
  const mockStatements = [
    { id: 1, period: 'October 2023', generationDate: '2023-11-01', downloadLink: '#' },
    { id: 2, period: 'September 2023', generationDate: '2023-10-01', downloadLink: '#' },
    { id: 3, period: 'August 2023', generationDate: '2023-09-01', downloadLink: '#' },
  ];
  return (
    <div className={styles.featurePageContainer}>
      <h1>Account Statements</h1>
      <div className={styles.listSection}>
        <h2>View & Download Statements</h2>
        <StatementList statements={mockStatements} />
      </div>
      <div className={styles.customStatementSection}>
        <h3>Generate Custom Statement</h3>
        <form>
          <div>
            <label htmlFor="statement-account">Account:</label>
            <select id="statement-account" name="account">
              <option value="checking">Checking Account (****5678)</option>
              <option value="savings">Savings Account (****1234)</option>
            </select>
          </div>
          <div>
            <label htmlFor="startDate">Start Date:</label>
            <input type="date" id="startDate" name="startDate" />
          </div>
          <div>
            <label htmlFor="endDate">End Date:</label>
            <input type="date" id="endDate" name="endDate" />
          </div>
          <button type="submit">Generate Statement</button>
        </form>
      </div>
    </div>
  );
};
export default StatementGenerationPage;
