import axios from "axios";
import { message } from "antd";
import { createdLoading, hidenLoading } from "../utils/requestMessage";
console.log(process.env.REACT_APP_BASE_URL);
let instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000,
});

instance.interceptors.request.use(
  function (config) {
    createdLoading();
    return config;
  },
  function (err) {
    hidenLoading();
    console.log(err);
    //   对相应的错误进行处理，一般是处理常见错误
  }
);

instance.interceptors.response.use(
  function (res) {
    hidenLoading();
    switch (res.data.code) {
      case 200:
        message.success("请求成功！");
        break;
      default:
        message.error("请求成功！");
        break;
    }
    return res.data;
  },
  function (err) {
    hidenLoading();

    // 后台返回的信息
    // {
    //   "timestamp": "2017-09-15T08:30:56Z",
    //   "status": 400,
    //   "error": "Bad Request",
    //   "exception": "com.xinwenhd.common.utils.BadReqExcption",
    //   "message": "Bad Request",
    //   "path": "/internal/user/check_mobile_and_sent_code",
    //   "errorMassage": "手机号已存在",
    //   "errorCode": "MOBILE_EXIST"
    // }
    // 对相应的错误进行处理
    //   一般处理常见错误，比如状态码为500，401等
    console.log(err);
    console.log(err.timeout);
    switch (err.response.status) {
      case 401:
        message.error("抱歉，您没有访问权限！");
        break;
      case 404:
        message.error("抱歉，找不到资源！");
        break;
      case 504:
        message.error("请求超时！");
        break;
      default:
        message.error("请求失败！");
        break;
    }
  }
);

export function common_post(url, data = {}) {
  return instance({
    url: url,
    method: "POST",
    dataType: "JSON",
    data: data,
  });
}

export function common_get(url, data = {}) {
  return instance({
    url: url,
    method: "POST",
    dataType: "JSON",
    data: data,
  });
}
