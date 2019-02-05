import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import List from "./List";

class App extends Component {
  state = {
    input: "",
    list: []
  };
  handleButton = e => {
    e.preventDefault();
    const newItem = { id: this.state.list.length, value: this.state.input };
    const list = this.state.list;
    list.push(newItem);
    this.setState({
      list,
      input: ""
    });
  };
  handleInput = e => {
    this.setState({
      input: e.target.value
    });
  };
  render() {
    return (
      <div className="app">
        <Form
          handleButton={this.handleButton}
          handleInput={this.handleInput}
          input={this.state.input}
        />
        <List list={this.state.list} />
      </div>
    );
  }
}

export default App;
