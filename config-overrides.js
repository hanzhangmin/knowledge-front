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
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    // style: "css",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#004080" },
  }),
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
