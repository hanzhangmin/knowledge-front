import axios from "axios";
import { createdLoading, hidenLoading } from "../utils/Loading";
let instance = axios.create({
  baseURL: process.env.BASE_URL,
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
    return res.data;
  },
  function (err) {
    hidenLoading();
    console.log(err);
    // 对相应的错误进行处理
    //   一般处理常见错误，比如状态码为500，401等
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
