import React from "react";
import Closure from "./closures/Closure";
import Clicked from "./HOC/Clicked";
import { Hover } from "./HOC/Hover";

export default function Index() {
  return (
    <div>
      <Clicked />
      <Hover />
      <Closure />
    </div>
  );
}
