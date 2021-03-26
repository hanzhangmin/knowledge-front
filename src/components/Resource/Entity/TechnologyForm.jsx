import React, { Component } from "react";
import { Form, Input, Select, Button, DatePicker } from "antd";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 16 },
};
export default class OrganizationForm extends Component {
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
          name="cname"
          label="技术名称（中）"
          rules={[
            {
              required: true,
              message: "请输入技术中文名称！",
            },
          ]}>
          <Input placeholder="请输入技术中文名称" />
        </Form.Item>
        <Form.Item
          name="name"
          label="技术名称（英）"
          rules={[
            {
              required: true,
              message: "请输入技术英文名称！",
            },
          ]}>
          <Input placeholder="请输入技术英文名称" />
        </Form.Item>
        <Form.Item
          name="buildDate"
          label="提出日期"
          rules={[
            {
              required: true,
              message: "请选择技术提出日期！",
            },
          ]}>
          <DatePicker placeholder="请选择技术提出日期！" format="YYYY-MM-DD" />
        </Form.Item>
        <Form.Item
          name="organization"
          label="发布机构"
          rules={[
            {
              required: true,
              message: "请选择技术发布机构！",
            },
          ]}>
          <Select
            style={{ width: 160 }}
            placeholder="请选择技术发布机构！"
            allowClear>
            <Select.Option value={0}>机构1</Select.Option>
            <Select.Option value={1}>机构2</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="desc" label="简介">
          <Input.TextArea placeholder="请输入技术简介" rows={4} />
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
