import React, { useState } from "react";
import "./addTodo.css";
import { axiosInstance } from "../../utils/config";

const AddTodo = (todos) => {
    const UserId = localStorage.getItem('userId');
    const User = localStorage.getItem('user');

    const [input, setInput] = useState({
        todoItem: undefined,
        userId:UserId
      });

      const [todo,setTodo] = useState(todos.todo)

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (id) => {
    try {
      const res = await axiosInstance.post(`/todo`, input);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dashboardAddTodo">
      <input
        className="dashboardAddInput"
        type="text"
        id="todoItem"
        name="todoItem"
        placeholder="Enter a todo"
        onChange={handleChange}
      />
      <button
        className="dashboardAddButton"
        onClick={() => handleClick(UserId)}
      >
        +
      </button>
    </div>
  );
};

export default AddTodo;
