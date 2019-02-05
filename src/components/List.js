import React from "react";
const List = props => {
  const elements = props.list.map(element => (
    <li key={element.id}>{element.value}</li>
  ));

  return <ul>{elements}</ul>;
};

export default List;
