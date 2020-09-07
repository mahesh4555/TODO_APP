import React from "react";
import ContentManager from "./ContentManager";
// import tabsData from "./tabsData";
import "./stylestab.css";
let arr = [];
class TabManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      // tabsData: props.tabsData,
      tabList: "",
      contentList: "",
      dropDownSelect: "",
      isTodoPressed: false,
    };
  }

  handleTab = (event) => {
    console.log("Tab clicked:", event.target.name);
    const { id, name } = event.target;

    this.setState({
      activeTab: name,
    });
    this.dispData(name);
  };
  handleSelectChange = async (event) => {
    console.log("handleSelectChange");
    const { name, id, value } = event.target;
    console.log("name:", name);
    console.log("id:", id);
    console.log("value:", value);

    let data = {
      _id: id,
      changedState: parseInt(value),
    };
    await this.props.UpdateTodoData(data);
    //I got the response data   after adding to the serverand saved to this.state.data
    //So commenting the below function
    // await this.props.FetchTodoData();
    await this.dispData(this.state.activeTab);
  };

  labelCollect = (tabs) => {
    arr.push(tabs.label);
  };

  dropDownOptionsSet = () => {
    const dropDownSelect = this.props.tabs.map((tab) => {
      return <option value={tab.state}>{tab.label}</option>;
    });
    this.setState({
      dropDownSelect: dropDownSelect,
    });
  };

  dispData = (clickedTab) => {
    arr = [];
    console.log("dispData");

    // this.props.tabsData.forEach(this.labelCollect);
    console.log("tabList");
    let style1 = { color: "black", backgroundColor: "#666" };
    let style2 = { color: "black", backgroundColor: "#f1f1f1" };
    const tabList = this.props.tabs.map((tab) => {
      console.log("clickedTab :", clickedTab);
      console.log("tab.state :", tab.state);
      let active = "dummy";
      let style = tab.state == clickedTab ? style1 : style2;
      console.log("tab.label :", tab.label);
      console.log("tab ------ active :", style);

      // let style1={ color: "blue"  }
      // let style2={ color: "none"  }

      return (
        <button
          // style={{ color: active ? "blue" : "none" }}
          style={style}
          key={tab._id}
          id={tab._id}
          name={tab.state}
          onClick={this.handleTab}
        >
          {tab.label}
        </button>
      );
    });

    console.log("contentList");
    const contentList = this.props.data.map((data) => {
      let active = data.currentState == clickedTab ? true : false;
      console.log("activeTab :", this.state.activeTab);
      console.log("data.currentState :", data.currentState);
      console.log("clickedTab :", clickedTab);

      console.log("tab_id :", data._id);

      console.log("active :", active);
      return (
        <div
          style={{
            display: active ? "block" : "none",
            padding: "6px 12px",
            border: "1px solid #ccc",
            borderTop: "none",
          }}
          key={data._id}
          id={data._id}
        >
          <b>{data.name}</b>
          <p>{data.content}</p>
          <select name="state" id={data._id} onChange={this.handleSelectChange}>
            {/* <option value="1">Todo</option>
            <option value="2">Inprogress</option>
            <option value="3">Completed</option> */}
            {this.state.dropDownSelect}
          </select>
        </div>
      );
    });

    this.setState({
      tabList: tabList,
      contentList: contentList,
    });
  };

  HandleWelcomButton = async () => {
    console.log("calling HandleWelcomButton");
    this.setState({
      isTodoPressed: false,
    });

    await this.props.HandleButtonClick();
    await this.dispData(1);
    this.setState({
      isTodoPressed: true,
    });
  };

  handleAddTodoButton = async (event) => {
    console.log("calling handleAddTodoButton");
    let new_task_header = document.getElementById("new_task_header").value;
    let new_task_text = document.getElementById("new_task_text").value;
    let new_task_state = parseInt(
      document.getElementById("new_task_state").value
    );
    console.log("new_task_header :", new_task_header);
    console.log("new_task_text :", new_task_text);
    console.log("new_task_state :", new_task_state);

    let data = {
      name: new_task_header,
      content: new_task_text,
      currentState: new_task_state,
    };
    await this.props.AddTodoData(data);
    //I got the response data   after adding to the serverand saved to this.state.data
    //So commenting the below function
    // await this.props.FetchTodoData();
    await this.dispData(1);
  };

  //both using Promise and async await are similar, refer to S44 code
  async componentDidMount() {
    await this.props.HandleButtonClick();
    await this.dropDownOptionsSet();
    await this.dispData(1);
    this.setState({
      isTodoPressed: true,
    });
  }
  // componentDidUpdate() {
  //   this.dispData();
  // }
  // componentWillUpdate() {
  //   this.dispData();
  // }

  render() {
    console.log(this.state.activeTab);
    // console.log("Calling dispData");

    return (
      <div>
        <br />
        <button onClick={this.HandleWelcomButton}>
          Press Me to Todo Tasks
        </button>
        {/* <Button as="input" type="button" value="Input" /> */}
        <br />
        <br />

        <div
          style={{
            display: this.state.isTodoPressed ? "block" : "none",
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

            <button id="new_task" onClick={this.handleAddTodoButton}>
              Add Todo
            </button>
            <br />
            <br />
            <br />

            {/* <input type="button" id="new_task"> */}
          </label>

          <div className="tabs">{this.state.tabList}</div>
          {this.state.contentList}
          <br />
          <br />
          <br />
          {/* <p>Hello</p>
          <label for="labels"><p>Hello</p></label>
          <select name="currentState" id="label" onChange>
            <option value="Todo">Todo</option>
            <option value="Inprogress">Inprogress</option>
            <option value="Completed">Completed</option>
          </select> */}
          {/* <div>
          <h2>Content managers</h2>
          <h2>Content managers</h2>
        </div>
        <h2>Content managers</h2> */}
          {/* <p></p> */}
          {/* <ul id="parent">
            <li>Box #1</li>
            <li>Box #2</li>
            <li>Box #3</li>
          </ul> */}
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

export default TabManager;
