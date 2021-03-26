import React, { Component } from "react";
import ReactDOM from "react-dom";

class Alert extends Component {
  // 关闭弹框
  confirm = () => {
    this.setState({
      alertStatus: false,
    });
    this.state.closeAlert();
  };
  open = (options) => {
    options = options || {};
    options.alertStatus = true;
    this.setState({
      ...defaultState,
      ...options,
    });
  };

  render() {
    return <div>这是一个弹框！</div>;
  }
}

let div = document.createElement("div");
let props = {};
document.body.appendChild(div);

let Box = ReactDOM.render(React.createElement(Alert, props), div);

export default Box;
