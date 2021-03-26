import React, { Component } from "react";
import { Form, Input, Select, Button } from "antd";
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 16 },
};

export default class MyForm extends Component {
  formRef = React.createRef();
  // 初始化时设置表单初始值
  componentDidMount = () => {
    this.formRef.current.resetFields();
    this.formRef.current.setFieldsValue(this.props.initialValues);
  };

  // props发生改变时设置表单初始值
  getSnapshotBeforeUpdate = (props, state) => {
    this.formRef.current.resetFields();
    this.formRef.current.setFieldsValue(this.props.initialValues);
    return null;
  };
  // getSnapshotBeforeUpdate,componentDidUpdate必须要一起使用
  componentDidUpdate = (props, state) => {};
  render() {
    let { onFinish, modalLoading } = this.props;
    return (
      <Form {...layout} ref={this.formRef} onFinish={onFinish}>
        <Form.Item
          name="name"
          label="姓名"
          rules={[
            {
              required: true,
              message: "请输入姓名！",
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
              message: "请输入姓名",
            },
          ]}>
          <Select style={{ width: 160 }} placeholder="请选择性别" allowClear>
            <Select.Option value={0}>男</Select.Option>
            <Select.Option value={1}>女</Select.Option>
          </Select>
        </Form.Item>
        {/* <Form.Item
          name="password"
          label="密码"
          rules={[
            {
              required: true,
              message: "请输入密码！",
            },
          ]}>
          <Input.Password placeholder="请输入密码" />
        </Form.Item> */}
        <Form.Item
          name="education"
          label="学历"
          rules={[
            {
              required: true,
              message: "请输入学历！",
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
            placeholder="请选择用户权限"
            allowClear>
            <Select.Option value={0}>服务用户</Select.Option>
            <Select.Option value={1}>业务员</Select.Option>
            <Select.Option value={2}>普通管理员</Select.Option>
            <Select.Option value={3}>高级管理员</Select.Option>
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
