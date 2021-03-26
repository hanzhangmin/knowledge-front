import React from "react";
import ReactDOM from "react-dom";
import "@/css/app.css";
import { BrowserRouter, Redirect } from "react-router-dom";
import CacheRoute, { CacheSwitch } from "react-router-cache-route";

// import {} from "antd"
// import zhCN from "antd/lib/locale/zh_CN";

import App from "./App";
import Server from "./Server";
import { mainRoutes } from "routes/index";
import { authenticate } from "./utils/index";
ReactDOM.render(
  <BrowserRouter>
    <CacheSwitch>
      <CacheRoute
        replace
        path="/admin"
        render={(routeProps) =>
          authenticate() ? (
            <App {...routeProps} />
          ) : (
            <Redirect replace to="/login"></Redirect>
          )
        }
      />
      <CacheRoute
        replace
        path="/server"
        render={(routeProps) =>
          authenticate() ? (
            <Server {...routeProps} />
          ) : (
            <Redirect replace to="/login"></Redirect>
          )
        }
      />
      {mainRoutes.map((route, index) => {
        return (
          <CacheRoute
            replace
            key={index}
            path={route.path}
            component={route.component}></CacheRoute>
        );
      })}
      {/* <Redirect replace to="/admin"></Redirect> */}
    </CacheSwitch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
