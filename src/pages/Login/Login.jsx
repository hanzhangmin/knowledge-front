import React, { Component } from "react";
import { Card, Form, Input, Checkbox, Button, Divider } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { common_post } from "../../api/index";
export default class Login extends Component {
  // tiaozhuan = () => {
  //   console.log(this.props.history.push("/test"));
  // };
  // 登录
  onFinish = (value) => {
    console.log(value);
    common_post("/admin/login", value);
    localStorage.setItem("token", 1);
    this.props.history.replace("/admin/home");
  };
  render() {
    // console.log(this.props);
    return (
      <div className="login-bg" id="components-form-demo-normal-login">
        <div className="login-title">知识体系后台管理系统</div>
        <div className="login-card">
          <Card>
            <h2 style={{ textAlign: "center" }}>登录</h2>
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
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a className="login-form-forgot" href="">
                  忘记密码
                </a>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button">
                  登录
                </Button>
                <p style={{ marginTop: 20 }}>
                  <a href="/register">去注册！</a>
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
