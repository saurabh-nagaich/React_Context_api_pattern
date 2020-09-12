import React from "react";
import { useCountState } from "../ContextStateProvider";

function ComponentD() {
  const [state, dispatch] = useCountState();
  const inc = () => {
    dispatch({ type: "inc" });
  };

  return (
    <div>
      <h1>Component D : {state.count} </h1>
      <button onClick={inc}>INC 1</button>
    </div>
  );
}

export default ComponentD;
