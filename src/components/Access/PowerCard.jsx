import React, { Component } from "react";
import { Card, Checkbox, Button, Divider } from "antd";
let powers = [
  {
    value: "systemUsers",
    label: "管理服务型用户信息",
    disabled: false,
  },
  {
    value: "managersrank1",
    label: "管理高级管理员用户信息",
    disabled: false,
  },
  {
    value: "managersrank2",
    label: "管理普通管理员用户信息",
    disabled: false,
  },
  {
    value: "dataSource",
    label: "管理数据源信息",
    disabled: false,
  },
  {
    value: "userPower",
    label: "角色权限管理",
    disabled: false,
  },
  {
    value: "logSetting",
    label: "日志管理",
    disabled: false,
  },
];
let defaultValue = ["logSetting", "managersrank2"];
export default class PowerCard extends Component {
  state = {
    checkAll: false,
    defaultValue: defaultValue,
    checkList: defaultValue,
  };
  // 全选按钮的回调
  onCheckAllChange = (value) => {
    if (value.target.checked) {
      let defaultValue = powers.map((power) => {
        return power.value;
      });
      this.setState({
        checkAll: true,
        defaultValue: this.state.defaultValue,
        checkList: defaultValue,
      });
    } else {
      this.setState({
        checkAll: false,
        defaultValue: this.state.defaultValue,
        checkList: [],
      });
    }
    //   if(value.target.checked)
  };
  // 多选框的回调
  onCheckChange = (value) => {
    this.setState({
      checkAll: value.length === powers.length,
      defaultValue: this.state.defaultValue,
      checkList: value,
    });
  };
  render() {
    let { checkAll, defaultValue, checkList } = this.state;
    return (
      <Card
        style={{ marginTop: 10 }}
        title="高级管理员权限设置"
        actions={[<Button> 保存</Button>]}>
        <Checkbox
          onChange={this.onCheckAllChange}
          defaultChecked={checkAll}
          checked={checkAll}>
          全选
        </Checkbox>
        <Divider />
        <Checkbox.Group
          style={{ width: "100%" }}
          value={checkList}
          defaultValue={defaultValue}
          onChange={this.onCheckChange}>
          {powers.map((power) => {
            return (
              <p key={power.value}>
                <Checkbox value={power.value}>{power.label}</Checkbox>
              </p>
            );
          })}
        </Checkbox.Group>
      </Card>
    );
  }
}
