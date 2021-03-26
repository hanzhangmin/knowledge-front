import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import CacheRoute, { CacheSwitch } from "react-router-cache-route";
// ConfigProvider引入ConfigProvider全局化配置
import zhCN from "antd/es/locale/zh_CN"; // 引入中文包
import "moment/locale/zh-cn";
import { ConfigProvider } from "antd";
import Frame from "components/Frame";
import { adminRoutes } from "routes/index";
import { flattenRoutes } from "utils/index";

export default class App extends Component {
  flattenAdminRoutes = flattenRoutes(adminRoutes);
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <Frame
          adminRoutes={adminRoutes}
          flattenAdminRoutes={this.flattenAdminRoutes}>
          <CacheSwitch>
            {this.flattenAdminRoutes.map((route) => {
              return (
                <CacheRoute
                  key={route.path}
                  path={route.path}
                  render={(routeProps) => {
                    return <route.component {...routeProps}></route.component>;
                  }}></CacheRoute>
              );
            })}
            <Redirect to="/admin/home"></Redirect>
          </CacheSwitch>
        </Frame>
      </ConfigProvider>
    );
  }
}
