import React from "react";
import { useState } from "react";

function ToDoList() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    if (input.trim() === "") return alert("Please Enter a todo"); // Prevent adding empty todos

    const item = {
      // id:Math.random(), // Unique ID using random number
      id: Date.now(), // Unique ID based on timestamp
      text: input.trim(),
      completed: false,
    };

    console.log(item.id);

    setTodoList([...todoList, item]);
    setInput("");
  };

  const toggleCompleted = (id) => {
    setTodoList(
      todoList.map((t) => {
        if (t.id === id) {
          return { ...t, completed: !t.completed };
        } else {
          return t;
        }
        // t.id === id ? {...t, completed: !t.completed} : t //same as above but using ternary operator
      }),
    );
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((t) => t.id !== id));
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo()}>Add</button>
      <ul>
        {todoList.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleCompleted(t.id)}
            />

            <span
              className={t.completed ? "strike-through" : ""}
              onDoubleClick={(e) => {
                e.target.contentEditable = true;
                e.target.focus();
              }}
              // onBlur={(e) => {
              //   e.target.contentEditable = false;
              //   t.text = e.target.innerText; // Updates the local object text,same as below but using map function to update the state
              // }}
              onBlur={(e) => {
                e.target.contentEditable = false;
                setTodoList(
                  todoList.map((item) =>
                    item.id === t.id
                      ? { ...item, text: e.target.innerText }
                      : item,
                  ),
                );
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  e.target.blur(); // Triggers the onBlur logic above
                }
              }}
            >
              {t.text}
            </span>
            <button onClick={() => deleteTodo(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDoList;
