import React from "react";

function TabButton(props) {
  return (
    <button
      // style={props.style} //backgroundcolor and color set by style prop
      className={props.active ? "tabbutton active " : "tabbutton "}
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
