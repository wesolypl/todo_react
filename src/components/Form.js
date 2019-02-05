import React from "react";

const Form = props => {
  return (
    <form>
      <label>
        Nowe zadanie{" "}
        <input type="text" value={props.input} onChange={props.handleInput} />
      </label>
      <button onClick={props.handleButton}>Dodaj</button>
    </form>
  );
};

export default Form;
