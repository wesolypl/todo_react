import React from "react";
import "./List.css";
const List = props => {
  const elements = props.currentTasksList.map(element => (
    <li key={"current" + element.id}>
      <span className={element.priority ? "priority" : ""}>
        {element.value}
      </span>
      {element.date !== "" ? ` | do ${element.date}` : ""}{" "}
      <button
        value={element.id}
        onClick={props.handleAddDoneTask}
        className="btn-done"
      >
        Zrobione
      </button>{" "}
      <button
        value={element.id}
        onClick={props.handleDeleteTask}
        className="btn-delete"
      >
        X
      </button>
    </li>
  ));

  return (
    <div className="currentTasks">
      <h2>
        Aktualne zadania
        <span>
          {props.currentTasksList.length > 0
            ? `(${props.currentTasksList.length})`
            : ""}
        </span>
      </h2>
      <ul>{elements}</ul>
    </div>
  );
};

export default List;
