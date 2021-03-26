import React, { Component } from "react";
import { Form, DatePicker, Button, Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { RangePicker } = DatePicker;

export default class SearchBarKT extends Component {
  state = {};
  render() {
    let { onSearch } = this.props;
    return (
      <div className="align-right">
        <Form layout="inline" onFinish={onSearch}>
          <Form.Item name="keywords" label="关键词">
            <Input placeholder="请输入查询关键字" />
          </Form.Item>
          <Form.Item name="country" label="类别">
            <Select style={{ width: 160 }} placeholder="请选择类别" allowClear>
              <Select.Option value={0}>类别1</Select.Option>
              <Select.Option value={1}>类别2</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="rangeData" label="发布时间">
            <RangePicker />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
              搜索
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
