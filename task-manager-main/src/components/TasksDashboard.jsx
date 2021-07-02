import React, {useEffect, useState} from "react";
import "./TasksDashboard.css";
import Task from "./Task";
import TaskModal from "./TaskModal";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import * as dataHandler from "../lib/DataHandler";

const TasksDashBoard = ({user}) => {
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  const getTasksCountByColor = (color) => {
    const task = tasks.filter((task) => task["taskColor"] === color);
    const doneRed = doneTasks.filter((task) => task["taskColor"] === color);
    return task.length + doneRed.length;
  };

  useEffect(() => {
    if (user) {
      setShowLoader(true);
      const unsubscribeTask = dataHandler.getUserTasksSnapshot(
        user,
        "to-do",
        (data) => {
          console.log(data);
          setShowLoader(false);
          setTasks(data);
        }
      );
      const unsubscribeDone = dataHandler.getUserTasksSnapshot(
        user,
        "done",
        (data) => {
          console.log(data);
          setDoneTasks(data);
        }
      );
      return () => {
        unsubscribeTask();
        unsubscribeDone();
      };
    }
  }, [user]);

  return (
    <div className="tasks">
      <div className="tasks-container">
        <div className="row mt-5">
          <h2>Task-Manager</h2>
        </div>
        <div className="row mt-2">
          <div className="col-8 p-0">
            <h5 className="text-secondary">Welcome {user}</h5>
          </div>
          <div className="col-4 d-flex justify-content-end p-0">
            <div className="urgent m-2 ml-3"></div>
            <p className="mr-1">{getTasksCountByColor("red")}</p>
            <p>Urgent</p>
            <div className="important m-2 ml-3"></div>
            <p className="mr-1">{getTasksCountByColor("orange")}</p>
            <p>Important</p>
            <div className="secondary m-2 ml-3"></div>
            <p className="mr-1">{getTasksCountByColor("purple")}</p>
            <p>Secondary</p>
          </div>
        </div>
        <DragDropContext
          onDragEnd={(result) => {
            console.log(result.destination, result.source, result.draggableId);
            // dataHandler.moveTask(
            //   result.draggableId,
            //   result.source,
            //   result.destination
            // );
          }}
        >
          <div className="row mt-5">
            <Droppable droppableId={"to-do"}>
              {(provided) => (
                <div
                  className="col-6 to-do text-center pr-5"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <div className="row mb-4">
                    <div className="d-flex col-2 justify-content-start p-0">
                      <h4 className="font-weight-bold">To Do</h4>
                      <h4 className="text-secondary ml-2">({tasks.length})</h4>
                    </div>
                    <div className="col-6">
                      <button
                        type="button"
                        className=" btn custom-btn rounded-pill"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        + New Task
                      </button>
                    </div>
                    <TaskModal user={user} />
                  </div>
                  <div className="row">
                    {showLoader && (
                      <div className="col-12 d-flex justify-content-end mt-5">
                        <div className="spinner-border mt-5" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    )}
                    {tasks.length > 0 &&
                      !showLoader &&
                      tasks.map((task, index) => (
                        <Draggable
                          key={index}
                          draggableId={task["id"]}
                          index={index}
                        >
                          {(provided) => (
                            <Task
                              innerRef={provided.innerRef}
                              provided={provided}
                              collection="to-do"
                              taskId={task["id"]}
                              user={user}
                              key={index}
                              text={task["task"]}
                              taskColor={
                                task["taskColor"] ? task["taskColor"] : "purple"
                              }
                            />
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
            <Droppable droppableId={"done"}>
              {(provided) => (
                <div
                  className="col-6 done"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <div className="row mb-4">
                    <h4 className="font-weight-bold">Done</h4>
                    <h4 className="text-secondary ml-2">
                      ({doneTasks.length})
                    </h4>
                  </div>
                  <div className="row">
                    {doneTasks.length > 0 &&
                      !showLoader &&
                      doneTasks.map((task, index) => (
                        <Draggable
                          key={index}
                          draggableId={task["id"]}
                          index={index}
                        >
                          {(provided) => (
                            <Task
                              innerRef={provided.innerRef}
                              provided={provided}
                              collection="done"
                              taskId={task["id"]}
                              user={user}
                              key={index}
                              text={task["task"]}
                              taskColor={
                                task["taskColor"]
                                  ? task["taskColor"]
                                  : undefined
                              }
                            />
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export default TasksDashBoard;
