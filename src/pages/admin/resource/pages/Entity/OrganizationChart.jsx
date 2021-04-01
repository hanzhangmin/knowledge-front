import React, { Component } from "react";
import ReactECharts from "echarts-for-react";
import { Button, Modal, Divider } from "antd";
import moment from "moment";
import { PlusOutlined } from "@ant-design/icons";
import SearchBar from "components/Resource/Entity/OrganizationSearchBar";
import AddEditForm from "components/Resource/Entity/OrganizationForm";
import { chartStyle } from "options/index";
import RightClickMenu from "components/1-common/contextmenu/index";
import ExtractForm from "components/Resource/Extract/ExtractForm";
import MoreAdd from "components/1-common/FileUploader/MoreFileUpload";
import { common_post } from "api/index";
import { chartColors, chartsCategories } from "options/index";
import { setParams } from "../../../../../utils/index";
export default class OrganizationChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      modalTitle: "编辑",
      modalLoading: false,
      // 编辑添加表单的显示与隐藏
      visible: false,
      requestData: {},
      chartsEvents: {
        contextmenu: this.OnContextmenu,
        click: this.onChartClick,
      },
      // 扩展关系表单的显示与隐藏
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
    // 屏蔽浏览器默认事件;
    document.oncontextmenu = function (e) {
      /*屏蔽浏览器默认右键事件*/
      e = e || window.event;
      return false;
    };
    this.onSearch({});
  };

  // 组件即将销毁的周期函数
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

  // 获取charts配置
  getOption = (data, link) => {
    let { charsNode, chartsLink } = this.state;
    data = data || charsNode;
    link = link || chartsLink;
    return {
      title: {
        text: "机构型实体关系图",
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
      legend: {
        data: ["机构", "人员", "项目", "装备", "技术", "报告条令"],
        textStyle: {
          color: "#000000",
        },
        icon: "circle",
        type: "scroll",
        orient: "vertical",
        left: 10,
        top: 20,
        bottom: 20,
        itemWidth: 10,
        itemHeight: 10,
      },
      series: [
        {
          type: "graph",
          layout: "force",
          symbolSize: 45,
          focusNodeAdjacency: true,
          roam: true,
          label: {
            normal: {
              show: true,
              position: "right",
              formatter: "{b}",
              color: "#fff",
              textBorderColor: "inherit",
              textBorderWidth: 2,
              textShadowColor: "#ccc",
              textStyle: {
                fontSize: 12,
              },
            },
          },
          force: {
            repulsion: 1000,
          },
          edgeSymbolSize: [4, 50],
          edgeSymbol: ["", "arrow"],
          edgeSymbolSize: 10,
          lineStyle: {
            // ========关系边的公用线条样式。
            color: "source",
            curveness: 0.3,
          },
          emphasis: {
            focus: "adjacency",
            lineStyle: {
              width: 10,
            },
          },
          edgeLabel: {
            normal: {
              show: true,
              textStyle: {
                fontSize: 10,
              },
              formatter: "{c}",
            },
          },
          data: data,
          links: link,
          categories: chartsCategories,
        },
      ],
      color: chartColors,
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
      console.log(1);
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
  onSearch = async (value) => {
    let params = setParams("机构", value);
    let res = await common_post("/showData/chart", params);
    if (res) {
      let data = res.data.node.map((item) => {
        return {
          name: item.name,
          entityId: item.id,
          category: item.type,
        };
      });
      this.setState({
        charsNode: data,
        chartsLink: res.data.relationship,
      });
    }
    // this.chartRef.props.option.series[0].data = res.data.node;
    // this.chartRef.props.option.series[0].links = res.data.relationship;
    // this.chartRef.getEchartsInstance().setOption(this.chartRef.props.option);
  };
  // 添加扩展
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
