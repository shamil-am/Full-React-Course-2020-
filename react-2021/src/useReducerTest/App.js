import React, { useReducer } from "react";
import * as actionTypes from "./actionTypes";
import { counterReducer } from "./counterReducer";

const App = () => {
  const [state, dispatch] = useReducer(counterReducer, 10);
  return (
    <div className="container">
      <h1>Count: {state}</h1>
      <button
        onClick={() =>
          dispatch({ type: actionTypes.INCREASE_COUNT, payload: 1 })
        }
      >
        +1
      </button>{" "}
      <button
        onClick={() =>
          dispatch({ type: actionTypes.DECREASE_COUNT, payload: 1 })
        }
      >
        -1
      </button>{" "}
      <button
        onClick={() =>
          dispatch({ type: actionTypes.INCREASE_COUNT, payload: 2 })
        }
      >
        +2
      </button>{" "}
      <button
        onClick={() =>
          dispatch({ type: actionTypes.DECREASE_COUNT, payload: 2 })
        }
      >
        -2
      </button>{" "}
    </div>
  );
};

export default App;
