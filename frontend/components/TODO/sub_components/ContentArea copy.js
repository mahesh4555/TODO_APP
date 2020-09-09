import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../stylestab.css";
import "../stylesmodal.css";

const NewModal = (props) => {
  return (
    <Popup
      onOpen={props.handleSaveButton}
      trigger={
        <button className="button" onClick={props.handleSaveButton}>
          {" "}
          Open New Modal{" "}
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <div className="header"> Update Task </div>
          <div className="content">
            <label htmlFor="taskname">Task name </label>
            <input
              type="text"
              style={{
                width: "325px",
                height: "30px",
                // backgroundColor: "#d1d1d1",
              }}
              defaultValue="Task name"
            />
            <br />
            <label htmlFor="taskcontent">Description </label>

            <br />
            <textarea
              id="new_task_textarea"
              name="txtarea"
              style={{
                width: "600px",
                height: "100px",
                // backgroundColor: "#d1d1d1",
              }}
              defaultValue="Description"
            ></textarea>
          </div>
          <div className="actions">
            <Popup
              trigger={<button className="button"> Trigger </button>}
              position="top center"
              nested
            >
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                magni omnis delectus nemo, maxime molestiae dolorem numquam
                mollitia, voluptate ea, accusamus excepturi deleniti ratione
                sapiente! Laudantium, aperiam doloribus. Odit, aut.
              </span>
            </Popup>
            <button
              className="button"
              onClick={() => {
                console.log("modal closed ");
                close();
              }}
            >
              close modal
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

class ContentArea extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleEditButton = () => {
    console.log("handleEditButton");
  };

  handleSaveButton = () => {
    console.log("handleSaveButton is pressed");
    console.log("handleSaveButton is pressed1");
    console.log("handleSaveButton is pressed2");
  };

  render() {
    let a = 0;

    // if (a == 3) {
    //   return <NewModal />;
    // }
    if (a == 1) {
      return (
        <div
          className="contentarea"
          style={{
            //this.props.active is used earlier, here we may remove it
            display: this.props.active ? "block" : "none",
          }}
          key={this.props.data._id}
          id={this.props.data._id}
        >
          <br /> <br />
          {/* {editingTemplate} */}
          <label htmlFor="taskname" style={{ fontSize: "20px" }}>
            Task name{" "}
          </label>
          <input
            type="text"
            id="new_task_header"
            name="new_task_header"
            className="inputfield"
            style={{
              width: "200px",
              height: "10px",
              // backgroundColor: "#d1d1d1",
            }}
          />
          <br />
          <label htmlFor="taskcontent">Description </label>
          <br />
          <textarea
            id="new_task_textarea"
            name="txtarea"
            className="inputfield"
            style={{
              width: "400px",
              height: "50px",
              // backgroundColor: "#d1d1d1",
            }}
          ></textarea>
          <br />
          <button id="new_task">Save</button>
          <br /> <br />
        </div>
      );
    } else if (a == 0) {
      return (
        <div
          className="contentarea"
          style={{
            //this.props.active is used earlier, here we may remove it
            display: this.props.active ? "block" : "none",
            // padding: "6px 12px",
            // border: "2px solid grey",
            // // borderTop: "4px solid grey",
            // fontSize: "25px",
          }}
          key={this.props.data._id}
          id={this.props.data._id}
        >
          <b>{this.props.data.name}</b>
          <p>{this.props.data.content}</p>

          <select
            className="taskselectbox"
            name="state"
            //changes the select value based on active value
            value={
              this.props.active == "all"
                ? this.props.data.currentState
                : this.props.active
                ? this.props.clickedTab
                : this.props.data.currentState
            }
            id={this.props.data._id}
            onChange={this.props.handleTaskStatusChange}
            style={{ width: "150px", height: "50px" }}
          >
            {/* <option value="1">Todo</option>
                <option value="2">Inprogress</option>
                <option value="3">Completed</option> */}
            {this.props.dropDownSelect}
          </select>
          <p style={{ fontSize: "4", fontStyle: "italic" }}>
            Task ID :{this.props.data.taskId} Created On :{" "}
            {this.props.data.date}
          </p>
          <button
            id={this.props.data._id}
            name="editTask"
            onClick={this.handleEditButton}
            // style={{ fontSize: "20px" }}
            className="button"
          >
            Edit
          </button>

          <NewModal handleSaveButton={this.handleSaveButton} />
        </div>
      );
    }
  }
}

export default ContentArea;

// const editingTemplate = (
//   <div>
//     <label htmlFor="taskname">Task name </label>
//     <input type="text" />
//     <br />
//     <label htmlFor="taskcontent">Description </label>

//     <br />
//     <textarea id="new_task_textarea" name="txtarea"></textarea>
//     <br />
//     <button id="new_task">Save</button>
//   </div>
// );

// let container1 = (
//   <div
//     className="contentarea"
//     style={{
//       //this.props.active is used earlier, here we may remove it
//       display: this.props.active ? "block" : "none",
//       // padding: "6px 12px",
//       // border: "2px solid grey",
//       // // borderTop: "4px solid grey",
//       // fontSize: "25px",
//     }}
//     key={this.props.data._id}
//     id={this.props.data._id}
//   >
//     <b>{this.props.data.name}</b>
//     <p>{this.props.data.content}</p>

//     <select
//       className="taskselectbox"
//       name="state"
//       //changes the select value based on active value
//       value={
//         this.props.active == "all"
//           ? this.props.data.currentState
//           : this.props.active
//           ? this.props.clickedTab
//           : this.props.data.currentState
//       }
//       id={this.props.data._id}
//       onChange={this.props.handleTaskStatusChange}
//       style={{ width: "150px", height: "50px" }}
//     >
//       {/* <option value="1">Todo</option>
//         <option value="2">Inprogress</option>
//         <option value="3">Completed</option> */}
//       {this.props.dropDownSelect}
//     </select>
//     <p style={{ fontSize: "4", fontStyle: "italic" }}>
//       Task ID :{this.props.data.taskId} Created On : {this.props.data.date}
//     </p>
//     <button
//       id="edit_task"
//       // onClick={}
//       // style={{ fontSize: "20px" }}
//       className="button"
//     >
//       Edit
//     </button>
//   </div>
// );
// const container2 = (
//   <div
//     className="contentarea"
//     style={{
//       //this.props.active is used earlier, here we may remove it
//       display: this.props.active ? "block" : "none",
//       // padding: "6px 12px",
//       // border: "2px solid grey",
//       // // borderTop: "4px solid grey",
//       // fontSize: "25px",
//     }}
//     key={this.props.data._id}
//     id={this.props.data._id}
//   >
//     {/* {editingTemplate} */}
//     <label htmlFor="taskname" style={{ fontSize: "20px" }}>
//       Task name{" "}
//     </label>
//     <input
//       type="text"
//       id="new_task_header"
//       name="new_task_header"
//       className="inputfield"
//       style={{
//         width: "200px",
//         height: "10px",
//         // backgroundColor: "#d1d1d1",
//       }}
//     />

//     <br />
//     <label htmlFor="taskcontent">Description </label>

//     <br />
//     <textarea
//       id="new_task_textarea"
//       name="txtarea"
//       className="inputfield"
//       style={{
//         width: "400px",
//         height: "50px",
//         // backgroundColor: "#d1d1d1",
//       }}
//     ></textarea>
//     <br />
//     <button id="new_task">Save</button>
//   </div>
// );
