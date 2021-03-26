import React, { Component } from "react";
import { Form, Input, Button } from "antd";
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 16 },
};
export default class EntityTypeForm extends Component {
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
      <Form ref={this.formRef} {...layout} onFinish={onFinish}>
        <Form.Item
          name="name"
          label="类型名称"
          rules={[
            {
              required: true,
              message: "请输入实体类型名称",
            },
          ]}>
          <Input placeholder="实体类型名称" />
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
