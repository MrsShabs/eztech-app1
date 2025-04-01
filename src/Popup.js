import React from 'react';
import './Popup.css'; // Import styles for the popup

const Popup = ({ message, onClose }) => {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
