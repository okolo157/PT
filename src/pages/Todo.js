import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faEdit } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";

import Modal from "../components/Modal";

import "../styles/Todo.css";

function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  const handleAddTodo = () => {
    if (todo.trim()) {
      setIsModalOpen(true);
    } else {
      toast("Enter a todo item.");
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleTypeSelect = (type) => {
    if (type) {
      const newTodo = { title: type, text: todo };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setTodo("");
      setIsModalOpen(false);
      toast.dismiss();
      toast("Item added successfully");
    }
  };

  const handleDeleteTodo = (indexToDelete) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(updatedTodos);
    // localStorage.setItem("todos", JSON.stringify(updatedTodos));
    toast.dismiss();
    toast("Item deleted successfully");
  };

  const copyTodo = (todoItem) => {
    const txt = todoItem.text;
    navigator.clipboard.writeText(txt);
    toast("Todo Item copied: " + txt);
  };

  const handleEditTodo = (item, indexToEdit) => {
    const itemToEdit = item;
    const updatedTodos = todos.filter((_, index) => index !== indexToEdit);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodo(itemToEdit.text);
    toast.dismiss();
    toast("Edit your todo item and click Add");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsHistoryModalOpen(false);
    toast.dismiss();
  };

  const handleModal = () => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setHistory(savedTodos);
    setIsHistoryModalOpen(true);
  };

  const colors = {
    Work: "green",
    Urgent: "red",
    Personal: "blue",
    Shopping: "skyblue",
    Health: "pink",
    Appointments: "orange",
    Projects: "purple",
    Delegated: "brown",
    "Waiting on": "grey",
  };

  return (
    <div className="wrapper-todo">
      <div className="alert">
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <div className="up-text">
        <button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;Todolist&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;TodoList&nbsp;
          </span>
        </button>
      </div>
      <div className="todo-box">
        <div className="link">
          <h1 style={{ color: "black" }}>
            Add <br />
            some Items
          </h1>
          <p onClick={handleModal}>View history</p>
        </div>
        <div className="top-box"></div>
        <div className="bottom-box">
          <div className="input-box">
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
                onKeyDown={handleEnter}
              />
              <button onClick={handleAddTodo} aria-label="Add todo item">
                Add
              </button>
            </div>
          </div>
          <div className="list-items">
            {todos.map((item, index) => (
              <div
                key={index}
                className="itemz"
                title="Click to copy Todo Item"
                onClick={() => copyTodo(item)}
              >
                <div className="input-element">
                  <label
                    className="checkbox-wrapper"
                    onClick={(e) => {
                      e.stopPropagation();
                      toast("Task completed successfully");
                    }}
                    title="Task completed"
                  >
                    <input
                      type="checkbox"
                      onClick={() => {
                        toast.dismiss();
                        handleDeleteTodo(index);
                        toast.dismiss();
                        toast("Task completed successfully");
                      }}
                    />
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
                      className="two"
                      title="Edit item"
                      icon={faEdit}
                      size="1x"
                      color="grey"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditTodo(item, index);
                      }}
                    />
                    <FontAwesomeIcon
                      className="one"
                      title="Delete item"
                      icon={faDeleteLeft}
                      size="1x"
                      color="red"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteTodo(index);
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
        <Modal title="Select Todo Type" handleCloseModal={handleCloseModal}>
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
        </Modal>
      )}
      

      {isHistoryModalOpen && (
        <Modal
          title="Your Todo List history"
          handleCloseModal={handleCloseModal}
        >
          {history.length > 0 ? (
            history.map((item, index) => (
              <div key={index} className="itemz">
                <p className="text">
                  <strong style={{ color: colors[item.title] || "black" }}>
                    {item.title}
                  </strong>
                  : {item.text}
                </p>
              </div>
            ))
          ) : (
            <p>No history available.</p>
          )}
        </Modal>
      )}
    </div>
  );
}

export default Todo;
