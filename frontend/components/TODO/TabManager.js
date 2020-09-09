import React from "react";
import ContentManager from "./ContentManager";
// import tabsData from "./tabsData";

import TabButton from "./sub_components/TabButton";
import ContentArea from "./sub_components/ContentArea";

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

  taskStatusDropDownOptionsSet = (clickedTab) => {
    console.log("taskStatusDropDownOptionsSet");
    const dropDownSelect = this.props.tabs.map((tab) => {
      console.log("tab.state:", tab.state);
      console.log("clickedTab:", clickedTab);
      if (tab.state != 5) {
        return <option value={tab.state}> {tab.label}</option>;
      }
    });
    this.setState({
      dropDownSelect: dropDownSelect,
    });
  };

  handleTaskStatusChange = async (event) => {
    this.setState({
      isTodoPressed: false,
    });

    console.log("handleTaskStatusChange");
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

  handleTabChange = (event) => {
    console.log("Tab clicked:", event.target.name);
    const { id, name } = event.target;

    this.setState({
      activeTab: name,
      isTodoPressed: false,
    });
    this.dispData(name);
  };

  handleAddTodoButtonClick = async (event) => {
    console.log("calling handleAddTodoButtonClick");
    let new_task_header = document.getElementById("new_task_header").value;
    // let new_task_text = document.getElementById("new_task_text").value;

    let new_task_textarea = document.getElementById("new_task_textarea").value;
    let new_task_state = parseInt(
      document.getElementById("new_task_state").value
    );

    if (new_task_header.trim() == "" || new_task_textarea.trim() == "") {
      if (new_task_header.trim() == "" && new_task_textarea.trim() == "")
        alert("Please enter taskname and description ");
      else if (new_task_header.trim() == "") alert("Please enter taskname");
      else if (new_task_textarea.trim() == "")
        alert("Please enter description");
    } else {
      document.getElementById("new_task_header").value = "";
      document.getElementById("new_task_textarea").value = "";
      this.setState({
        isTodoPressed: true,
      });

      console.log("new_task_header :", new_task_header);
      // console.log("new_task_text :", new_task_text);
      console.log("new_task_state :", new_task_state);
      console.log("new_task_textarea :", new_task_textarea);

      // let taskId = "";
      let dataLength = this.props.data.length;
      // console.log("dataLength:", dataLength);
      // // console.log
      // let last_id = this.props.data[dataLength].taskId;
      // let new_id = last_id + 1;
      // console.log("new_id:", new_id);
      // let r = Math.random().toString(36).substring(7);
      let r = Math.floor(Math.random() * 10000000);
      let r_s = "TP_" + r;
      var today = new Date();

      var date =
        today.toLocaleString("default", { month: "short" }) +
        " " +
        today.getDate() +
        " " +
        today.getFullYear() +
        "  ";
      var time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      date = date + time;

      let data = {
        taskId: r_s,
        date: date,
        name: new_task_header,
        content: new_task_textarea,
        currentState: new_task_state,
      };
      await this.props.AddTodoData(data);
      //I got the response data   after adding to the serverand saved to this.state.data
      //So commenting the below function
      // await this.props.FetchTodoData();
      await this.dispData(1);
    }
  };

  dispData = (clickedTab) => {
    arr = [];
    console.log("dispData");
    this.taskStatusDropDownOptionsSet(clickedTab);

    // this.props.tabsData.forEach(this.labelCollect);
    console.log("tabList");
    let style1 = { color: "black", backgroundColor: "#666" };
    let style2 = { color: "black", backgroundColor: "#f1f1f1" };
    const tabList = this.props.tabs.map((tab) => {
      console.log("clickedTab :", clickedTab);
      console.log("tab.state :", tab.state);
      let active = tab.state == clickedTab ? true : false;
      let style = tab.state == clickedTab ? style1 : style2;
      console.log("tab.label :", tab.label);
      console.log("tab ------ active :", style);

      // let style1={ color: "blue"  }
      // let style2={ color: "none"  }

      return (
        <TabButton
          className="tabbutton"
          key={tab._id}
          style={style}
          active={active}
          tab={tab}
          handleTabChange={this.handleTabChange}
        />
      );
      // this.props.ToggleLoading(false);
    });

    console.log("contentList");
    const contentList = this.props.data.map((data) => {
      let active = data.currentState == clickedTab ? true : false;
      if (clickedTab == 5) {
        //display all tasks when all button is clicked
        active = "all";
        console.log("ACTIVE :", active);
      }
      console.log("activeTab :", this.state.activeTab);
      console.log("data.currentState :", data.currentState);
      console.log("clickedTab :", clickedTab);

      console.log("tab_id :", data._id);

      console.log("active :", active);
      if (active) {
        return (
          <ContentArea
            key={data._id}
            active={active}
            data={data}
            handleTaskStatusChange={this.handleTaskStatusChange}
            dropDownSelect={this.state.dropDownSelect}
            clickedTab={clickedTab}
          />
        );
      }
    });

    this.setState({
      tabList: tabList,
      contentList: contentList,
      isTodoPressed: true,
    });
  };

  //both using Promise and async await are similar, refer to S44 code
  async componentDidMount() {
    console.log("TabManageer componentDidMount");
    await this.props.FetchTodoTabsAndData();
    await this.taskStatusDropDownOptionsSet();
    await this.dispData(1);

    setTimeout(() => {
      this.setState({
        isTodoPressed: true,
      });
    }, 3000);
  }

  render() {
    // this.props.ToggleLoading(false);
    return (
      <ContentManager
        // FetchInitialState={this.FetchInitialState}
        handleAddTodoButtonClick={this.handleAddTodoButtonClick}
        tabManagerState={this.state}
        // Toggleloading={this.props.Toggleloading}
      />
    );
  }
}

export default TabManager;
