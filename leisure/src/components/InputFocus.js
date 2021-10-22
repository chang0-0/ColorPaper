import React, { Component } from "react";
import cn from "classnames";

class InputFocus extends Component {
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  };

  render() {
    return <div className={cn("InputFocus")}></div>;
  }
}

export default InputFocus;
