import React, { Component } from "react";
import ReactECharts from "echarts-for-react";
import { Button, Modal, Divider } from "antd";
import moment from "moment";
import { PlusOutlined } from "@ant-design/icons";
import SearchBar from "components/Resource/Entity/ReportSearchBar";
import AddEditForm from "components/Resource/Entity/ReportForm";
import { chartStyle } from "options/index";
import RightClickMenu from "components/1-common/contextmenu/index";
import ExtractForm from "components/Resource/Extract/ExtractForm";
import MoreAdd from "components/1-common/FileUploader/MoreFileUpload";
export default class ReportChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      modalTitle: "编辑",
      modalLoading: false,
      visible: false,
      requestData: {},
      chartsEvents: {
        contextmenu: this.OnContextmenu,
        click: this.onChartClick,
      },
      extractVisible: false,
      modalExtractLoading: false,
      // 右键菜单的显示与隐藏
      menuVisible: false,
      MoreVisible: false,
      moreUpload: {
        action: "entity/moreAdd",
      },
    };
  }
  chartRef = React.createRef();

  // 初始获得数据的钩子 与组件初始化时的一些配置
  componentDidMount = () => {
    // this.chartRef.bind("contextmenu", function () {
    //   return false;
    // });
    // 屏蔽浏览器默认事件
    document.oncontextmenu = function (e) {
      /*屏蔽浏览器默认右键事件*/
      e = e || window.event;
      return false;
    };
  };

  componentWillUnmount = () => {
    RightClickMenu.destroyMenu();
  };
  //显示添加/编辑表单对话框
  showModel = (type, value) => {
    if (type === "add") {
      this.setState({
        requestData: {},
        modalTitle: "添加",
        visible: true,
      });
    } else {
      value.buildDate = moment(value.buildDate, "YYYY-MM-DD");
      this.setState({
        requestData: value,
        modalTitle: "编辑",
        visible: true,
      });
    }
  };

  //隐藏添加/编辑表单对话框
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  // 删除数据
  deleteData = (arr) => {
    console.log(arr);
  };

  // editerEntity 编辑数据
  editerEntity = () => {
    this.setState({
      modalTitle: "编辑",
      visible: true,
    });
  };

  // addEntity添加数据
  addEntity = () => {
    this.setState({
      modalTitle: "添加",
      visible: true,
      requestData: {},
    });
  };

  // onFinish表单提交的回调,在这里处理添加和编辑操作
  onFinish = (values) => {
    console.log(values);
    this.setState({ modalLoading: true });
    setTimeout(() => {
      this.setState({ modalLoading: false, visible: false });
    }, 1000);
  };

  // 获取charts配置数据
  getOption = () => {
    return {
      title: {
        text: "报告/条令型实体关系图",
        subtext: "实体",
        top: "top",
        left: "center",
      },
      tooltip: {},
      toolbox: {
        show: true,
        feature: {
          dataView: {
            show: true,
            readOnly: true,
          },
          restore: {
            show: true,
          },
          saveAsImage: {
            show: true,
          },
        },
      },
      animationDuration: 3000,
      animationEasingUpdate: "quinticInOut",
      series: [
        {
          name: "报告/条令型实体关系图",
          type: "graph",
          layout: "force",
          force: {
            repulsion: 300,
          },
          data: [
            {
              name: "主席/总统",
              // "x": 0,
              // y: 0,
              symbolSize: 150,
              draggable: "true",
              value: 27,
              symbol:
                "path://M887.552 546.10944c-28.16 0-54.21056 8.576-75.97056 23.168l-140.22144-153.6a237.55264 237.55264 0 0 0 79.54944-176.768C750.7712 107.02336 643.8912 0.14336 512 0 380.1088 0.14336 273.2288 107.02336 273.09056 238.91456c0 67.84 28.672 128.768 74.24 172.35456L203.52 564.41856a134.60992 134.60992 0 0 0-67.01056-18.304C61.12256 546.18112 0.03584 607.29856 0 682.68544 0 757.95456 61.25056 819.2 136.50944 819.2c75.38688-0.03584 136.50432-61.12256 136.576-136.51456 0-26.112-7.68-50.176-20.48-70.97344l151.10656-161.024a234.73152 234.73152 0 0 0 74.17856 23.68v281.41056a136.448 136.448 0 0 0-102.4 131.712c0 75.264 61.184 136.50944 136.50944 136.50944 75.3664-0.07168 136.44288-61.14816 136.50944-136.50944 0-63.42144-43.648-116.41856-102.4-131.712V474.368c24.00256-3.456 46.78144-10.17344 67.84-20.29056l152.38656 166.85056c-9.53856 18.688-15.36 39.424-15.36 61.75744 0 75.264 61.184 136.51456 136.576 136.51456 75.41248-2.82624 134.25152-66.2528 131.42528-141.66528-2.68288-71.44448-59.9808-128.7424-131.42528-131.42528z m-751.03744 204.8c-37.69856 1.13664-69.17632-28.50304-70.31808-66.19648S94.69952 615.53664 132.39296 614.4c1.39264-0.04096 2.7904-0.04096 4.18304 0 37.71392 0.01536 68.2752 30.60224 68.25984 68.31616-0.01536 37.69344-30.5664 68.24448-68.25984 68.25984l-0.06144-0.06656z m204.8-512c0.1024-94.21312 76.47232-170.55232 170.68544-170.61888 94.21312 0.07168 170.58304 76.41088 170.68544 170.624C682.61888 333.15328 606.23872 409.52832 512 409.6c-94.23872-0.07168-170.61888-76.44672-170.68544-170.69056z m238.976 648.576c-0.01536 37.71392-30.60736 68.2752-68.32128 68.25472-37.71392-0.01536-68.2752-30.60736-68.25472-68.32128 0.01536-37.71392 30.60224-68.2752 68.31616-68.25984 37.69344 0.01536 68.24448 30.5664 68.25984 68.25984v0.06656z m307.2-136.576c-37.67296-0.03584-68.21888-30.55104-68.29056-68.224 0-37.71392 30.57152-68.28544 68.29056-68.28544 37.71392 0 68.29056 30.57152 68.28544 68.29056 0 37.68832-30.53568 68.25472-68.224 68.28544l-0.06144-0.06656z",
            },
            {
              name: "刘备2239",
              value: 15,
              symbolSize: 80,
              category: "刘备2239",
              draggable: "true",
            },
            {
              name: "使君70",
              symbolSize: 3,
              category: "刘备2239",
              draggable: "true",
              value: 1,
            },
            {
              name: "玄德1770",
              symbolSize: 60,
              category: "刘备2239",
              draggable: "true",
              value: 1,
            },
            {
              name: "皇叔112",
              symbolSize: 15,
              category: "刘备2239",
              draggable: "true",
              value: 1,
            },
            {
              name: "诸葛亮1892",
              value: 60,
              symbolSize: 60,
              category: "诸葛亮1892",
              draggable: "true",
            },
            {
              name: "孔明1643",
              symbolSize: 50,
              category: "诸葛亮1892",
              draggable: "true",
              value: 1,
            },
            {
              name: "卧龙40",
              symbolSize: 3,
              category: "诸葛亮1892",
              draggable: "true",
              value: 1,
            },
            {
              name: "曹操979",
              value: 5,
              symbolSize: 40,
              category: "曹操979",
              draggable: "true",
            },
            {
              name: "孟德29",
              symbolSize: 3,
              category: "曹操979",
              draggable: "true",
              value: 1,
            },
            {
              name: "曹公44",
              symbolSize: 7,
              category: "曹操979",
              draggable: "true",
              value: 1,
            },
            {
              name: "关羽948",
              value: 40,
              symbolSize: 18,
              category: "关羽948",
              draggable: "true",
            },
            {
              name: "云长431",
              symbolSize: 20,
              category: "关羽948",
              draggable: "true",
              value: 1,
            },
            {
              name: "关公508",
              symbolSize: 25,
              category: "关羽948",
              draggable: "true",
              value: 1,
            },
            {
              name: "张飞408",
              value: 8,
              symbolSize: 25,
              category: "张飞408",
              draggable: "true",
            },
            {
              name: "翼德55",
              symbolSize: 5,
              category: "张飞408",
              draggable: "true",
              value: 1,
            },
            {
              name: "赵云393",
              value: 5,
              symbolSize: 30,
              category: "赵云393",
              draggable: "true",
            },
            {
              name: "子龙95",
              symbolSize: 7,
              category: "赵云393",
              draggable: "true",
              value: 1,
            },
            {
              name: "孙权390",
              value: 30,
              symbolSize: 30,
              category: "孙权390",
              draggable: "true",
            },
            {
              name: "仲谋10",
              symbolSize: 3,
              category: "孙权390",
              draggable: "true",
              value: 1,
            },
            {
              name: "吴侯72",
              symbolSize: 10,
              category: "孙权390",
              draggable: "true",
              value: 1,
            },
            {
              name: "吕布384",
              value: 20,
              symbolSize: 30,
              category: "吕布384",
              draggable: "true",
            },
            {
              name: "奉先15",
              symbolSize: 3,
              category: "吕布384",
              draggable: "true",
              value: 1,
            },
            {
              name: "温侯12",
              symbolSize: 3,
              category: "吕布384",
              draggable: "true",
              value: 1,
            },
            {
              name: "周瑜328",
              value: 6,
              symbolSize: 18,
              category: "周瑜328",
              draggable: "true",
            },
            {
              name: "公瑾60",
              symbolSize: 5,
              category: "周瑜328",
              draggable: "true",
              value: 1,
            },
            {
              name: "周郎35",
              symbolSize: 3,
              category: "周瑜328",
              draggable: "true",
              value: 1,
            },
            {
              name: "魏延327",
              value: 6,
              symbolSize: 18,
              category: "魏延327",
              draggable: "true",
            },
            {
              name: "文长12",
              symbolSize: 3,
              category: "魏延327",
              draggable: "true",
              value: 1,
            },
          ],
          links: [
            {
              source: "主席/总统",
              target: "刘备2239",
            },
            {
              source: "刘备2239",
              target: "使君70",
            },
            {
              source: "刘备2239",
              target: "玄德1770",
            },
            {
              source: "刘备2239",
              target: "皇叔112",
            },
            {
              source: "主席/总统",
              target: "诸葛亮1892",
            },
            {
              source: "诸葛亮1892",
              target: "孔明1643",
            },
            {
              source: "诸葛亮1892",
              target: "卧龙40",
            },
            {
              source: "主席/总统",
              target: "曹操979",
            },
            {
              source: "曹操979",
              target: "孟德29",
            },
            {
              source: "曹操979",
              target: "曹公44",
            },
            {
              source: "主席/总统",
              target: "关羽948",
            },
            {
              source: "关羽948",
              target: "云长431",
            },
            {
              source: "关羽948",
              target: "关公508",
            },
            {
              source: "主席/总统",
              target: "张飞408",
            },
            {
              source: "张飞408",
              target: "翼德55",
            },
            {
              source: "主席/总统",
              target: "赵云393",
            },
            {
              source: "赵云393",
              target: "子龙95",
            },
            {
              source: "主席/总统",
              target: "孙权390",
            },
            {
              source: "孙权390",
              target: "仲谋10",
            },
            {
              source: "孙权390",
              target: "曹操979",
            },
            {
              source: "孙权390",
              target: "吴侯72",
            },
            {
              source: "主席/总统",
              target: "吕布384",
            },
            {
              source: "吕布384",
              target: "奉先15",
            },
            {
              source: "吕布384",
              target: "温侯12",
            },
            {
              source: "主席/总统",
              target: "周瑜328",
            },
            {
              source: "周瑜328",
              target: "公瑾60",
            },
            {
              source: "周瑜328",
              target: "周郎35",
            },
            {
              source: "主席/总统",
              target: "魏延327",
            },
            {
              source: "魏延327",
              target: "文长12",
            },
            {
              source: "主席/总统",
              target: "法学院",
            },
          ],
          categories: [
            {
              name: "刘备2239",
            },
            {
              name: "诸葛亮1892",
            },
            {
              name: "曹操979",
            },
            {
              name: "关羽948",
            },
            {
              name: "张飞408",
            },
            {
              name: "赵云393",
            },
            {
              name: "孙权390",
            },
            {
              name: "吕布384",
            },
            {
              name: "周瑜328",
            },
            {
              name: "魏延327",
            },
          ],
          focusNodeAdjacency: true,
          roam: true,
          label: {
            normal: {
              show: true,
              position: "top",
            },
          },
          lineStyle: {
            normal: {
              color: "source",
              curveness: 0,
              type: "solid",
            },
          },
        },
      ],
    };
  };

  // 图表鼠标右击事件
  OnContextmenu = (params) => {
    this.setState({
      requestData: params.data,
      menuVisible: true,
    });
    let { clientX, clientY } = params.event.event;
    RightClickMenu.createMenu({
      visible: true,
      style: { position: "absolute", top: clientY + 10, left: clientX + 10 },
      addEntity: () => {
        this.showExtractModel(params.data);
      },
      editerEntity: this.editerEntity,
      deleteEntity: this.deleteData,
    });
    console.log(params);
    //   设置右键菜单样式
  };

  // 图表空白处点击事件
  hidenContextMenu = () => {
    if (this.state.menuVisible) {
      RightClickMenu.createMenu({
        visible: false,
      });
    } else {
      this.setState({
        menuVisible: false,
      });
    }
  };

  // 图表鼠标点击事件
  onChartClick = (params) => {
    console.log(params);
  };
  // 点击搜索按钮的回调 在这里得到getOption需要的数据
  onSearch = (value) => {
    console.log(value);
  };

  // 隐藏关系扩展对话框
  handleExtractCancel = () => {
    this.setState({
      extractVisible: false,
    });
  };

  // 显示扩展关系对话框
  showExtractModel = (value) => {
    this.setState({
      requestData: value,
      extractVisible: true,
    });
  };

  //扩展关系提交接口实现
  onExtractFinish = (value) => {
    console.log(value);
  };

  render() {
    let {
      visible,
      modalLoading,
      modalTitle,
      requestData,
      chartsEvents,
      extractVisible,
      modalExtractLoading,
      moreUpload,
      MoreVisible,
    } = this.state;
    return (
      <div onClick={this.hidenContextMenu}>
        <Modal
          visible={visible}
          title={modalTitle}
          onCancel={this.handleCancel}
          footer={null}>
          <AddEditForm
            initialValues={requestData}
            onFinish={this.onFinish}
            modalLoading={modalLoading}></AddEditForm>
        </Modal>
        <Modal
          visible={MoreVisible}
          title="批量添加"
          onCancel={() => this.setState({ MoreVisible: false })}
          footer={null}
          centered>
          <MoreAdd moreUpload={moreUpload}></MoreAdd>
        </Modal>
        <Modal
          visible={extractVisible}
          title="关系扩展"
          onCancel={this.handleExtractCancel}
          footer={null}>
          <ExtractForm
            initialValues={requestData}
            onFinish={this.onExtractFinish}
            modalLoading={modalExtractLoading}></ExtractForm>
        </Modal>
        <div
          className="align-right"
          style={{ justifyContent: "space-between" }}>
          <div>
            <Button
              style={{ marginRight: "1rem" }}
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => {
                this.showModel("add");
              }}>
              添加
            </Button>
            <Button
              style={{ marginRight: "1rem" }}
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => {
                this.setState({
                  MoreVisible: true,
                });
              }}>
              批量添加
            </Button>
          </div>
          <SearchBar onSearch={this.onSearch} />
        </div>
        <Divider style={{ margin: "10px 0" }} />
        <ReactECharts
          ref={this.chartRef}
          style={chartStyle}
          option={this.getOption()}
          onEvents={chartsEvents}
        />
      </div>
    );
  }
}
