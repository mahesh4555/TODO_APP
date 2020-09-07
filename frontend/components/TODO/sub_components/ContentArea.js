import React from "react";

function ContentArea(props) {
  return (
    <div
      style={{
        display: props.active ? "block" : "none",
        padding: "6px 12px",
        border: "4px solid grey",
        // borderTop: "4px solid grey",
        fontSize: "25px",
      }}
      key={props.data._id}
      id={props.data._id}
    >
      <b>{props.data.name}</b>
      <p>{props.data.content}</p>
      <select
        name="state"
        id={props.data._id}
        onChange={props.handleTaskStatusChange}
        style={{ width: "200px", height: "30px" }}
      >
        {/* <option value="1">Todo</option>
            <option value="2">Inprogress</option>
            <option value="3">Completed</option> */}
        {props.dropDownSelect}
      </select>
    </div>
  );
}

export default ContentArea;
