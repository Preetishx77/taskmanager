import React from "react";
import "./SelectColorButtons.css";

const SelectColorButtons = ({taskColor, setTaskColor}) => {
  const setBtnClass = (color) => {
    if (color === taskColor) {
      return `btn btn-${color} btn-${color}-selected rounded-pill`;
    }
    return `btn btn-${color} rounded-pill`;
  };

  return (
    <div className="row mb-5 mt-4">
      <div className="col-4 text-center">
        <p> Urgent</p>
        <button
          className={setBtnClass("red")}
          onClick={() => {
            setTaskColor("red");
          }}
        ></button>
      </div>
      <div className="col-4 text-center">
        <p> Important</p>
        <button
          className={setBtnClass("orange")}
          onClick={() => {
            setTaskColor("orange");
          }}
        ></button>
      </div>
      <div className="col-4 text-center">
        <p> Secondary</p>
        <button
          className={setBtnClass("purple")}
          onClick={() => {
            setTaskColor("purple");
          }}
        ></button>
      </div>
    </div>
  );
};

export default SelectColorButtons;
