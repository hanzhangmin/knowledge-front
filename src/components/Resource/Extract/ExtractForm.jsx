import React, { Component } from "react";
import { Form, Input, Select, Button, DatePicker } from "antd";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 16 },
};
export default class ExtractForm extends Component {
  formRef = React.createRef();

  // 初始化时设置表单初始值
  componentDidMount = () => {
    this.formRef.current.resetFields();
    this.formRef.current.setFieldsValue({
      entity1: this.props.initialValues.name,
    });
  };

  // props发生改变时设置表单初始值
  getSnapshotBeforeUpdate = (props, state) => {
    this.formRef.current.resetFields();
    this.formRef.current.setFieldsValue({
      entity1: this.props.initialValues.name,
    });
    return null;
  };

  // getSnapshotBeforeUpdate,componentDidUpdate必须要一起使用
  componentDidUpdate = (props, state) => {};

  render() {
    let { modalLoading, onFinish } = this.props;
    return (
      <Form {...layout} ref={this.formRef} onFinish={onFinish}>
        <Form.Item
          name="entity1"
          label="实体一"
          rules={[
            {
              required: true,
              message: "请选择实体一！",
            },
          ]}>
          <Input placeholder="请选择实体一" disabled />
        </Form.Item>

        <Form.Item
          name="entity2"
          label="实体二"
          rules={[
            {
              required: true,
              message: "请选择实体二！",
            },
          ]}>
          <Select style={{ width: 160 }} placeholder="请选择实体二" allowClear>
            <Select.Option value={0}>实体1</Select.Option>
            <Select.Option value={1}>实体2</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="relationShip"
          label="关系"
          rules={[
            {
              required: true,
              message: "请选择实体间关系",
            },
          ]}>
          <Select
            style={{ width: 160 }}
            placeholder="请选择实体间关系！"
            allowClear>
            <Select.Option value={0}>关系1</Select.Option>
            <Select.Option value={1}>关系2</Select.Option>
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
