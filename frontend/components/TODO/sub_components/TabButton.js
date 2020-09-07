import React from "react";

function TabButton(props) {
  return (
    <button
      className="tabbutton"
      style={props.style}
      key={props.tab._id}
      id={props.tab._id}
      name={props.tab.state}
      onClick={props.handleTabChange}
    >
      {props.tab.label}
    </button>
  );
}

export default TabButton;
