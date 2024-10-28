import React from "react";
import "./modal.style.css";

const Modal = ({ isVisible, hide }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Modal heading</h2>
        <p>This is a modal</p>
        <button onClick={hide}>Close</button>
      </div>
    </div>
  );
};

export default React.memo(Modal);
