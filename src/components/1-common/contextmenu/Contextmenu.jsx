import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { Menu } from "antd";
import {
  SubnodeOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
// const {Item}=Menu
let defaultOption = {
  visible: false,
  style: { position: "absolute", top: 300, left: 600 },
  addEntity: function () {},
  editerEntity: function () {},
  deleteEntity: function () {},
};
export default class RightMenu extends Component {
  render() {
    let { visible, style, addEntity, editerEntity, deleteEntity } = {
      ...defaultOption,
      ...this.props,
    };
    if (visible)
      return (
        <div style={style}>
          <Menu
            style={{
              border: "1px solid rgba(0, 0, 0, 0.06)",
            }}>
            {/* <Menu.Item onClick={addEntity}>添 &nbsp; &nbsp;加</Menu.Item> */}
            <Menu.Item
              style={{ height: 30, lineHeight: "30px" }}
              icon={<SubnodeOutlined />}
              onClick={addEntity}>
              扩&nbsp; &nbsp;展
            </Menu.Item>
            <Menu.Item
              style={{ height: 30, lineHeight: "30px" }}
              icon={<EditOutlined />}
              onClick={editerEntity}>
              编&nbsp; &nbsp;辑
            </Menu.Item>
            <Menu.Item
              style={{ height: 30, lineHeight: "30px" }}
              icon={<DeleteOutlined />}
              danger
              onClick={deleteEntity}>
              删&nbsp; &nbsp;除
            </Menu.Item>
          </Menu>
        </div>
      );
    return <span></span>;
  }
}
