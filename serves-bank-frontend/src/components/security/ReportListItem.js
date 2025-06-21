import React from 'react';
// import styles from '../../styles/ReportListItem.module.css';

const ReportListItem = ({ reportName, generatedDate, downloadLink }) => {
  return (
    <div /*className={styles.reportItem}*/>
      <h4>{reportName}</h4>
      <p>Generated: {generatedDate}</p>
      <a href={downloadLink || '#'} target="_blank" rel="noopener noreferrer">
        Download Report
      </a>
      {/* Add more actions like 'Regenerate' or 'View Details' if needed */}
    </div>
  );
};

export default ReportListItem;
