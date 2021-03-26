import React, { Component } from "react";
import { Row, Col } from "antd";
import ReportSingleAdd from "./ReportSingleAdd";
import { singleUpload } from "options/index";
import RichEditer from "components/1-common/RichEditer/index";
import { debounce } from "utils/index";
export default class DynamicEditer extends Component {
  state = {
    modalLoading: false,
    singleUpload: {
      ...singleUpload,
      customRequest: this.singleCustomRequest,
      action: "info/dynamic/singleAdd",
      name: "fileFolder",
      onRemove: this.fileRemove,
      onDownload: this.fileDownload,
    },
    getDefaultValue: "",
  };
  // 初始化时设置表单初始值

  // 修改提交的回调
  onSingleAddFinish = (value) => {
    this.setState({
      modalLoading: true,
    });
  };
  // 文件上传接口
  singleCustomRequest = () => {};

  // 文件删除接口
  fileRemove = () => {};

  // 文件下载接口
  fileDownload = () => {};

  //得到富文本框内容
  getDefaultValue = () => {};

  // 更新文件接口
  updataFile = (value) => {
    console.log(value);
  };
  // 富文本框改变的回调
  onEditorChange = debounce(this.updataFile, 1000);

  render() {
    let { requestData } = this.props;
    let { modalLoading, singleUpload, defaultValue } = this.state;

    return (
      <Row gutter={20}>
        <Col
          xs={10}
          sm={8}
          md={8}
          lg={8}
          xl={6}
          style={{ borderRight: "2px solid rgba(0,0,0,0.1)" }}>
          <ReportSingleAdd
            fileList={requestData.fileList}
            singleUpload={singleUpload}
            requestData={requestData}
            onFinish={this.onSingleAddFinish}
            modalLoading={modalLoading}></ReportSingleAdd>
        </Col>
        <Col xs={14} sm={16} md={16} lg={16} xl={18}>
          <RichEditer
            defaultValue={defaultValue}
            onEditorChange={this.onEditorChange}></RichEditer>
        </Col>
      </Row>
    );
  }
}
