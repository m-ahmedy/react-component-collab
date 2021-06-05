import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { FunctionApp, ClassApp } from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <FunctionApp />
    <ClassApp />
  </StrictMode>,
  rootElement
);
