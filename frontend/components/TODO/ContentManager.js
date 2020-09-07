import React from "react";

import loading from "../../assets/loading.gif";
import "./stylestab.css";
class ContentManager extends React.Component {
  render() {
    console.log(this.props.activeTab);
    // console.log("Calling dispData");

    if (!this.props.tabManagerState.isTodoPressed) {
      return (
        <div>
          <img
            // style={{
            //   position: "fixed",
            //   right: "0px",
            //   bottom: "0px",
            // }}
            src={loading}
            alt={"Loading"}
          />
        </div>
      );
    }

    return (
      <div>
        <br />
        {/* <button onClick={this.props.FetchInitialState}>Press Me to Todo Tasks</button> */}

        <br />
        <br />

        <div
          style={{
            display: this.props.tabManagerState.isTodoPressed
              ? "block"
              : "none",
          }}
        >
          <div className="body">
            <label>
              <label htmlFor="taskname" style={{ fontSize: "20px" }}>
                Task name{" "}
              </label>
              <input
                type="text"
                id="new_task_header"
                name="new_task_header"
                className="inputfield"
                style={{
                  width: "325px",
                  height: "30px",
                  // backgroundColor: "#d1d1d1",
                }}
              />

              <br style={{ lineHeight: "100px" }} />
              <br />
              <label htmlFor="taskcontent" style={{ fontSize: "18px" }}>
                Description{" "}
              </label>
              {/* <input
              type="text"
              id="new_task_text"
              name="new_task_text"
              style={{ width: "200px", height: "30px" }}
            />
            <br /> */}
              <br />
              <textarea
                id="new_task_textarea"
                name="txtarea"
                className="inputfield"
                style={{
                  width: "400px",
                  height: "100px",
                  // backgroundColor: "#d1d1d1",
                }}
              ></textarea>
              <br />
              <br />
              <label htmlFor="taskcontent" style={{ fontSize: "20px" }}>
                Status{" "}
              </label>
              <select
                id="new_task_state"
                name="new_task_state"
                className="inputfield"
                style={{
                  width: "200px",
                  height: "50px",
                }}
              >
                <option value="1">Todo</option>
                <option value="2">Inprogress</option>
                <option value="3">Completed</option>
              </select>
              <br />

              <br />

              <button
                id="new_task"
                onClick={this.props.handleAddTodoButtonClick}
                // style={{ fontSize: "20px" }}
                className="button"
              >
                Add Task
              </button>
              <br />
              <br />
              <br />

              {/* <input type="button" id="new_task"> */}
            </label>
          </div>
          <div className="bodydown">
            <div className="tabs">{this.props.tabManagerState.tabList}</div>
            <br /> {this.props.tabManagerState.contentList}
          </div>
        </div>
      </div>
    );
  }
}

export default ContentManager;
