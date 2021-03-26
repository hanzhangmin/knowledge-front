import React, { Component } from "react";
import { Form, Input, Button, Row, Col } from "antd";
const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 10 },
};

export default class ParameterForm extends Component {
  onFinish = (values) => {
    console.log(values);
  };
  state = {
    initialValues: {
      name: "xx知识体系后台管理系统",
      brief:
        "“XXXX知识体系设计与实现”项目就是立足XXXX理论体系，展示XXXX多维属性及相关实体，关联各类相关文献信息，对XXXX实现从信息到知识元及其关联关系的全面揭示。建成可视化、全景式知识服务平台，为机关与科研人员开展相关研究与决策，提供可信、快捷、先进的知识服务保障。",
      address: "优士创新企业提供技术支持",
      dataAddress: "http://192.168.3.20:8080",
    },
  };

  render() {
    let { initialValues } = this.state;
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          width: "100%",
        }}>
        <Row>
          <Col span={10} offset={3}>
            <h1 className="h2">参数设置</h1>
          </Col>
        </Row>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={this.onFinish}
          initialValues={initialValues}>
          <Form.Item
            name="name"
            label="名称"
            rules={[
              {
                // required: false,
                message: "请输入名称",
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="brief"
            label="门户简介"
            rules={[
              {
                // required: false,
                message: "请输入门户简介",
              },
            ]}>
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item
            name="address"
            label="地址"
            rules={[
              {
                // required: false,
                message: "请输入地址",
              },
            ]}>
            <Input.TextArea rows={2} />
          </Form.Item>
          <Form.Item
            name="dataAddress"
            label="数据仓库地址"
            rules={[
              {
                message: "请输入数据仓库地址",
              },
              {
                type: "url",
                message: "请输入正确的url地址",
                // pattern: new RegExp("https?://[-w.]+(:d+)?(/([w/_.]*)?)?"),
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 3 }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
