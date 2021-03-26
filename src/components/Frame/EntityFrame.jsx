import React, { Component } from "react";
import { Menu } from "antd";
import { withRouter } from "react-router-dom";
import { EntityRoutes } from "routes/entity";

class EntityFrame extends Component {
  state = {
    defaultSelectedKeys: "/admin/resource/entity/organization/table",
  };

  render() {
    const { defaultSelectedKeys } = this.state;
    return (
      <div style={{ display: "flex", justifyContent: "stretch" }}>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={defaultSelectedKeys}
          style={{ width: 150 }}>
          {EntityRoutes.map((route) => {
            return (
              <Menu.Item
                key={route.path}
                onClick={(p) => this.props.history.push(p.key)}>
                {route.title}
              </Menu.Item>
            );
          })}
        </Menu>
        <div
          style={{ flex: 1, flexShrink: 0, paddingLeft: 10, paddingTop: 10 }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withRouter(EntityFrame);
