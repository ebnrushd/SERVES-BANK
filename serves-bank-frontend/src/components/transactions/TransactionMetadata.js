import React from 'react';
import styles from '../../styles/TransactionMetadata.module.css'; // Create this file if needed

const TransactionMetadata = ({ transactionId }) => {
  // This component is a placeholder for now.
  // In a real app, you might fetch metadata based on transactionId or allow editing.

  return (
    <div className={styles.metadataContainer}>
      <h3>Transaction Metadata (ID: {transactionId || 'N/A'})</h3>
      <div>
        <label htmlFor="meta-category">Custom Category:</label>
        <input type="text" id="meta-category" name="category" placeholder="e.g., Business, Personal" />
      </div>
      <div>
        <label htmlFor="meta-tags">Tags:</label>
        <input type="text" id="meta-tags" name="tags" placeholder="e.g., travel, groceries, project-x" />
      </div>
      <div>
        <label htmlFor="meta-receipt">Upload Receipt:</label>
        <input type="file" id="meta-receipt" name="receipt" />
      </div>
      <div>
        <label htmlFor="meta-notes">Notes:</label>
        <textarea id="meta-notes" name="notes" rows="3" placeholder="Add any relevant notes..."></textarea>
      </div>
      {/* Placeholder for other metadata fields */}
      <p>Geolocation: <em>(Placeholder for map or coordinates)</em></p>
      <p>Merchant Info: <em>(Placeholder for merchant details if applicable)</em></p>
      <button type="button">Save Metadata</button>
    </div>
  );
};

export default TransactionMetadata;
