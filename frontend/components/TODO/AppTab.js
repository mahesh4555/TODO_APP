import React from "react";
import TabManager from "./TabManager";
import Header from "./sub_components/Header";
import loading from "../../assets/loading.gif";
// import { tabs, data, tabsData } from "./tabsData";

// const tabs = [
//   { _id: 1, state: 1, label: "Tab " },
//   { _id: 2, state: 2, label: "Tab 2" },
//   { _id: 3, state: 3, label: "Tab 3" },
// ];
// const tabs = [];
// const data = [];
// const data = [
//   { _id: 1, currentState: 1, name: "", content: 1 },
//   { _id: 2, currentState: 2, name: "", content: "HAI" },
// ];

class AppTab extends React.Component {
  constructor() {
    super();
    this.state = {
      tabs: [],
      data: [],
      // isLoading: true,
    };
  }

  FetchTodoData = async () => {
    console.log("FetchTodoData");
    await fetch("http://192.168.43.216:4000/todo/getData")
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA");
        console.log(data);
        this.setState({ data: data });
      });
  };

  FetchTodoTabs = async () => {
    console.log("FetchTodoTabs");
    await fetch("http://192.168.43.216:4000/todo/getTabs")
      .then((response) => response.json())
      .then((tabs) => {
        console.log("TABS");
        console.log(tabs);
        this.setState({ tabs: tabs });
      });
  };

  AddTodoData = async (data) => {
    console.log("AddTodoData");
    let responseData = await fetch("http://192.168.43.216:4000/todo/addData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      mode: "cors",
      body: JSON.stringify(data),
    });

    responseData = await responseData.json();
    console.log("Response :", responseData);
    await this.state.data.push(responseData);
    console.log("Response added to state.data ");
  };

  UpdateTodoData = async (data) => {
    console.log("UpdateTodoData");
    console.log("data._id :", data._id);
    let http_url = "http://192.168.43.216:4000/todo/updateState/" + data._id;
    // let responseData = await fetch( "http://192.168.43.216:4000/todo/updateData/${data._id}", {
    let responseData = await fetch(http_url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },

      mode: "cors",
      body: JSON.stringify(data),
    });
    responseData = await responseData.json();
    console.log("Response :", responseData);
    // await this.state.data.push(responseData);
    console.log("Response added to state.data ");
    let state_data = this.state.data;
    console.log("state_data :", state_data);
    let state_data_update = await state_data.map((data_element) => {
      if (data_element._id == responseData._id) {
        data_element.currentState = responseData.currentState;
      }
      return data_element;
    });
    await console.log("state_data_update :", state_data_update);
    await this.setState({
      data: state_data_update,
    });
    await console.log("this.state.data :", this.state.data);
    await console.log("Response added to state.data ");
  };

  FetchTodoTabsAndData = async () => {
    console.log("calling FetchTodoTabsAndData");
    await this.FetchTodoTabs();
    await this.FetchTodoData();
  };

  // ToggleLoading = (state) => {
  //   this.setState({
  //     isLoading: state,
  //   });
  // };

  componentDidMount() {
    console.log("componentDidMount");

    // this.FetchTodoTabs();
  }

  render() {
    console.log("render in AppTab");

    return (
      <div>
        <Header />
        <TabManager
          // tabsData={this.state.tabsData}
          tabs={this.state.tabs}
          data={this.state.data}
          FetchTodoTabsAndData={this.FetchTodoTabsAndData}
          AddTodoData={this.AddTodoData}
          FetchTodoData={this.FetchTodoData}
          UpdateTodoData={this.UpdateTodoData}

          // tabList={tabList}
          // contentList={contentList}
        />
      </div>
    );
  }
}

export default AppTab;
