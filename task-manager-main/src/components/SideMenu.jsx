import React from "react";
import "./SideMenu.css";
import UserNav from "./UserNav";
import Home from "../Home.js";


const SideMenu = ({usersData, user, setUser}) => {
  
  return (
    <div className="menu">
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5">
            <h4 className="text-secondary" style={{marginLeft: "30px",color: "black"}}>
              Group
            </h4>
          </div>
        </div>
        <div className="row group-name shadow-sm rounded ml-4 mr-4 align-items-center">
          <div className="col-3">
            <div>
              <svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
                className="bi bi-people-fill text-secondary"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                />
              </svg>
            </div>
          </div>
          <div className="col-9">
            <h5 className="text-white mt-2">Marketing Team</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h4
              className="text-secondary"
              style={{marginLeft: "30px", marginTop: "3.5em"}}
            >
              Users
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12 m-0 p-0">
            <UserNav
              usersData={usersData}
              setUser={setUser}
              currentUser={user}
            />
          </div>
          <Home></Home>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
