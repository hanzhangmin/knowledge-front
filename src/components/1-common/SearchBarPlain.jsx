import React, { Component } from "react";
import { Form, Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default class SearchBarPlain extends Component {
  state = {};
  render() {
    let { onSearch } = this.props;
    return (
      <div className="align-right">
        <Form layout="inline" onFinish={onSearch}>
          <Form.Item name="keywords" label="关键词">
            <Input placeholder="请输入查询关键字" />
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
