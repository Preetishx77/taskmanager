import React from "react";
import "./Task.css";
import EditTaskModal from "./EditTaskModal";
import * as dataHandler from "../lib/DataHandler";
import url from './TaskModal'

const Task = ({
  collection,
  taskId,
  user,
  text,
  taskColor,
  provided,
  innerRef,
}) => {
  const getTaskClass = () => {
    const taskColorClass = `border-${taskColor}`;
    return `task shadow rounded ${taskColorClass}`;
  };

  const Seturl = () => {
    if(url){
      return(
        <div>
              <img src={url} alt="task"></img>
            </div>

      )
    }
  }

  return (
    <div
      className={getTaskClass()}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={innerRef}
    >
      <div className="row" style={{marginTop: "3.5rem"}}>
        <div className="offset-1"></div>
        <div className="col-7 d-flex justify-content-start">
          {text && <h5>{text}</h5>}
          <div>
            {/* <Seturl/> */}
          </div>
          
        </div>
        <div className="col-1">
          {collection === "done" && (
            <svg
              onClick={() => {
                dataHandler.markDoneTaskAsTodo(user, taskId, text, taskColor);
              }}
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
              className="bi bi-arrow-bar-left cursor-pointer"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"
              />
            </svg>
          )}
          {collection === "to-do" && (
            <svg
              onClick={() => {
                dataHandler.markTaskAsDone(user, taskId, text, taskColor);
              }}
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
              className="bi bi-check2 cursor-pointer"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
              />
            </svg>
          )}
        </div>
        <div className="col-1">
          <div data-toggle="modal" data-target={`#${taskId}`}>
            <svg
              width="1.5em"
              height="1.5em"
              viewBox="0 0 16 16"
              className="bi bi-pencil cursor-pointer"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
              />
            </svg>
          </div>
          <EditTaskModal
            user={user}
            taskId={taskId}
            collection={collection}
            text={text}
            taskColor={taskColor}
          />
        </div>
        <div className="col-1">
          <svg
            onClick={() => {
              dataHandler.deleteTaskById(user, taskId, collection);
            }}
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            className="bi bi-trash cursor-pointer"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fillRule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Task;
