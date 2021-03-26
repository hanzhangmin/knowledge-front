import React, { Component } from "react";
import { Input } from "antd";
import PubSub from "pubsub-js";
import { withRouter } from "react-router-dom";
const { Search } = Input;

class ServerSearchForm extends Component {
  onSearch = (value) => {
    PubSub.publish("server-search", value);
    this.props.history.push("/server/search");
  };
  render() {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Search
          placeholder="实体项目/人员/装备/信息/资讯/文献"
          onSearch={this.onSearch}
          enterButton
        />
      </div>
    );
  }
}
export default withRouter(ServerSearchForm);
