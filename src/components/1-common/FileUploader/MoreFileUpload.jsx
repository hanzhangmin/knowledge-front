import React, { Component } from "react";
import { Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { moreUpload } from "options/index";
export default class componentName extends Component {
  // 初始化时设置表单初始值
  componentDidMount = () => {
    Object.assign(moreUpload, {
      ...this.props.moreUpload,
      customRequest: this.moreCustomRequest,
      name: "file",
    });
  };
  // 自定义上传行为
  moreCustomRequest = (value) => {
    alert(value);
    //   上传结果返回之后，将文件在服务器获取的路径取出来返回给form表单;无论是删除还是添加，都要更新最新的fileList返回给form表单，进行添加或者编辑操作
  };

  render() {
    return (
      <div>
        <Upload.Dragger {...moreUpload}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">点击或者拖拽上传</p>
          <p className="ant-upload-hint">支持单个文件上传</p>
        </Upload.Dragger>
      </div>
    );
  }
}
