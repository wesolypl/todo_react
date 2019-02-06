import React from "react";
import "./Form.css";
const Form = props => {
  return (
    <form>
      <label>
        Nowe zadanie:{" "}
        <input
          type="text"
          name="value"
          value={props.newTask.value}
          onChange={props.handleInput}
        />
      </label>
      <label>
        <input
          type="checkbox"
          name="priority"
          checked={props.newTask.priority}
          onChange={props.handleInput}
        />
        Priorytet
      </label>
      <label>
        Do kiedy:{" "}
        <input
          type="date"
          name="date"
          value={props.newTask.date}
          onChange={props.handleInput}
        />
      </label>
      <button onClick={props.handleAddNewTask}>Dodaj</button>
    </form>
  );
};

export default Form;
