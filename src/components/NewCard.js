import React from "react";
import "../styles/NewCard.css";
function NewCard({ content, customClass }) {
  return (
    <div className={`container ${customClass}`}>
      <p>{content}</p>
    </div>
  );
}

export default NewCard;
