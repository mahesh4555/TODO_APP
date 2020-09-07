import React from "react";

class ContentManager extends React.Component {
  render() {
    console.log(this.props.activeTab);
    // console.log("Calling dispData");

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
          <label>
            <label htmlFor="taskname">Task name </label>
            <input type="text" id="new_task_header" name="new_task_header" />

            <br style={{ lineHeight: "10" }} />
            <label htmlFor="taskcontent">Description </label>
            <input type="text" id="new_task_text" name="new_task_text" />
            <br />
            <select id="new_task_state" name="new_task_state">
              <option value="1">Todo</option>
              <option value="2">Inprogress</option>
              <option value="3">Completed</option>
            </select>
            <br />

            <br />

            <button id="new_task" onClick={this.props.handleAddTodoButtonClick}>
              Add Todo
            </button>
            <br />
            <br />
            <br />

            {/* <input type="button" id="new_task"> */}
          </label>

          <div className="tabs">{this.props.tabManagerState.tabList}</div>
          {this.props.tabManagerState.contentList}
          <br />
          <br />
          <br />
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default ContentManager;
