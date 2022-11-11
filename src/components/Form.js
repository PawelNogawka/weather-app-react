import React from "react";

function Form(props) {
  return (
    <form className="form" onSubmit={props.submit}>
      <input
        type="text"
        className="text-input"
        placeholder="Enter city name..."
        value={props.value}
        onChange={props.change}
      />
      <button type="submit" className="form-btn">
        Search
      </button>
    </form>
  );
}

export default Form;

