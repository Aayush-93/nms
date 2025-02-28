import React, { Component } from "react";
import Tempinp from "./Tempinp";
import Verdict from "./Verdict";

export class Calc extends Component {
  render() {
    return (
      <div>
        <Tempinp />
        <Verdict />
      </div>
    );
  }
}

export default Calc;
