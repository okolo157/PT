import React, { useState } from 'react';
import './Todo.css';

function Todo() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);


    const addTask = () => {
        if (!task.trim()) return;
        const newTask = {
            id: Date.now(),
            text: task,
            done: false,
        };
        setTasks([...tasks, newTask]);
        setTask('');
    };


    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, done: !task.done } : task
        ));
    };


    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="App">
            {/* <h1>My TODO List</h1> */}

            <div className="style">
                <div className="terminal-loader">
                    <div className="terminal-header">
                        <div className="terminal-title">TO DO LIST</div>
                        <div className="terminal-controls">
                            <div className="control close"></div>
                            <div className="control minimize"></div>
                            <div className="control maximize"></div>
                        </div>
                    </div>
                    <div class="text">Add An Items...</div>
                </div>
            </div>


            <div className="input-container">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add a new task"
                />
                <button onClick={addTask}>Add</button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className={task.done ? 'done' : ''}
                        onClick={() => toggleTask(task.id)}
                    >
                        {task.text}
                        <button className="delete-btn" onClick={(e) => {
                            e.stopPropagation();
                            deleteTask(task.id);
                        }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
