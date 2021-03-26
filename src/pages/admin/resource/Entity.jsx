import React, { Component } from "react";
import Organization from "./pages/Entity/Organization";
import OrganizationChart from "./pages/Entity/OrganizationChart";
import Person from "./pages/Entity/Person";
import PersonChart from "./pages/Entity/PersonChart";
import Project from "./pages/Entity/Project";
import ProjectChart from "./pages/Entity/ProjectChart";
import Equipment from "./pages/Entity/Equipment";
import EquipmentChart from "./pages/Entity/EquipmentChart";
import Technology from "./pages/Entity/Technology";
import TechnologyChart from "./pages/Entity/TechnologyChart";
import Report from "./pages/Entity/Report";
import ReportChart from "./pages/Entity/ReportChart";
// import { Redirect } from "react-router-dom";
// import CacheRoute, { CacheSwitch } from "react-router-cache-route";
// import EntityFrame from "../../../components/Frame/EntityFrame";
// import { EntityRoutes } from "routes/entity";
import { Tabs } from "antd";
const { TabPane } = Tabs;
export default class Entity extends Component {
  render() {
    let { history } = this.props;
    return (
      // <EntityFrame>
      //   <CacheSwitch>
      //     {EntityRoutes.map((route) => {
      //       return (
      //         <CacheRoute
      //           key={route.path}
      //           path={route.path}
      //           render={(routeProps) => {
      //             return <route.component {...routeProps}></route.component>;
      //           }}></CacheRoute>
      //       );
      //     })}
      //     <Redirect to="/admin/home"></Redirect>
      //   </CacheSwitch>
      // </EntityFrame>
      <Tabs tabPosition="left">
        <TabPane tab="机构（图）" key="1">
          <OrganizationChart history={history}></OrganizationChart>
        </TabPane>
        <TabPane tab="机构（表）" key="11">
          <Organization history={history}></Organization>
        </TabPane>
        <TabPane tab="人员（图）" key="2">
          <PersonChart history={history}></PersonChart>
        </TabPane>
        <TabPane tab="人员（表）" key="12">
          <Person history={history}></Person>
        </TabPane>
        <TabPane tab="项目（图）" key="3">
          <ProjectChart history={history}></ProjectChart>
        </TabPane>
        <TabPane tab="项目（表）" key="13">
          <Project history={history}></Project>
        </TabPane>
        <TabPane tab="装备（图）" key="4">
          <EquipmentChart history={history}></EquipmentChart>
        </TabPane>
        <TabPane tab="装备（表）" key="14">
          <Equipment history={history}></Equipment>
        </TabPane>
        <TabPane tab="技术（图）" key="5">
          <TechnologyChart history={history}></TechnologyChart>
        </TabPane>
        <TabPane tab="技术（表）" key="15">
          <Technology history={history}></Technology>
        </TabPane>
        <TabPane tab="报告/条令（图）" key="6">
          <ReportChart history={history}></ReportChart>
        </TabPane>
        <TabPane tab="报告/条令（表）" key="16">
          <Report history={history}></Report>
        </TabPane>
      </Tabs>
    );
  }
}
