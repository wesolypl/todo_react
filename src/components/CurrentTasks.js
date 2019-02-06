import React from "react";
import "./List.css";
const List = props => {
  const elements = props.currentTasksList.map(element => (
    <li key={"current" + element.id}>
      <span className={element.priority ? "priority" : ""}>
        {element.value}
      </span>
      {element.date !== "" ? ` | do ${element.date}` : ""}{" "}
      <button value={element.id} onClick={props.handleAddDoneTask}>
        Zrobione
      </button>{" "}
      <button value={element.id} onClick={props.handleDeleteTask}>
        X
      </button>
    </li>
  ));

  return (
    <div className="currentTasks">
      <h1>Aktualne zadania</h1>
      <ul>{elements}</ul>
    </div>
  );
};

export default List;
