/**
 * 将页面分为两类
 * 1. 主要路由，比如登录，注册，404等路由
 * 2. 需要验证的路由
 */

import {
  SlidersOutlined,
  ClusterOutlined,
  SolutionOutlined,
  ProjectOutlined,
  ControlOutlined,
  HomeOutlined,
  BookOutlined,
} from "@ant-design/icons";
//登录界面
import Login from "pages/Login/Login";
//注册界面
import Register from "pages/Register/Register";
// 404界面
import Page404 from "pages/404";
// 首页
import Home from "pages/admin/home/Home";
// 参数设置
import Parameter from "pages/admin/parameter/Parameter";
// 数据资源管理
import Infomation from "../pages/admin/resource/Infomation";
import Entity from "pages/admin/resource/Entity";
import Statistics from "pages/admin/resource/Statistics";
// 字典管理
import EntityType from "pages/admin/dictionary/EntityType";
// 用户管理
import User from "pages/admin/user/User";
import Manager from "pages/admin/user/Manager";
import UserExamine from "pages/admin/user/UserExamine";
import IPs from "pages/admin/user/IPs";
// 日志管理
import Search from "pages/admin/log/Search";
import System from "pages/admin/log/System";
// 访问控制
import Access from "pages/admin/access/Access";
// test
// import Test from "../pages/test/index";
export const mainRoutes = [
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/404",
    component: Page404,
  },
];

export const adminRoutes = [
  {
    path: "/admin/home",
    component: Home,
    icon: HomeOutlined,
    title: "首页",
    breadcrumbName: "首页",
  },
  {
    path: "/admin/parameter",
    component: Parameter,
    icon: ClusterOutlined,
    title: "参数设置",
    breadcrumbName: "参数设置",
  },
  {
    path: "/admin/resource",
    icon: SlidersOutlined,
    title: "数据资源管理",
    children: [
      {
        path: "/admin/resource/entity",
        parentKey: "/admin/resource",
        component: Entity,
        title: "实体管理",
        breadcrumbName: `数据资源管理 > 实体管理`,
      },
      {
        path: "/admin/resource/info",
        parentKey: "/admin/resource",
        component: Infomation,
        title: "信息管理",
        breadcrumbName: `数据资源管理 > 信息管理`,
      },
      {
        path: "/admin/resource/statistics",
        parentKey: "/admin/resource",
        component: Statistics,
        title: "统计分析",
        breadcrumbName: `数据资源管理 > 统计分析`,
      },
    ],
  },
  {
    path: "/admin/dictionary",
    title: "字典管理",
    breadcrumbName: "字典管理",
    icon: BookOutlined,
    children: [
      {
        path: "/admin/dictionary/entitytype",
        parentKey: "/admin/dictionary",
        component: EntityType,
        title: "类别管理",
        breadcrumbName: `字典管理 > 类别管理`,
      },
    ],
  },
  {
    path: "/admin/user",
    title: "用户管理",
    breadcrumbName: "用户管理",
    icon: SolutionOutlined,
    children: [
      {
        path: "/admin/user/profile",
        parentKey: "/admin/user",
        component: User,
        title: "用户信息",
        breadcrumbName: `用户管理 > 用户信息`,
      },
      {
        path: "/admin/user/manager",
        component: Manager,
        parentKey: "/admin/user",
        title: "管理员信息",
        breadcrumbName: `用户管理 > 管理员信息`,
      },
      {
        path: "/admin/user/IPs",
        component: IPs,
        parentKey: "/admin/user",
        title: "IP管控",
        breadcrumbName: `用户管理 > IP管控`,
      },
      {
        path: "/admin/user/search",
        parentKey: "/admin/user",
        component: UserExamine,
        title: "用户审核",
        breadcrumbName: `用户管理 > 用户审核`,
      },
    ],
  },
  {
    path: "/admin/log",
    icon: ProjectOutlined,
    title: "日志管理",
    breadcrumbName: "日志管理",
    children: [
      {
        path: "/admin/log/system",
        component: System,
        parentKey: "/admin/log",
        title: "系统日志",
        breadcrumbName: `日志管理 > 系统日志`,
      },
      {
        path: "/admin/log/search",
        parentKey: "/admin/log",
        component: Search,
        title: "搜索日志",
        breadcrumbName: `日志管理 > 搜索日志`,
      },
    ],
  },
  {
    path: "/admin/access",
    component: Access,
    icon: ControlOutlined,
    title: "访问控制",
    breadcrumbName: `访问控制`,
  },
];
