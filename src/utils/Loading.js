// 系统发生请求时，会在页面显示loading加载中。。。的遮罩层封装
import React from "react";
import ReactDOM from "react-dom";
import { Spin } from "antd";
let div = document.createElement("div");
document.body.appendChild(div);
export function createdLoading() {
  ReactDOM.render(
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        textAlign: "center",
        lineHeight: "100%",
        zIndex: 100000,
        backgroundColor: "rgba(0,0,0,0.3)",
      }}>
      <Spin
        size="large"
        style={{ position: "absolute", top: "50%" }}
        tip="加载中..."></Spin>
    </div>,
    div
  );
}
export function hidenLoading() {
  ReactDOM.render(<div></div>, div);
}
