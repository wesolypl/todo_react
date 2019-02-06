import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import CurrentTasks from "./CurrentTasks";
import DoneTasks from "./DoneTasks";

class App extends Component {
  state = {
    newTask: {
      id: null,
      value: "",
      date: "",
      priority: false
    },
    currentTasksList: [
      {
        date: "2019-02-16",
        id: 0,
        priority: true,
        value: "Fryzjer"
      },
      {
        date: "2019-03-15",
        id: 1,
        priority: false,
        value: "Pomalować dom"
      }
    ],
    doneTasksList: [
      {
        date: "2019-02-08",
        doneDate: "6.02.2019, 18:42:35",
        id: 3,
        priority: true,
        value: "Umyć samochód"
      },
      {
        date: "2019-02-07",
        doneDate: "6.02.2019, 21:37:00",
        id: 2,
        priority: false,
        value: "Sprzedać butelki po piwie"
      }
    ]
  };
  handleInput = e => {
    const newTask = this.state.newTask;
    newTask.id = this.state.currentTasksList.length;
    if (e.target.name === "priority") {
      newTask[e.target.name] = e.target.checked;
    } else {
      newTask[e.target.name] = e.target.value;
    }
    this.setState({
      newTask
    });
  };
  handleAddNewTask = e => {
    e.preventDefault();
    if (this.state.newTask.value === "") {
      return alert("error");
    }
    const newTask = this.state.newTask;
    const currentTasksList = this.state.currentTasksList;
    currentTasksList.push(newTask);
    this.setState({
      newTask: {
        id: null,
        value: "",
        date: "",
        priority: false
      }
    });
  };
  handleAddDoneTask = e => {
    const id = parseInt(e.target.value);
    const currentTasksList = this.state.currentTasksList;
    const doneTask = currentTasksList.find(task => task.id === id);
    doneTask.doneDate = new Date().toLocaleString();
    const index = currentTasksList.findIndex(task => task.id === id);
    currentTasksList.splice(index, 1);
    const doneTasksList = this.state.doneTasksList;
    doneTasksList.push(doneTask);
    this.setState({
      doneTasksList,
      currentTasksList
    });
  };
  handleDeleteTask = e => {
    const id = parseInt(e.target.value);
    const currentTasksList = this.state.currentTasksList;
    const index = currentTasksList.findIndex(task => task.id === id);
    currentTasksList.splice(index, 1);
    this.setState({
      currentTasksList
    });
  };
  handleDeleteDoneTask = e => {
    const id = parseInt(e.target.value);
    const doneTasksList = this.state.doneTasksList;
    const index = doneTasksList.findIndex(task => task.id === id);
    doneTasksList.splice(index, 1);
    this.setState({
      doneTasksList
    });
  };
  render() {
    return (
      <div className="app">
        <Form
          handleAddNewTask={this.handleAddNewTask}
          handleInput={this.handleInput}
          newTask={this.state.newTask}
        />
        <CurrentTasks
          currentTasksList={this.state.currentTasksList}
          handleAddDoneTask={this.handleAddDoneTask}
          handleDeleteTask={this.handleDeleteTask}
        />
        <DoneTasks
          doneTasksList={this.state.doneTasksList}
          handleDeleteDoneTask={this.handleDeleteDoneTask}
        />
      </div>
    );
  }
}

export default App;
