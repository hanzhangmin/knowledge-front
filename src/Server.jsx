import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import CacheRoute, { CacheSwitch } from "react-router-cache-route";
// ConfigProvider引入ConfigProvider全局化配置
import zhCN from "antd/es/locale/zh_CN"; // 引入中文包
import "moment/locale/zh-cn";
import { ConfigProvider } from "antd";
import Frame from "servercomponents/Frame/index";
import { serverRoutes } from "./routes/server";

export default class Server extends Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <Frame serverRoutes={serverRoutes}>
          <CacheSwitch>
            {serverRoutes.map((route) => {
              return (
                <CacheRoute
                  key={route.path}
                  path={route.path}
                  render={(routeProps) => {
                    return <route.component {...routeProps}></route.component>;
                  }}></CacheRoute>
              );
            })}
            <Redirect to="/server/home"></Redirect>
          </CacheSwitch>
        </Frame>
      </ConfigProvider>
    );
  }
}
