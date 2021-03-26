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
        {/* 中文名 */}
        <Form.Item
          name="cname"
          label="机构名称（中）"
          rules={[
            {
              required: true,
              message: "请输入机构中文名称！",
            },
          ]}>
          <Input placeholder="请输入机构中文名称" />
        </Form.Item>
        {/* 英文名 */}
        <Form.Item
          name="name"
          label="机构名称（英）"
          rules={[
            {
              required: true,
              message: "请输入机构英文名称！",
            },
          ]}>
          <Input placeholder="请输入机构英文文名称" />
        </Form.Item>
        {/* 国别 */}
        <Form.Item
          name="country"
          label="国别"
          rules={[
            {
              required: true,
              message: "请选择机构国别！",
            },
          ]}>
          <Select
            style={{ width: 160 }}
            placeholder="请选择机构国别"
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
        {/* 负责人 */}
        <Form.Item
          name="person"
          label="负责人"
          rules={[
            {
              required: true,
              message: "请选择负责人！",
            },
          ]}>
          <Select style={{ width: 160 }} placeholder="请选择负责人" allowClear>
            <Select.Option value={0}>负责人1</Select.Option>
            <Select.Option value={1}>负责人2</Select.Option>
          </Select>
        </Form.Item>
        {/* 成立日期 */}
        <Form.Item
          name="buildDate"
          label="成立日期"
          rules={[
            {
              required: true,
              message: "请选择机构成立日期！",
            },
          ]}>
          <DatePicker placeholder="请选择机构成立日期" format="YYYY-MM-DD" />
        </Form.Item>
        {/* 地址 */}
        <Form.Item name="address" label="详细地址">
          <Input placeholder="请输入机构详细地址" />
        </Form.Item>
        {/* 隶属机构 */}
        <Form.Item name="parentorganization" label="隶属机构">
          <Select
            style={{ width: 160 }}
            placeholder="请选择隶属机构"
            allowClear>
            <Select.Option value={0}>机构1</Select.Option>
            <Select.Option value={1}>机构2</Select.Option>
          </Select>
        </Form.Item>
        {/* 简介 */}
        <Form.Item name="desc" label="简介">
          <Input.TextArea placeholder="请输入机构简介" rows={4} />
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
