import React, { Component } from "react";
import { Form, Input, Select, Button, DatePicker } from "antd";
import { country } from "options/index";
const { RangePicker } = DatePicker;
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
          label="项目名称（中）"
          rules={[
            {
              required: true,
              message: "请输入项目中文名称！",
            },
          ]}>
          <Input placeholder="请输入项目中文名称" />
        </Form.Item>
        <Form.Item
          name="name"
          label="项目名称（英）"
          rules={[
            {
              required: true,
              message: "请输入项目英文名称！",
            },
          ]}>
          <Input placeholder="请输入项目英文文名称" />
        </Form.Item>
        <Form.Item
          name="country"
          label="国别"
          rules={[
            {
              required: true,
              message: "请选择项目国别！",
            },
          ]}>
          <Select
            style={{ width: 160 }}
            placeholder="请选择项目国别"
            allowClear>
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
          name="manager"
          label="项目经理"
          rules={[
            {
              required: true,
              message: "请输入项目经理！",
            },
          ]}>
          <Input placeholder="请输入项目经理" />
        </Form.Item>

        <Form.Item
          name="type"
          label="项目类别"
          rules={[
            {
              required: true,
              message: "请选择项目类别！",
            },
          ]}>
          <Select
            style={{ width: 160 }}
            placeholder="请选择项目类别"
            allowClear>
            <Select.Option value={0}>类别1</Select.Option>
            <Select.Option value={1}>类别2</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="funds"
          label="项目经费（万元）"
          rules={[
            {
              required: true,
              message: "请输入项目经费！",
            },
          ]}>
          <Input type="number" placeholder="请输入项目经费" />
        </Form.Item>
        <Form.Item
          name="startDate"
          label="开始时间"
          rules={[
            {
              required: true,
              message: "请选择项目开始时间！",
            },
          ]}>
          <DatePicker placeholder="请选择项目开始时间" format="YYYY-MM-DD" />
        </Form.Item>
        <Form.Item
          name="endDate"
          label="结束时间"
          rules={[
            {
              required: true,
              message: "请选择项目结束时间！",
            },
          ]}>
          <DatePicker placeholder="请选择项目结束时间" format="YYYY-MM-DD" />
        </Form.Item>
        <Form.Item
          name="organization"
          label="研发机构"
          rules={[
            {
              required: true,
              message: "请选择研发机构！",
            },
          ]}>
          <Select
            style={{ width: 160 }}
            placeholder="请选择研发机构"
            allowClear>
            <Select.Option value={0}>机构1</Select.Option>
            <Select.Option value={1}>机构2</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="entrustOrganization" label="委托机构">
          <Select
            style={{ width: 160 }}
            placeholder="请选择委托机构"
            allowClear>
            <Select.Option value={0}>机构1</Select.Option>
            <Select.Option value={1}>机构2</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="relation" label="关系">
          <Input.TextArea placeholder="请输入项目关系" rows={4} />
        </Form.Item>
        <Form.Item name="desc" label="简介">
          <Input.TextArea placeholder="请输入项目简介" rows={4} />
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
