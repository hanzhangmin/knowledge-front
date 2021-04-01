import React, { Component } from "react";
import { Layout, Menu } from "antd";
import Logo from "@/images/logo.png";
import { withRouter } from "react-router-dom";
import ServerSearchForm from "../SearchForm/index";
import HeadPortrait from "../HeadPortrait";
const { Header, Content, Footer } = Layout;
class Frame extends Component {
  constructor(props) {
    super(props);
    console.log(props.location);
    this.state = {
      collapsed: false,
      defaultSelectedKeys: "/server/home",
    };
  }
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };
  render() {
    let { serverRoutes } = this.props;
    const { defaultSelectedKeys } = this.state;
    return (
      <div>
        <Layout>
          <Header className="server-header">
            <div
              className="logo"
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.props.history.push("/server/home");
              }}>
              <h1 style={{ color: "#004080" }}>
                <img
                  src={Logo}
                  style={{
                    width: 56,
                    height: 56,
                    margin: "0px 20px",
                  }}
                  alt="logo"
                />
                知识体系
              </h1>
            </div>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={defaultSelectedKeys}
              style={{ fontSize: 16, color: "#71777c" }}>
              {serverRoutes.map((route) => {
                if (route.showNav)
                  return (
                    <Menu.Item
                      key={route.path}
                      onClick={(p) => this.props.history.push(p.key)}>
                      {route.title}
                    </Menu.Item>
                  );
              })}
            </Menu>
            <ServerSearchForm />
            <HeadPortrait />
          </Header>
          <Content className="server-content">
            <div
              style={{
                minHeight: "90vh",
                padding: 10,
              }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center", marginTop: -60 }}>
            @优士创新提供技术支持
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default withRouter(Frame);
