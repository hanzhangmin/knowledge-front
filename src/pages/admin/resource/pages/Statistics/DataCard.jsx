import React, { Component } from "react";

import { Row, Col, Divider } from "antd";

export default class componentName extends Component {
  render() {
    let { values, values2 } = this.props;
    return (
      <Row gutter={10}>
        <Col span={24}>
          <p>实体类数据增长量：zz</p>
        </Col>
        {values.map((item) => {
          return (
            <Col span={12}>
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

        <Divider style={{ margin: 10 }}></Divider>
        <Col span={24}>
          <p>信息类数据增长量：zz</p>
        </Col>
        {values2.map((item) => {
          return (
            <Col span={12}>
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
    );
  }
}
