import React, { Component } from "react";
import { Form, Input, Select, Button } from "antd";
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 16 },
};
export default class IPsForm extends Component {
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
    let { modalLoading, onFinish } = this.props;
    return (
      <Form {...layout} ref={this.formRef} onFinish={onFinish}>
        <Form.Item
          name="ip"
          label="IP"
          rules={[
            {
              required: true,
              message: "请输入姓名",
            },
          ]}>
          <Input disabled placeholder="请输入姓名" />
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
