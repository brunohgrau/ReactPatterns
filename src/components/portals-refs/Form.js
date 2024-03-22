import React from "react";
import Preferences from "./Preferences";

const Form = () => {
  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="email">Your email</label>
        <input type="email" id="email" />
      </div>
      <Preferences />
      <button>Submit</button>
    </form>
  );
};

export default Form;
