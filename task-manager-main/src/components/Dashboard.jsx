import React, {useEffect, useState} from "react";
import SideMenu from "./SideMenu";
import TasksDashBoard from "./TasksDashboard";
import * as dataHandler from "../lib/DataHandler";

const Dashboard = () => {
  const [usersData, setUsersData] = useState([]);
  const [user, setUser] = useState("ido");

  const setCurrentUser = (user) => {
    localStorage.setItem("currentUser", user);
    setUser(user);
  };

  useEffect(() => {
    dataHandler.getDataSnapShot((data) => {
      if (!user) {
        setUser(data[0]["name"]);
      }
      setUsersData(data);
    });

    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      setUser(currentUser);
    }
  }, [ ]);

  return (
    <div className="d-flex">
      <SideMenu usersData={usersData} user={user} setUser={setCurrentUser} />
      <TasksDashBoard user={user} />
    </div>
  );
};

export default Dashboard;
