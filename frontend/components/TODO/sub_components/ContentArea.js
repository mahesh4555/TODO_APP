import React from "react";
import "../stylestab.css";

function ContentArea(props) {
  return (
    <div
      className="contentarea"
      style={{
        display: props.active ? "block" : "none",
        // padding: "6px 12px",
        // border: "2px solid grey",
        // // borderTop: "4px solid grey",
        // fontSize: "25px",
      }}
      key={props.data._id}
      id={props.data._id}
    >
      <b>{props.data.name}</b>
      <p>{props.data.content}</p>

      <select
        className="taskselectbox"
        name="state"
        //changes the select value based on active value
        value={
          props.active == "all"
            ? props.data.currentState
            : props.active
            ? props.clickedTab
            : props.data.currentState
        }
        id={props.data._id}
        onChange={props.handleTaskStatusChange}
        style={{ width: "150px", height: "50px" }}
      >
        {/* <option value="1">Todo</option>
            <option value="2">Inprogress</option>
            <option value="3">Completed</option> */}
        {props.dropDownSelect}
      </select>
      <p style={{ fontSize: "4", fontStyle: "italic" }}>
        Task ID :{props.data.taskId} Created On : {props.data.date}
      </p>
    </div>
  );
}

export default ContentArea;
