import React, { Component } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
class ServerHeadPortrait extends Component {
  onClick = () => {
    this.props.history.push("/server/profile");
  };
  render() {
    return (
      <div
        onClick={this.onClick}
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
        <Avatar size="large" icon={<UserOutlined />} />
      </div>
    );
  }
}
export default withRouter(ServerHeadPortrait);
