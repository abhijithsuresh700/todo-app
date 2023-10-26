import React, { useEffect, useLayoutEffect, useState } from "react";
import "./dashboard.css";
import DoneIcon from "@mui/icons-material/Done";
import CancelIcon from "@mui/icons-material/Cancel";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { axiosInstance } from "../../utils/config";
import AddTodo from "../AddTodo/AddTodo";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const UserId = localStorage.getItem('userId');
  const User = localStorage.getItem('user');

  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState({
    todoItem: undefined,
    userId:UserId
  });
  const [singleTodo, setSingleTodo] = useState("");
  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();



  useEffect(() => {
    User? "" : navigate("/login")
    const todoData = async () => {
      const result = await axiosInstance.get(`/todo/single/${UserId}`);
      setTodo(result.data);
    };
    todoData();
  }, []);

  const handleEdit = async(item) => {
    setSingleTodo(item.todoItem)

  };

  const handleDelete = async (id) => {
    console.log(id, "id check");
    await axiosInstance.delete(`/todo/${id}`);
    window.location.reload();
  };

  const handleLogout = async (id) => {
    console.log(id, "id check");
    localStorage.removeItem('userId');
    localStorage.removeItem('user');
    navigate("/login");
  };




  return (
    <div className="dashboardContainer">
      <div className="dashboardWrapper">
        <div className="dashboardTitleBox">
          <DoneIcon className="checkbox" />
          <h1 className="dashboardTitle">To Do's</h1>
        </div>
        <div className="dashboardSearchBx">
          <SearchIcon className="dashboardSearchIcon" />
          <input className="dashboardSearchInput" placeholder="Search" />
        </div>
        {todo?.map((item, index) => (
          <div className="dashboardTodoList" key={index}>
            <div className="dashboardTodoListItem">{item.todoItem}</div>
            <div className="dashboardButtonset">
              <button
                className="dashboardButton"
                onClick={() => handleDelete(item._id)}
              >
                <CancelIcon className="cancelbuttonIcon" />
              </button>
              <button className="dashboardButton">
                <BorderColorIcon className="editbuttonIcon" onClick={() => handleEdit(item)}/>
              </button>
            </div>
          </div>
        ))}
        <Stack spacing={2}>
          <Pagination
            count={3}
            variant="outlined"
             color="primary"
          />
        </Stack>
        <AddTodo todo={singleTodo}/>
      </div>
      <div className="navButtons">
        <span className="navNameButton">{User}</span>
        <button className="navLogoutButton" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
