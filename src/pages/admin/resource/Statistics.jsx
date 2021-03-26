import React, { Component } from "react";
import { Row, Col, Card, Tag } from "antd";
import EntityLine from "./pages/Statistics/EntityLine";
import EntityPie from "./pages/Statistics/EntityPie";
import InfoLine from "./pages/Statistics/InfoLine";
import InfoPie from "./pages/Statistics/InfoPie";

import DataCard from "./pages/Statistics/DataCard";

import organization from "@/images/organization.png";
import person from "@/images/person.png";
import report from "@/images/report.png";
import project from "@/images/project.png";
import Technology from "@/images/technology.png";
import Equipment from "@/images/equipment.png";
import report1 from "@/images/report1.png";
import video from "@/images/video.png";
import Literature from "@/images/literature.png";
import dynamic from "@/images/dynamic.png";

let values2 = [
  {
    number: 65,
    name: "动态",
    img: dynamic,
  },
  {
    number: 54,
    name: "报告",
    img: report1,
  },
  {
    number: 42,
    name: "报刊文献",
    img: Literature,
  },
  {
    number: 37,
    name: "视频",
    img: video,
  },
];

let values = [
  {
    number: 12,
    name: "机构",
    img: organization,
  },
  {
    number: 23,
    name: "人员",
    img: person,
  },
  {
    number: 54,
    name: "装备",
    img: Equipment,
  },
  {
    number: 12,
    name: "项目",
    img: project,
  },
  {
    number: 65,
    name: "技术",
    img: Technology,
  },

  {
    number: 31,
    name: "报告/条令",
    img: report,
  },
];
export default class Statistics extends Component {
  render() {
    return (
      <div>
        <Row gutter={20}>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Card
              size="small"
              title="近一周数据增长量"
              extra={<Tag color="#f50">周</Tag>}>
              <DataCard values={values} values2={values2}></DataCard>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Card
              size="small"
              title="近一月数据增长量"
              extra={<Tag color="#2db7f5">月</Tag>}>
              <DataCard values={values} values2={values2}></DataCard>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Card
              size="small"
              title="近一年数据增长量"
              extra={<Tag color="#87d068">年</Tag>}>
              <DataCard values={values} values2={values2}></DataCard>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: 20 }} gutter={20}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card size="small" title="近年来实体类数据增长曲线">
              <EntityLine></EntityLine>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card size="small" title="近年来实体类数据分布占比">
              <EntityPie></EntityPie>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: 20 }} gutter={20}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card size="small" title="近年来信息类数据增长曲线">
              <InfoLine></InfoLine>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Card size="small" title="近年来信息类数据分布占比">
              <InfoPie></InfoPie>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
