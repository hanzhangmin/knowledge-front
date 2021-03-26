import OrganizationTable from "../pages/admin/resource/pages/Entity/Organization";
import OrganizationChart from "../pages/admin/resource/pages/Entity/OrganizationChart";
import EquipmentTable from "../pages/admin/resource/pages/Entity/Equipment";
import EquipmentChart from "../pages/admin/resource/pages/Entity/EquipmentChart";
import PersonTable from "../pages/admin/resource/pages/Entity/Person";
import PersonChart from "../pages/admin/resource/pages/Entity/PersonChart";
import ProjectTable from "../pages/admin/resource/pages/Entity/Project";
import ProjectChart from "../pages/admin/resource/pages/Entity/ProjectChart";
import ReportTable from "../pages/admin/resource/pages/Entity/Report";
import ReportChart from "../pages/admin/resource/pages/Entity/ReportChart";
import TechnologyTable from "../pages/admin/resource/pages/Entity/Technology";
import TechnologyChart from "../pages/admin/resource/pages/Entity/TechnologyChart";
export const EntityRoutes = [
  {
    path: "/admin/resource/entity/organization/table",
    component: OrganizationTable,
    title: "机构（表）",
  },
  {
    path: "/admin/resource/entity/organization/chart",
    component: OrganizationChart,
    title: "机构（图）",
  },
  {
    path: "/admin/resource/entity/person/table",
    component: PersonTable,
    title: "人员（表）",
  },
  {
    path: "/admin/resource/entity/person/chart",
    component: PersonChart,
    title: "人员（图）",
  },
  {
    path: "/admin/resource/entity/project/table",
    component: ProjectTable,
    title: "项目（表）",
  },
  {
    path: "/admin/resource/entity/project/chart",
    component: ProjectChart,
    title: "项目（图）",
  },
  {
    path: "/admin/resource/entity/equipment/table",
    component: EquipmentTable,
    title: "装备（表）",
  },
  {
    path: "/admin/resource/entity/equipment/chart",
    component: EquipmentChart,
    title: "装备（图）",
  },
  {
    path: "/admin/resource/entity/technology/table",
    component: TechnologyTable,
    title: "技术（表）",
  },
  {
    path: "/admin/resource/entity/technology/chart",
    component: TechnologyChart,
    title: "技术（图）",
  },
  {
    path: "/admin/resource/entity/report/table",
    component: ReportTable,
    title: "报告/条令（表）",
  },
  {
    path: "/admin/resource/entity/report/chart",
    component: ReportChart,
    title: "报告/条令（图）",
  },
];
