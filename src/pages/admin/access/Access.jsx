import React, { Component } from "react";
import { Row, Col, Divider } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PowerCard from "components/Access/PowerCard";
import IPPowerCard from "components/Access/IPPowerCard";
export default class Access extends Component {
  state = {
    UserPower: [],
    IPPower: [],
  };
  componentDidMount = () => {
    this.getUserPowerData();
    this.getIPPowerData();
  };
  // 获取系统注册用户人员访问控制数据
  getUserPowerData = () => {
    let res = [
      {
        id: 1,
        name: "系统管理员",
        power: ["logSetting", "managersrank2", "managersrank1"],
      },
      {
        id: 2,
        name: "二级管理员",
        power: ["logSetting", "managersrank2"],
      },
    ];
    this.setState({
      UserPower: res,
    });
  };
  getIPPowerData = () => {
    let res = [
      {
        id: 1,
        ipstart: "192.168.3.10",
        ipend: "192.168.3.60",
        power: [],
      },
      {
        id: 2,
        ipstart: "192.168.3.10",
        ipend: "192.168.3.60",
        power: [],
      },
    ];
    this.setState({
      IPPower: res,
    });
  };

  addIPPower = () => {
    let newip = [
      {
        ipstart: "",
        ipend: "",
        power: [],
      },
    ];
    this.setState({
      IPPower: this.state.IPPower.concat(newip),
    });
  };
  render() {
    let { UserPower, IPPower } = this.state;
    return (
      <div>
        <b style={{ fontSize: 16 }}>系统注册用户人员访问控制</b>
        <Row gutter={16}>
          {UserPower.map((item) => {
            return (
              <Col key={item.id} xs={24} sm={12} md={8} lg={8} xl={6}>
                <PowerCard {...item} />
              </Col>
            );
          })}
        </Row>
        <Divider />
        <b style={{ fontSize: 16 }}>系统IP访问控制</b>
        <Row gutter={16}>
          {IPPower.map((item) => {
            return (
              <Col key={item.id} xs={24} sm={12} md={8} lg={8} xl={6}>
                <IPPowerCard {...item} />
              </Col>
            );
          })}
          <Col style={{ minHeight: 600 }} xs={24} sm={12} md={8} lg={8} xl={6}>
            <div className="power-add" onClick={this.addIPPower}>
              <PlusOutlined style={{ fontSize: 30 }} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
