const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
} = require("customize-cra");
const path = require("path");

function pathResolve(pathUrl) {
  return path.join(__dirname, pathUrl);
}

module.exports = override(
  // 配置按需加载
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    // style: "css",
    style: true,
  }),
  // 配置主题颜色
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#004080" },
  }),
  // 配置别名
  addWebpackAlias({
    "@": pathResolve("./src"),
    components: pathResolve("./src/components"),
    servercomponents: pathResolve("./src/servercomponents"),
    utils: pathResolve("./src/utils"),
    pages: pathResolve("./src/pages"),
    routes: pathResolve("./src/routes"),
    api: pathResolve("./src/api"),
    options: pathResolve("./src/options"),
  })
);
