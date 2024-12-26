import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Modal({ title, children, handleCloseModal }) {
  return (
    <div>
      <div className="modal">
        <div className="modal-content general">
          <div className="modal-header">
            <h3 className="h3">{title}</h3>
            <FontAwesomeIcon
              className="close-icon"
              icon={faClose}
              onClick={handleCloseModal}
            />
          </div>
          <div className="modal-content buttons">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
