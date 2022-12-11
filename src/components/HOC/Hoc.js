import React, { useState } from "react";

function Reusable(component) {
  const [count, setCount] = useState(0);

  const counter = () => {
    return setCount((count) => count + 1);
  };
  const newComponent = () => {
    return component;
  };
  newComponent;
}

export default Reusable;
