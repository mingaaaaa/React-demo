import React from "react";
import store from "../redux/store";
import { NavLink } from "react-router-dom";

function Other() {
  const calculate = (type) => {
    store.dispatch({
      type,
    });
  };
  return (
    <div>
      Other
      <div>
        <NavLink to="/01">index</NavLink>
      </div>
      <div>
        <button onClick={() => calculate("add")}>+</button>
      </div>
      <div>
        <button onClick={() => calculate("decrease")}>-</button>
      </div>
    </div>
  );
}

export default Other;
