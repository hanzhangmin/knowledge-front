import React, { Component } from "react";

import { Row, Col, Card } from "antd";
import downloadpng from "@/images/download.png";
import collectionpng from "@/images/collection.png";
import browsepng from "@/images/browse.png";
export default class DataCard extends Component {
  state = {
    browse: 120,
    download: 430,
    collection: 1230,
  };
  getData = () => {};
  render() {
    let { browse, download, collection } = this.state;
    return (
      <Row gutter={20}>
        <Col span={8}>
          <Card
            title="系统总浏览量"
            // extra={<a href="#">More</a>}
          >
            <div
              className="info-box"
              style={{ backgroundColor: "rgba(0,0,0,0)" }}>
              <div className="info-img">
                <img
                  className="img-box"
                  style={{ width: 50, height: 50 }}
                  src={browsepng}
                  alt=""
                />
                <br />
                <span className="info-tag">浏览量</span>
              </div>
              <div className="info-details">
                <span className="info-number"> {browse}</span>
              </div>
            </div>
          </Card>
        </Col>

        <Col span={8}>
          <Card
            title="系统总收藏量"
            // extra={<a href="#">More</a>}
          >
            <div
              className="info-box"
              style={{ backgroundColor: "rgba(0,0,0,0)" }}>
              <div className="info-img">
                <img
                  className="img-box"
                  style={{ width: 50, height: 50 }}
                  src={collectionpng}
                  alt=""
                />
                <br />
                <span className="info-tag">收藏量</span>
              </div>
              <div className="info-details">
                <span className="info-number"> {collection}</span>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="系统总下载量"
            // extra={<a href="#">More</a>}
          >
            <div
              className="info-box"
              style={{ backgroundColor: "rgba(0,0,0,0)" }}>
              <div className="info-img">
                <img
                  className="img-box"
                  style={{ width: 50, height: 50 }}
                  src={downloadpng}
                  alt=""
                />
                <br />
                <span className="info-tag">下载量</span>
              </div>
              <div className="info-details">
                <span className="info-number"> {download}</span>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    );
  }
}
