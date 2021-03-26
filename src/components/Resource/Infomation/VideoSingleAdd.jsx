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
              message: "请输入视频标题！",
            },
          ]}>
          <Input placeholder="请输入视频标题" />
        </Form.Item>
        <Form.Item
          name="type"
          label="类别"
          rules={[
            {
              required: true,
              message: "请选择视频类别！",
            },
          ]}>
          <Select style={{ width: 160 }} placeholder="请选择类别" allowClear>
            <Select.Option value={0}>类别1</Select.Option>
            <Select.Option value={1}>类别2</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
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
        </Form.Item>
        <Form.Item
          name="keywords"
          label="关键词"
          rules={[
            {
              required: true,
              message: "请输入视频关键词！",
            },
          ]}>
          <Input.TextArea placeholder="请输入关键词" rows={4} />
        </Form.Item>
        <Form.Item
          name="buildDate"
          label="发布日期"
          rules={[
            {
              required: true,
              message: "请选择视频发布日期！",
            },
          ]}>
          <DatePicker
            style={{ width: 200 }}
            placeholder="请选择视频发布日期"
            format="YYYY-MM-DD"
          />
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
