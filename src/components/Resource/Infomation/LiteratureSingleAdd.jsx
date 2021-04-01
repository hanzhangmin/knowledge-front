import React, { Component } from "react";
import { Form, Input, Select, Button, DatePicker, Upload } from "antd";
import SingleFileUpload from "components/1-common/FileUploader/SingleFileUpload";
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 16 },
};
export default class DynamicSingleAdd extends Component {
  formRef = React.createRef();

  // 初始化时设置表单初始值
  componentDidMount = () => {
    this.formRef.current.resetFields();
    this.formRef.current.setFieldsValue(this.props.requestData);
  };

  // props发生改变时设置表单初始值
  getSnapshotBeforeUpdate = (props, state) => {
    this.formRef.current.resetFields();
    this.formRef.current.setFieldsValue(this.props.requestData);
    return null;
  };
  // getSnapshotBeforeUpdate,componentDidUpdate必须要一起使用
  componentDidUpdate = (props, state) => {};

  normFile = (e) => {
    console.log("Upload event:", e);
    return e.fileList[0];
  };
  // 上传组件filesList改变的回调，在执行上传文件或者是将上传文件删除都需要用到
  changeFileList = (fileList) => {
    // 在这里将 表单的enclosure值更新
  };
  render() {
    let { modalLoading, onFinish, fileList } = this.props;
    return (
      <Form {...layout} ref={this.formRef} onFinish={onFinish}>
        {/* 中文名 */}
        <Form.Item
          name="title"
          label="标题"
          rules={[
            {
              required: true,
              message: "请输入报告标题！",
            },
          ]}>
          <Input placeholder="请输入报告标题" />
        </Form.Item>
        <Form.Item
          name="type"
          label="类别"
          rules={[
            {
              required: true,
              message: "请选择报告类别！",
            },
          ]}>
          <Select style={{ width: 160 }} placeholder="请选择类别" allowClear>
            <Select.Option value={0}>类别1</Select.Option>
            <Select.Option value={1}>类别2</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="author"
          label="作者"
          rules={[
            {
              required: true,
              message: "请输入作者！",
            },
          ]}>
          <Input placeholder="请输入作者" />
        </Form.Item>
        <Form.Item
          name="authorCompany"
          label="作者单位"
          rules={[
            {
              required: true,
              message: "请输入作者单位！",
            },
          ]}>
          <Input placeholder="请输入作者单位" />
        </Form.Item>
        {/* <Form.Item
          name="organization"
          label="机构"
          rules={[
            {
              required: true,
              message: "请选择机构！",
            },
          ]}>
          <Select style={{ width: 160 }} placeholder="请选择机构" allowClear>
            <Select.Option value={0}>机构1</Select.Option>
            <Select.Option value={1}>机构2</Select.Option>
          </Select>
        </Form.Item> */}
        <Form.Item
          name="abstract"
          label="摘要"
          rules={[
            {
              required: true,
              message: "请输入报告摘要！",
            },
          ]}>
          <Input.TextArea placeholder="请输入摘要" rows={4} />
        </Form.Item>
        <Form.Item
          name="keywords"
          label="关键词"
          rules={[
            {
              required: true,
              message: "请输入报告关键词！",
            },
          ]}>
          <Input.TextArea placeholder="请输入关键词" rows={4} />
        </Form.Item>
        <Form.Item
          name="journalName"
          label="期刊名称"
          rules={[
            {
              required: true,
              message: "请输入作者单位！",
            },
          ]}>
          <Input placeholder="请输入作者单位" />
        </Form.Item>
        <Form.Item
          name="volume"
          label="卷号"
          rules={[
            {
              required: true,
              message: "请输入卷号！",
            },
          ]}>
          <Input type="number" placeholder="请输入卷号" />
        </Form.Item>
        <Form.Item
          name="phase"
          label="期号"
          rules={[
            {
              required: true,
              message: "请输入期号！",
            },
          ]}>
          <Input type="number" placeholder="请输入期号" />
        </Form.Item>
        <Form.Item
          name="publishYear"
          label="出版年份"
          rules={[
            {
              required: true,
              message: "请选择报告出版年份！",
            },
          ]}>
          <DatePicker
            style={{ width: 200 }}
            placeholder="请选择报告出版年份"
            picker="year"
          />
        </Form.Item>
        <Form.Item
          name="publishTime"
          label="出版日期"
          rules={[
            {
              required: true,
              message: "请选择报告出版日期！",
            },
          ]}>
          <DatePicker
            style={{ width: 200 }}
            placeholder="请选择报告发布日期"
            format="YYYY-MM-DD"
          />
        </Form.Item>
        <Form.Item
          name="language"
          label="语种"
          rules={[
            {
              required: true,
              message: "请选择报告出版日期！",
            },
          ]}>
          <Select style={{ width: 160 }} placeholder="请选择语种" allowClear>
            <Select.Option value={0}>中</Select.Option>
            <Select.Option value={1}>英语</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="source" label="来源">
          <Select style={{ width: 160 }} placeholder="请选择来源" allowClear>
            <Select.Option value={0}>来源1</Select.Option>
            <Select.Option value={1}>来源2</Select.Option>
          </Select>
        </Form.Item>

        {/* 简介 */}
        <Form.Item
          label="附件"
          name="enclosure"
          valuePropName="fileList"
          getValueFromEvent={this.normFile}>
          <SingleFileUpload
            fileList={fileList}
            changeFileList={this.changeFileList}
          />
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
