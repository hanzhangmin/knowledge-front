import React, { Component } from "react";
import { Form, Input, Select, Button } from "antd";
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 16 },
};
// 用户的值，从localStorage中读取
const initialValues = {};
export default class EditerSelf extends Component {
  formRef = React.createRef();
  state = {
    modalLoading: false,
  };
  // 初始化时设置表单初始值
  componentDidMount = () => {
    this.formRef.current.resetFields();
    this.formRef.current.setFieldsValue(initialValues);
  };
  // 用户编辑提交
  onFinish = (value) => {};
  render() {
    let { modalLoading } = this.state;
    return (
      <Form {...layout} ref={this.formRef} onFinish={this.onFinish}>
        <Form.Item
          name="name"
          label="姓名"
          rules={[
            {
              required: true,
              message: "请输入姓名",
            },
          ]}>
          <Input placeholder="请输入姓名" />
        </Form.Item>
        <Form.Item
          name="sex"
          label="性别"
          rules={[
            {
              required: true,
              message: "请选择姓别！",
            },
          ]}>
          <Select style={{ width: 160 }} placeholder="请选择性别" allowClear>
            <Select.Option value={0}>男</Select.Option>
            <Select.Option value={1}>女</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="password"
          label="密码"
          rules={[
            {
              required: true,
              message: "请输入密码！",
            },
          ]}>
          <Input.Password placeholder="请输入密码" />
        </Form.Item>
        <Form.Item
          name="education"
          label="学历"
          rules={[
            {
              required: true,
              message: "请选择学历！",
            },
          ]}>
          <Select style={{ width: 160 }} placeholder="请选择学历" allowClear>
            <Select.Option value="male">male</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="position"
          label="职称"
          rules={[
            {
              required: true,
              message: "请输入职称！",
            },
          ]}>
          <Select style={{ width: 160 }} placeholder="请选择职称" allowClear>
            <Select.Option value="male">male</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="phone"
          label="联系方式"
          rules={[{ required: false, message: "请输入联系方式！" }]}>
          <Input placeholder="请输入联系方式" />
        </Form.Item>
        <Form.Item
          name="power"
          label="权限"
          rules={[
            {
              required: true,
              message: "请选择用户权限！",
            },
          ]}>
          <Select
            style={{ width: 160 }}
            disabled
            placeholder="请选择用户权限"
            allowClear>
            <Select.Option value={0}>服务用户</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button htmlType="submit" type="primary" loading={modalLoading}>
            提交
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
