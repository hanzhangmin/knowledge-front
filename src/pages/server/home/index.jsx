import React from "react";

export default function index() {
  // 显示战争与技术实体关联图
  return (
    <div className="server-display-box ">
      <div style={{ flex: 1 }} className="bg-color box-padding ">
        {/* 此处是路由配置 */}
        <ul className="sticky-layout hzm-ul ">
          <li>实体</li>
          <li>信息</li>
        </ul>
        {/* 此处是相对路由显示的区间 */}
        <div style={{ height: 6000 }}></div>
      </div>
      {/* 此处是侧边栏，显示一些搜索和推荐 */}
      <div style={{ width: "260px", marginLeft: 10 }}>
        {/* 热点搜索，和推荐 */}
        <div className="sticky-layout">
          <div className="bg-color box-padding ">热点搜索</div>
          <div className="bg-color box-padding ">推荐</div>
        </div>
      </div>
    </div>
  );
}
