import React, { Component } from "react";
import { Row, Col } from "antd";
import PowerCard from "components/Access/PowerCard";
export default class Access extends Component {
  render() {
    return (
      <Row gutter={16}>
        <Col xs={24} sm={12} md={8} lg={8} xl={6}>
          <PowerCard />
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={6}>
          <PowerCard />
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={6}>
          <PowerCard />
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={6}>
          <PowerCard />
        </Col>
      </Row>
    );
  }
}
