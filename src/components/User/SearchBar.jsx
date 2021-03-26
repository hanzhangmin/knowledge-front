import React, { Component } from "react";
import { Form, Button, Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
// const { RangePicker } = DatePicker;
export default class SearchBar extends Component {
  state = {};
  render() {
    let { onSearch } = this.props;
    return (
      <Form layout="inline" onFinish={onSearch}>
        <Form.Item name="keywords" label="关键词">
          <Input placeholder="请输入查询关键词" />
        </Form.Item>
        <Form.Item name="education" label="学历">
          <Select style={{ width: 160 }} placeholder="请选择学历" allowClear>
            <Select.Option value="male">male</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="position" label="职称">
          <Select style={{ width: 160 }} placeholder="请选择职称" allowClear>
            <Select.Option value="male">male</Select.Option>
          </Select>
        </Form.Item>
        {/* <Form.Item name="rangeData" label="时间段">
          <RangePicker />
        </Form.Item> */}
        <Form.Item>
          <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
            搜索
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
