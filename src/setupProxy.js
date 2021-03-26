const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://192.168.3.16:8080",
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
  //   app.use(
  //     createProxyMiddleware("/api", {
  //       target: "http://192.168.3.16:8080",
  //       secure: false,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         "^/api": "",
  //       },
  //     })
  //   );
};
