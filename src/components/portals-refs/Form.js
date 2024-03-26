import React, { useState } from "react";
import Preferences from "./Preferences";

const Form = () => {
  const [wantsNewProdInfo, setWantsNewProdInfo] = useState(false);
  const [wantsProdUpdateInfo, setWantsProdUpdateInfo] = useState(false);
  function updateProdInfoHandler(selection) {
    // using one shared update handler function is optional
    // you could also use two separate functions (passed to Preferences) as props
    if (selection === "pref-new") {
      setWantsNewProdInfo((prevPref) => !prevPref);
    } else if (selection === "pref-update") {
      setWantsProdUpdateInfo((prevPref) => !prevPref);
    }
  }
  function reset() {
    setWantsNewProdInfo(false);
    setWantsProdUpdateInfo(false);
  }
  function submitHandler(event) {
    event.preventDefault();
    // state values can be used here
    reset();
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="email">Your email</label>
        <input type="email" id="email" />
      </div>
      <Preferences
        newProdInfo={wantsNewProdInfo}
        prodUpdateInfo={wantsProdUpdateInfo}
        onUpdateInfo={updateProdInfoHandler}
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;
