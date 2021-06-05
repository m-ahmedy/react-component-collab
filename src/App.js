import React, { Component } from "react";
import "./styles.css";

export function FunctionApp() {
  return React.createElement(
    /* Type     */ "div",
    /* Props    */ { className: "card" },
    /* Children */ React.createElement(
      /* Type     */ "h2",
      /* Props    */ null,
      /* Children */ "Hello from a Functional Component!"
    )
  );
}

/*
Mahmoud Ahmedy
m
Andrew Qolta
Omar
Fadi
mohammed ameen
*/

export class ClassApp extends Component {
  render() {
    const ui = (
      <div className="card">
        <h2>Hello from a Class Component!</h2>
      </div>
    );
    console.log(ui);

    return ui;
  }
}

//console.log(<FunctionApp />);
console.log(React.createElement(FunctionApp, null, null));

// console.log(<div className="card" />);
// console.log(React.createElement("div", { className: "card" }, null))
