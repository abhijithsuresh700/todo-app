import React from "react";
import "./dashboard.css";
import DoneIcon from "@mui/icons-material/Done";
import CancelIcon from "@mui/icons-material/Cancel";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Dashboard = () => {
  return (
    <div className="dashboardContainer">
      <div className="dashboardWrapper">
        <div className="dashboardTitleBox">
          <DoneIcon className="checkbox" />
          <h1 className="dashboardTitle">To Do's</h1>
        </div>
        <div className="dashboardSearchBx">
        <SearchIcon className="dashboardSearchIcon"/>
        <input className="dashboardSearchInput" 
        placeholder="Search"
        />
        </div>
        <div className="dashboardTodoList">
          <div className="dashboardTodoListItem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Esse, minima? Delectus vel laudantium labore culpa sed totam,
            unde commodi dolorem sapiente neque,
            <br />
            inventore placeat iste quasi sunt, facere veritatis fuga?
          </div>
          <button className="dashboardDeleteButton">
            <CancelIcon className="cancelIcon"/>
          </button>
          <button className="dashboardEditButton">
            <BorderColorIcon className="editIcon"/>
          </button>
        </div>
        <div className="dashboardTodoList">
          <div className="dashboardTodoListItem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Esse, minima? Delectus vel laudantium labore culpa sed totam,
            unde commodi dolorem sapiente neque,
            <br />
            inventore placeat iste quasi sunt, facere veritatis fuga?
          </div>
          <button className="dashboardEditButton">Edit</button>
          <button className="dashboardDeleteButton">Delete</button>
        </div>
        <div className="dashboardTodoList">
          <div className="dashboardTodoListItem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Esse, minima? Delectus vel laudantium labore culpa sed totam,
            unde commodi dolorem sapiente neque,
          </div>
          <button className="dashboardEditButton">Edit</button>
          <button className="dashboardDeleteButton">Delete</button>
        </div>
        <Stack spacing={2}>
      <Pagination count={3} variant="outlined" color="primary"  />
    </Stack>
      </div>
      <div className="navButtons">
      <span className="navNameButton">Name</span>
      <button className="navLogoutButton">LogOut</button>
      </div>
    </div>
  );
};

export default Dashboard;
