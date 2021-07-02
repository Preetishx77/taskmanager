import React, {useState, useEffect} from "react";
import "./EditTaskModal.css";
import SelectColorButtons from "./SelectColorButtons";
import * as dataHandler from "../lib/DataHandler";

const EditTaskModal = ({user, taskId, collection, text, taskColor}) => {
  const [newTask, setNewTask] = useState(text);
  const [color, setColor] = useState(taskColor);
  const [id, setId] = useState(taskId);

  useEffect(() => {
    setNewTask(text);
    setColor(taskColor);
    setId(taskId);
  }, [taskId, text, taskColor]);

  return (
    <>
      <div
        className="modal fade"
        style={{paddingTop: "20rem", paddingLeft: "5rem"}}
        id={id}
        tabIndex="1"
        role="dialog"
        aria-labelledby={id}
        aria-hidden="true"
      >
        <div className="modal-dialog editModal" role="document">
          <div className="modal-content rounded shadow">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Task:
              </h5>
              <h5 className="modal-title ml-3">{text}</h5>
              <button
                onClick={() => {
                  setNewTask("");
                }}
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body border-0">
              <SelectColorButtons taskColor={color} setTaskColor={setColor} />
              <textarea
                onChange={(e) => {
                  setNewTask(e.target.value);
                }}
                value={newTask}
                className="form-control"
                placeholder="task.."
                aria-label="With textarea"
              ></textarea>
            </div>
            <div className="modal-footer border-0 p-0 m-0">
              <button
                onClick={() => {
                  dataHandler.editTaskById(
                    user,
                    taskId,
                    newTask,
                    color,
                    collection
                  );
                  setNewTask("");
                }}
                type="button"
                data-dismiss="modal"
                className="btn btn-secondary save-task-btn m-0"
              >
                <h5>Save Changes</h5>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTaskModal;
