import React, { Component } from "react";
import { Row, Col } from "antd";
export default class DynamicDetails extends Component {
  render() {
    return (
      <Row gutter={20}>
        <Col
          xs={10}
          sm={8}
          md={8}
          lg={6}
          xl={5}
          style={{ borderRight: "2px solid rgba(0,0,0,0.1)" }}>
          <p>标题</p>
          <p>类别</p>
          <p>关键词</p>
          <p>发布时间</p>
          <p>上传时间</p>
          <p>上传人</p>
          <p>来源</p>
          <p>外部链接</p>
        </Col>
        <Col xs={14} sm={16} md={16} lg={18} xl={19}>
          资讯文件内容区
        </Col>
      </Row>
    );
  }
}
