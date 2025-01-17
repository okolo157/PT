import React, { useState } from "react";
import "../page/Todo.css";

function Todo() {
  return (
    <div>
      <div className="body">
        <div className="container">
          <h1 className="row">New Todo</h1>
          <input className="newcard" type="text" placeholder="Add a new task..." />
          <button className="add-task">Add</button>
        </div>
      </div>
      <div className="newcard-2">
        <ul className="play">
          <li>shopping</li>
          <li>Do laundry</li>
          <li>sweep and mop</li>
          <li>wash and dishes</li>
        </ul>
      </div>
    </div>
  );
}

export default Todo;
