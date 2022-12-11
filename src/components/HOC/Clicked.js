import React from "react";
import { useState } from "react";

function Clicked() {
  const [count, setCount] = useState(0);

  const counter = () => {
    return setCount((count) => count + 1);
  };
  return <button onClick={counter}> Clicked {count} times </button>;
}

export default Clicked;
