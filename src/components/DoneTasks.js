import React from "react";
import "./List.css";
const DoneTasks = props => {
  const elements = props.doneTasksList.map(element => (
    <li key={"done" + element.id}>
      <span>{element.value}</span>
      {element.date !== "" ? ` (zrobić do ${element.date})` : ""}
      <p>
        - Potwierdzono wykonianie {element.doneDate}{" "}
        <button value={element.id} onClick={props.handleDeleteDoneTask}>
          X
        </button>
      </p>
    </li>
  ));
  return (
    <div className="doneTasks">
      <h2>Wykonane zadania</h2>
      <ul>{elements}</ul>
    </div>
  );
};

export default DoneTasks;
