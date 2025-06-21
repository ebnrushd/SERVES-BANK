import React from 'react';
import styles from '../../styles/StatementList.module.css';

const StatementList = ({ statements }) => {
  if (!statements || statements.length === 0) {
    return <p>No statements available at this time.</p>;
  }

  return (
    <ul className={styles.statementList}>
      {statements.map((statement) => (
        <li key={statement.id} className={styles.statementItem}>
          <h4>{statement.period}</h4>
          <p>Generated: {statement.generationDate}</p>
          <a href={statement.downloadLink || '#'} target="_blank" rel="noopener noreferrer">
            Download PDF
          </a>
        </li>
      ))}
    </ul>
  );
};

export default StatementList;
