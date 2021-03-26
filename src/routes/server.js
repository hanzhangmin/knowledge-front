import Home from "../pages/server/home/index";
import Entity from "../pages/server/entity/index";
import Search from "../pages/server/search/index";
import Info from "../pages/server/info/index";
import Profile from "../pages/server/profile/index";

export const serverRoutes = [
  {
    path: "/server/home",
    component: Home,
    title: "首页",
    showNav: true,
  },
  {
    path: "/server/entity",
    component: Entity,
    title: "实体",
    showNav: true,
  },
  {
    path: "/server/search",
    component: Search,
    title: "搜索",
    showNav: false,
  },
  {
    path: "/server/info",
    component: Info,
    title: "信息",
    showNav: true,
  },
  {
    path: "/server/profile",
    component: Profile,
    title: "个人信息",
    showNav: false,
  },
];
