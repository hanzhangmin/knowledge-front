import React from "react";
import ReactDOM from "react-dom";
import Contextmenu from "./Contextmenu.jsx";
let div = document.createElement("div");
div.style.zIndex = 10000;
document.body.appendChild(div);
// 创建组件
function createMenu(props) {
  ReactDOM.render(React.createElement(Contextmenu, props), div);
}

// 更新组件
function updataMenu(props) {
  ReactDOM.render(React.createElement(Contextmenu, props), div);
}

// 销毁组件 当从一个页面离开的时候销毁
function destroyMenu() {
  ReactDOM.unmountComponentAtNode(div);
  document.body.removeChild(div);
}

const RightClickMenu = {
  createMenu,
  destroyMenu,
  updataMenu,
};
export default RightClickMenu;
