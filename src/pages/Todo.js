import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faEdit } from "@fortawesome/free-solid-svg-icons";

import "../styles/Todo.css";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTodo = () => {
    if (todo.trim()) {
      setIsModalOpen(true);
    }
  };

  const handleTypeSelect = (type) => {
    if (type) {
      const newTodo = { title: type, text: todo };
      setTodos([...todos, newTodo]);
      setTodo("");
      setIsModalOpen(false);
    }
  };

  const handleDeleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  const copyTodo = async (todoItem) => {
    const txt = todoItem.text;
    try {
      await navigator.clipboard.writeText(txt);
      alert("Todo item copied to clipboard: " + txt);
    } catch (error) {
      console.error("Error copying to clipboard", error);
    }
  };

  const handleEditTodo = (item, indexToEdit) => {
    const itemToEdit = item;
    setTodos(todos.filter((_, index) => index !== indexToEdit));
    setTodo(itemToEdit.text);
  };

  const colors = {
    Work: "green",
    Urgent: "red",
    Personal: "blue",
    Shopping: "yellow",
    Health: "pink",
    Appointments: "orange",
    Projects: "purple",
    Delegated: "brown",
    "Waiting on": "grey",
  };

  return (
    <div className="wrapper-todo">
      <div className="up-text">
        <button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;Todolist&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;TodoList&nbsp;
          </span>
        </button>
      </div>
      <div className="todo-box">
        <div className="top-box"></div>
        <div className="bottom-box">
          <div className="input-box">
            <p>
              <span style={{ fontWeight: "bold", marginBottom: "-20px" }}>
                What do you want to do today?
              </span>
            </p>
            <div className="elements">
              <input
                style={{
                  flex: "80%",
                  marginRight: "10px",
                  height: "40px",
                  border: "1px solid rgb(201, 201, 201) ",
                }}
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Add a new todo item"
              />
              <button onClick={handleAddTodo}>Add</button>
            </div>
          </div>
          <div className="list-items">
            {todos.map((item, index) => (
              <div
                key={index}
                className="itemz"
                title="Copy Todo Item"
                onClick={() => copyTodo(item)}
              >
                <div className="input-element">
                  <label
                    className="checkbox-wrapper"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <input type="checkbox" />
                    <div className="checkmark">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </label>
                  <p className="text">
                    <strong style={{ color: colors[item.title] || "black" }}>
                      {item.title}
                    </strong>
                    : {item.text}
                  </p>
                  <div className="icons">
                    <FontAwesomeIcon
                      className="one"
                      title="Delete item"
                      icon={faDeleteLeft}
                      size="2x"
                      color="red"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteTodo(index);
                      }}
                    />
                    <FontAwesomeIcon
                      className="two"
                      title="Edit item"
                      icon={faEdit}
                      size="2x"
                      color="grey"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditTodo(item, index);
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Select Todo Type</h3>
            <button onClick={() => handleTypeSelect("Work")}>Work</button>
            <button onClick={() => handleTypeSelect("Personal")}>
              Personal
            </button>
            <button onClick={() => handleTypeSelect("Shopping")}>
              Shopping
            </button>
            <button onClick={() => handleTypeSelect("Health")}>Health</button>
            <button onClick={() => handleTypeSelect("Urgent")}>Urgent</button>
            <button onClick={() => handleTypeSelect("Appointments")}>
              Appointments
            </button>
            <button onClick={() => handleTypeSelect("Projects")}>
              Projects
            </button>
            <button onClick={() => handleTypeSelect("Delegated")}>
              Delegated
            </button>
            <button onClick={() => handleTypeSelect("Waiting on")}>
              Waiting on
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Todo;
