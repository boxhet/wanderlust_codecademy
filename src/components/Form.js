import React from "react";

function Form({ setCity }) {
  function handleSubmit(e) {
    e.preventDefault();
    const city = e.target.city.value;
    setCity(city);
    e.currentTarget.reset();
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input type="text" id="city" name="city" />
      <button id="button">Submit</button>
    </form>
  );
}

export default Form;
