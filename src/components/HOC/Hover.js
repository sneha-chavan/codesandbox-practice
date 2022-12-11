import React, { useState } from "react";

export function Hover() {
  const [count, setCount] = useState(0);
  const counter = () => {
    return setCount((count) => count + 1);
  };
  return <p onMouseOver={counter}>hover {count} times</p>;
}
