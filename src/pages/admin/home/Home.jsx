import React, { Component } from "react";
import { Row, Col, Card } from "antd";
import EntityLine from "pages/admin/resource/pages/Statistics/EntityLine";
import EntityPie from "pages/admin/resource/pages/Statistics/EntityPie";
import InfoLine from "pages/admin/resource/pages/Statistics/InfoLine";
import InfoPie from "pages/admin/resource/pages/Statistics/InfoPie";

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
export default class Home extends Component {
  render() {
    return (
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={14} xl={14}>
          <Card size="small" title="实体数据统计">
            <Row gutter={10}>
              {values.map((item, index) => {
                return (
                  <Col xs={24} sm={12} md={12} lg={8} xl={8} key={index}>
                    <div className="info-box">
                      <div className="info-img">
                        <img
                          className="img-box"
                          style={{ width: 50, height: 50 }}
                          src={item.img}
                          alt=""
                        />
                        <br />
                        <span className="info-tag">{item.name}</span>
                      </div>
                      <div className="info-details">
                        <span className="info-number"> {item.number}</span>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Card>
          <Card
            style={{ marginTop: 10 }}
            size="small"
            title="近年来实体类数据增长曲线">
            <EntityLine></EntityLine>
          </Card>
          <Card
            style={{ marginTop: 10 }}
            size="small"
            title="近年来实体类数据占比分析">
            <EntityPie></EntityPie>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={10} xl={10}>
          <Card size="small" title="信息类数据统计">
            <Row gutter={10}>
              {values2.map((item, index) => {
                return (
                  <Col xs={24} sm={12} md={12} lg={12} xl={12} key={index}>
                    <div className="info-box">
                      <div className="info-img">
                        <img
                          className="img-box"
                          style={{ width: 50, height: 50 }}
                          src={item.img}
                          alt=""
                        />
                        <br />
                        <span className="info-tag">{item.name}</span>
                      </div>
                      <div className="info-details">
                        <span className="info-number"> {item.number}</span>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Card>
          <Card
            style={{ marginTop: 10 }}
            size="small"
            title="近年来信息类数据增长曲线">
            <InfoLine></InfoLine>
          </Card>
          <Card
            style={{ marginTop: 10 }}
            size="small"
            title="近年来信息类数据占比情况">
            <InfoPie></InfoPie>
          </Card>
        </Col>
      </Row>
    );
  }
}
