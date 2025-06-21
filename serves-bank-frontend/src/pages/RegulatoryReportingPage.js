import React from 'react';
import ReportListItem from '../../components/security/ReportListItem';
import styles from '../../styles/SecurityPage.module.css';

const RegulatoryReportingPage = () => {
  const mockReports = [
    { name: 'Currency Transaction Report (CTR) - FinCEN Form 112', generatedDate: '2023-10-01', downloadLink: '#' },
    { name: 'Suspicious Activity Report (SAR) - FinCEN Form 111', generatedDate: '2023-09-15', downloadLink: '#' },
    { name: '1099-INT - Interest Income', generatedDate: '2023-01-31', downloadLink: '#' },
    { name: 'FBAR (Report of Foreign Bank and Financial Accounts) - FinCEN Form 114', generatedDate: '2023-03-10', downloadLink: '#'},
  ];

  return (
    <div className={styles.securityPageContainer}>
      <h1>Regulatory Reporting</h1>
      <p className={styles.infoSection}>Generation and management of required regulatory reports for compliance with financial authorities.</p>
      <div>
        {mockReports.map(report => (
          <ReportListItem key={report.name} reportName={report.name} generatedDate={report.generatedDate} downloadLink={report.downloadLink} />
        ))}
      </div>
    </div>
  );
};

export default RegulatoryReportingPage;
