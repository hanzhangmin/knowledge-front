import React, { Component } from "react";
import Dynamic from "./pages/Info/Dynamic";
import Report from "./pages/Info/Report";
import Literature from "./pages/Info/Literature";
import Video from "./pages/Info/Video";
import { Tabs } from "antd";
const { TabPane } = Tabs;
export default class Infomation extends Component {
  render() {
    let { history } = this.props;
    return (
      <Tabs tabPosition="left">
        <TabPane tab="动态资讯" key="1">
          <Dynamic history={history}></Dynamic>
        </TabPane>
        <TabPane tab="报告" key="2">
          <Report history={history}></Report>
        </TabPane>
        <TabPane tab="期刊文献" key="3">
          <Literature history={history}></Literature>
        </TabPane>
        <TabPane tab="视频" key="4">
          <Video history={history}></Video>
        </TabPane>
      </Tabs>
    );
  }
}
