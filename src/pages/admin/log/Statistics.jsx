import React, { Component } from "react";
import { Row, Col, Card, Divider, Button } from "antd";
import LogLine from "./pages/LogLine";
import LogPie from "./pages/LogPie";
import DataCard from "./pages/DataCard";
import SearchBar from "components/Log/StatisticsSearch";
export default class Statistics extends Component {
  state = {
    searchData: {
      keywords: "",
      startTime: "",
      endTime: "",
    },
  };
  // 点击搜索按钮的回调
  onSearch = (values) => {
    console.log(values);
  };
  render() {
    let { searchData } = this.state;
    return (
      <div
        style={{
          maxWidth: 1280,
          width: "100%",
          margin: "0 auto",
          padding: "0 10px",
        }}
        className="ant-card-bordered">
        <Row style={{ marginTop: 20 }} gutter={20}>
          <Col span={24}>
            <SearchBar onSearch={this.onSearch} />
          </Col>
        </Row>
        <Row style={{ marginTop: 20 }} gutter={20}>
          <Col span={24}>
            <DataCard {...searchData} onSearch={this.onSearch} />
          </Col>
        </Row>
        <Divider />
        <Row style={{ marginTop: 20 }} gutter={20}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card size="small" title="近年来实体类数据增长曲线">
              <LogLine {...searchData}></LogLine>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card size="small" title="近年来实体类数据分布占比">
              <LogPie></LogPie>
            </Card>
          </Col>
        </Row>
        <Divider />
        <p style={{ textAlign: "center" }}>
          <Button type="primary">下载</Button>
        </p>
      </div>
    );
  }
}
