import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Dropdown, Modal } from "antd";
import Logo from "@/images/logo.png";
import { withRouter } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import EditerSelf from "../User/EditerSelf";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Frame extends Component {
  // 退出系统
  exit = () => {};
  // 编辑
  editerYourself = () => {
    this.setState({ visible: true });
  };
  constructor(props) {
    super(props);
    console.log(props.location);
    let arr = props.location.pathname.split("/");
    this.state = {
      visible: false,
      collapsed: false,
      defaultSelectedKeys: "/admin/home",
      defaultOpenKeys: arr.length >= 4 ? [`/${arr[1]}/${arr[2]}`] : [],
    };
  }
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };
  screenHeight = document.body.clientHeight;
  render() {
    let { adminRoutes } = this.props;
    const {
      collapsed,
      defaultSelectedKeys,
      defaultOpenKeys,
      visible,
    } = this.state;
    return (
      <div>
        <Modal
          visible={visible}
          title="编辑"
          onCancel={() => {
            this.setState({ visible: false });
          }}
          footer={null}>
          <p style={{ textAlign: "center" }}>用户权限请联系上级管理员修改</p>
          <EditerSelf />
        </Modal>
        <Layout>
          <Header className="adminHeader">
            <div className="admin-header">
              <h1>
                <img
                  src={Logo}
                  style={{ width: 56, height: 56, margin: "0px 20px" }}
                  alt="logo"
                />
                知识体系后台管理系统
              </h1>
              <Dropdown
                placement="bottomLeft"
                arrow
                overlay={
                  <Menu>
                    <Menu.Item onClick={this.editerYourself}>编辑</Menu.Item>
                    <Menu.Item danger onClick={this.exit}>
                      退出
                    </Menu.Item>
                  </Menu>
                }>
                <a
                  style={{ color: "#fff", height: 50 }}
                  onClick={(e) => e.preventDefault()}>
                  欢迎登录，管理员xxxx <DownOutlined />
                </a>
              </Dropdown>
            </div>
          </Header>
          <Layout className="body-layout">
            <Sider
              collapsible
              collapsed={collapsed}
              onCollapse={this.onCollapse}
              width={200}
              className="sider">
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={defaultSelectedKeys}
                defaultOpenKeys={defaultOpenKeys}
                style={{ height: this.screenHeight - 64, borderRight: 0 }}>
                {adminRoutes.map((route) => {
                  if (route.children) {
                    return (
                      <SubMenu
                        key={route.path}
                        icon={<route.icon />}
                        title={route.title}>
                        {route.children.map((item) => {
                          return (
                            <Menu.Item
                              key={item.path}
                              onClick={(p) => this.props.history.push(p.key)}>
                              {item.title}
                              {/* <Link to={item.path}>{item.title}</Link> */}
                            </Menu.Item>
                          );
                        })}
                      </SubMenu>
                    );
                  } else {
                    return (
                      <Menu.Item
                        icon={<route.icon />}
                        key={route.path}
                        onClick={(p) => this.props.history.push(p.key)}>
                        {route.title}
                        {/* <Link to={route.path}>{route.title}</Link> */}
                      </Menu.Item>
                    );
                  }
                })}
              </Menu>
            </Sider>
            <Layout className="content-layout">
              <Breadcrumb>
                {/* {routeHistory.map((route, index) => {
                if (route.icon) {
                  return (
                    <Breadcrumb.Item key={index}>
                      <NavLink to={route.path}>
                        {<route.icon />}
                        <span>{route.breadcrumbName}</span>
                      </NavLink>
                    </Breadcrumb.Item>
                  );
                } else {
                  return (
                    <Breadcrumb.Item key={index}>
                      <NavLink to={route.path}>
                        <span>{route.breadcrumbName}</span>
                      </NavLink>
                    </Breadcrumb.Item>
                  );
                }
              })} */}
              </Breadcrumb>
              <Content>
                <div className="content-body">{this.props.children}</div>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default withRouter(Frame);
