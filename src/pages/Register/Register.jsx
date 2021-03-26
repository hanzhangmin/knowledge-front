import React, { Component } from "react";
import { Card, Form, Input, Button, Divider, Select } from "antd";
import { UserOutlined, LockOutlined, PhoneOutlined } from "@ant-design/icons";

export default class Login extends Component {
  // tiaozhuan = () => {
  //   console.log(this.props.history.push("/test"));
  // };
  // 登录
  onFinish = (value) => {};
  render() {
    return (
      <div className="login-bg" id="components-form-demo-normal-login">
        <div className="login-title">知识体系后台管理系统</div>
        <div className="login-card">
          <Card>
            <h2 style={{ textAlign: "center" }}>注册</h2>
            <Divider />
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}>
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}>
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="请输入用户名"
                />
              </Form.Item>
              <Form.Item
                name="sex"
                rules={[
                  {
                    required: true,
                    message: "请选择姓别！",
                  },
                ]}>
                <Select placeholder="请选择性别" allowClear>
                  <Select.Option value={0}>男</Select.Option>
                  <Select.Option value={1}>女</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="education"
                rules={[
                  {
                    required: true,
                    message: "请选择学历！",
                  },
                ]}>
                <Select placeholder="请选择学历" allowClear>
                  <Select.Option value="male">male</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="position"
                rules={[
                  {
                    required: true,
                    message: "请输入职称！",
                  },
                ]}>
                <Select placeholder="请选择职称" allowClear>
                  <Select.Option value="male">male</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[{ required: false, message: "请输入联系方式！" }]}>
                <Input
                  prefix={<PhoneOutlined className="site-form-item-icon" />}
                  placeholder="请输入联系方式"
                />
              </Form.Item>
              <Form.Item
                name="power"
                rules={[
                  {
                    required: true,
                    message: "请选择用户权限！",
                  },
                ]}>
                <Select disabled placeholder="请选择用户权限" allowClear>
                  <Select.Option value={0}>服务用户</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}>
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="请输入密码"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button">
                  注册
                </Button>
                <p style={{ marginTop: 20 }}>
                  <a href="/login">返回登录！</a>
                </p>
              </Form.Item>
            </Form>
          </Card>
        </div>
        {/* <input type="text" />
        <button onClick={this.tiaozhuan}>跳转</button> */}
        <div className="login-top"></div>
        <div className="login-bottom"></div>
      </div>
    );
  }
}
