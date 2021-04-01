import React, { Component } from "react";
import { Card, Checkbox, Button, Divider, Form, Input, Select } from "antd";
const { Option } = Select;
let powers = [
  {
    value: "onlyRead",
    label: "仅查阅",
    disabled: false,
  },
  {
    value: "retrieval",
    label: "检索",
    disabled: false,
  },
];
const selectBefore = (
  <Select defaultValue="http://" className="select-before">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);
export default class PowerCard extends Component {
  formRef = React.createRef();
  state = {
    checkAll: false,
  };
  componentDidMount = () => {
    let { id, ipstart, ipend, power } = this.props;
    this.setState({
      id: id,
      defaultValue: power,
      checkList: power,
      ipstart,
      ipend,
    });
    this.formRef.current.resetFields();
    this.formRef.current.setFieldsValue({
      ipstart,
      ipend,
    });
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
  // 保存修改
  saveChange = () => {};
  render() {
    let { checkAll, defaultValue, checkList } = this.state;
    return (
      <Card
        style={{ marginTop: 10 }}
        title={
          <div>
            <p>ip区间：</p>
            <Form
              ref={this.formRef}
              name="basic"
              initialValues={{ remember: true }}>
              <Form.Item name="ipstart">
                <Input addonBefore={selectBefore} />
              </Form.Item>
              <Form.Item name="ipend">
                <Input addonBefore={selectBefore} />
              </Form.Item>
            </Form>
          </div>
        }
        actions={[<Button onClick={this.saveChange}> 保存</Button>]}>
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
