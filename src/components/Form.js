import React from "react";
import "./Form.css";
const Form = props => {
  return (
    <form>
      <label>
        <input
          type="text"
          name="value"
          placeholder="Nowe zadanie"
          value={props.newTask.value}
          onChange={props.handleInput}
        />
      </label>
      <label>
        <span />
        <input
          type="checkbox"
          name="priority"
          className="checkbox"
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
      <button onClick={props.handleAddNewTask} className="btn-add">
        Dodaj
      </button>
    </form>
  );
};

export default Form;
