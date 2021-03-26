import React, { Component } from "react";
import { country } from "options/index";
import { Form, DatePicker, Button, Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { RangePicker } = DatePicker;

export default class SearchBar extends Component {
  render() {
    let { onSearch } = this.props;
    return (
      <div className="align-right">
        <Form layout="inline" onFinish={onSearch}>
          <Form.Item name="keywords" label="关键词">
            <Input placeholder="请输入查询关键字" />
          </Form.Item>
          <Form.Item name="country" label="国别">
            <Select placeholder="请选择国别" allowClear>
              {country.map((item) => {
                return (
                  <Select.Option key={item.id} value={item.cname}>
                    {item.cname}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item name="rangeData" label="成立时间">
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
