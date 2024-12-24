import React from "react";

function Modal({ handleTypeSelect }) {
  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <h3>Select Todo Type</h3>
          <button onClick={() => handleTypeSelect("Work")}>Work</button>
          <button onClick={() => handleTypeSelect("Personal")}>Personal</button>
          <button onClick={() => handleTypeSelect("Shopping")}>Shopping</button>
          <button onClick={() => handleTypeSelect("Health")}>Health</button>
          <button onClick={() => handleTypeSelect("Urgent")}>Urgent</button>
          <button onClick={() => handleTypeSelect("Appointments")}>
            Appointments
          </button>
          <button onClick={() => handleTypeSelect("Projects")}>Projects</button>
          <button onClick={() => handleTypeSelect("Delegated")}>
            Delegated
          </button>
          <button onClick={() => handleTypeSelect("Waiting on")}>
            Waiting on
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
