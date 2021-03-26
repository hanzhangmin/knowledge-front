import React, { Component } from "react";
import { Form, Input, Select, Button, DatePicker } from "antd";
import { country } from "options/index";
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
          label="姓名（中）"
          rules={[
            {
              required: true,
              message: "请输入中文姓名！",
            },
          ]}>
          <Input placeholder="请输入中文姓名" />
        </Form.Item>
        <Form.Item
          name="name"
          label="姓名（英）"
          rules={[
            {
              required: true,
              message: "请输入英文姓名！",
            },
          ]}>
          <Input placeholder="请输入英文姓名" />
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
          name="birthday"
          label="出生日期"
          rules={[
            {
              required: true,
              message: "请选择出生日期！",
            },
          ]}>
          <DatePicker placeholder="请选择出生日期" format="YYYY-MM-DD" />
        </Form.Item>

        <Form.Item
          name="country"
          label="国别"
          rules={[
            {
              required: true,
              message: "请选择国别！",
            },
          ]}>
          <Select style={{ width: 160 }} placeholder="请选择国别" allowClear>
            {country.map((item) => {
              return (
                <Select.Option key={item.id} value={item.cname}>
                  {item.cname}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item
          name="organization"
          label="隶属机构"
          rules={[
            {
              required: true,
              message: "请选择隶属机构！",
            },
          ]}>
          <Select
            style={{ width: 160 }}
            placeholder="请选择隶属机构！"
            allowClear>
            <Select.Option value={0}>隶属机构1</Select.Option>
            <Select.Option value={1}>隶属机构2</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="job" label="职务">
          <Input placeholder="请输入职务" />
        </Form.Item>
        <Form.Item name="filed" label="研究领域">
          <Input placeholder="请输入研究领域" />
        </Form.Item>
        <Form.Item name="desc" label="简介">
          <Input.TextArea placeholder="请输入简介" rows={4} />
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
