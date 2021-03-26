import React, { Component } from "react";
import SelectionTable from "components/1-common/SelectionTable";
import { Button, Modal, Tooltip, Drawer } from "antd";
import moment from "moment";
import {
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
  TagOutlined,
} from "@ant-design/icons";
import { paginationOptions } from "options/index";
import SearchBar from "components/Resource/Infomation/SearchBarKT";
import SingleAddForm from "components/Resource/Infomation/ReportSingleAdd";
import MoreAdd from "components/1-common/FileUploader/MoreFileUpload";
import ReportEditer from "components/Resource/Infomation/ReportEditer";
import ReportDetails from "components/Resource/Infomation/ReportDetails";
let client = document.body.clientWidth - 210;
// console.log(client);
export default class Equipment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      tableData: [],
      selectedKeys: [],
      paginationOptions: Object.assign(paginationOptions, {
        onChange: this.pageChange,
      }),
      rowSelection: {
        // selectedRowKeys: [],
        onChange: this.changeSelection,
        // onSelect: this.changeSelection,
        onSelectAll: this.changeAllSelection,
      },
      requestData: {},
      SingleVisible: false,
      MoreVisible: false,
      modalLoading: false,
      DetailsVisible: false,
      EditerVisible: false,
      moreUpload: {
        action: "info/dynamic/moreAdd",
      },
    };
  }
  // 表格设置
  columns = [
    {
      title: "报告名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "类别",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "上传人",
      dataIndex: "person",
      key: "person",
    },
    {
      title: "上传日期",
      dataIndex: "buildDate",
      key: "buildDate",
      sortable: true,
    },
    {
      title: "上次更新日期",
      dataIndex: "updataDate",
      key: "buildDate",
      sortable: true,
    },
    {
      title: "简介",
      dataIndex: "desc",
      key: "desc",
      ellipsis: {
        showTitle: false,
      },
      render: (desc) => (
        <Tooltip placement="topLeft" title={desc}>
          {desc}
        </Tooltip>
      ),
    },
    {
      title: "操作",
      key: "operation",
      fixed: "right",
      width: 240,
      render: (props) => {
        return (
          <span>
            <Button
              style={{ marginRight: "0.5rem" }}
              size="small"
              type="primary"
              icon={<TagOutlined />}
              onClick={() => {
                this.setState({
                  requestData: props,
                  DetailsVisible: true,
                });
              }}>
              详情
            </Button>
            <Button
              style={{ marginRight: "0.5rem" }}
              size="small"
              type="primary"
              icon={<EditOutlined />}
              onClick={() => {
                props.buildDate = moment(props.buildDate, "YYYY-MM-DD");
                this.setState({
                  requestData: props,
                  EditerVisible: true,
                });
              }}>
              编辑
            </Button>
            <Button
              size="small"
              type="danger"
              icon={<DeleteOutlined />}
              onClick={() => {
                this.deleteData([props]);
              }}>
              删除
            </Button>
          </span>
        );
      },
    },
  ];

  // 页面改变的回调
  pageChange = (page, pageSize) => {
    console.log(page, pageSize);
    this.getSearchLog(page, pageSize);
  };
  // 通过查询条件获取数据
  getSearchLog = (page, pageSize) => {
    const data = [];
    for (let i = page * pageSize; i < (page + 1) * pageSize; i++) {
      data.push({
        id: i,
        key: i,
        name: `English Name ${i}`,
        buildDate: new Date().toISOString().substr(0, 10),
        updataDate: new Date().toISOString().substr(0, 10),
        person: i,
        type: "军事",
        address: `London Park no. ${i}`,
        desc: "这是一个国家级装备，具有很大很大的权利！",
        country: "中国",
        parentNode: "中国",
      });
    }

    let paginationOptions = this.state.paginationOptions;
    paginationOptions.total = 100;
    this.setState({
      loading: false,
      tableData: data,
      paginationOptions,
    });
  };
  // 初始获得数据的钩子
  componentDidMount = () => {
    this.getSearchLog(1, this.state.paginationOptions.pageSize);
  };
  // 点击搜索按钮的回调
  onSearch = (value) => {
    console.log(value);
  };
  // 选择框改变时的回调
  changeSelection = (selectedRowKeys, selectedRows) => {
    let newSelectedRows = this.state.selectedKeys.concat(selectedRows);
    this.setState({
      selectedKeys: newSelectedRows,
    });
  };
  // 全选框改变的回调
  changeAllSelection = (selectedRowKeys, selectedRows) => {
    this.setState({
      selectedKeys: selectedRows,
    });
  };

  // 删除数据
  deleteData = (arr) => {
    console.log(arr);
  };

  // onFinish单个添加的回调
  onSingleAddFinish = (values) => {
    console.log(values);
    this.setState({ modalLoading: true });
    setTimeout(() => {
      this.setState({ modalLoading: false, visible: false });
    }, 1000);
  };

  // 批量添加的回调
  onMoreAddFinish = (values) => {
    console.log(values);
    this.setState({ modalLoading: true });
    setTimeout(() => {
      this.setState({ modalLoading: false, visible: false });
    }, 1000);
  };

  render() {
    let {
      loading,
      tableData,
      paginationOptions,
      rowSelection,
      selectedKeys,
      SingleVisible,
      MoreVisible,
      modalLoading,
      DetailsVisible,
      EditerVisible,
      requestData,
      moreUpload,
    } = this.state;
    return (
      <div>
        <Modal
          centered
          visible={SingleVisible}
          title="添加"
          onCancel={() => this.setState({ SingleVisible: false })}
          footer={null}>
          <SingleAddForm
            fileList={[]}
            requestData={{}}
            onFinish={this.onSingleAddFinish}
            modalLoading={modalLoading}></SingleAddForm>
        </Modal>
        <Modal
          visible={MoreVisible}
          title="批量添加"
          onCancel={() => this.setState({ MoreVisible: false })}
          footer={null}
          centered>
          <MoreAdd moreUpload={moreUpload}></MoreAdd>
        </Modal>
        <Drawer
          width={client}
          style={{ height: "100vh" }}
          title="详情"
          placement="right"
          visible={DetailsVisible}
          onClose={() => this.setState({ DetailsVisible: false })}>
          <ReportDetails requestData={requestData}></ReportDetails>
        </Drawer>
        <Drawer
          style={{ height: "100vh" }}
          width={client}
          title="编辑"
          placement="right"
          visible={EditerVisible}
          onClose={() => this.setState({ EditerVisible: false })}>
          <ReportEditer requestData={requestData}></ReportEditer>
        </Drawer>

        <div
          className="align-right"
          style={{ justifyContent: "space-between" }}>
          <div>
            <Button
              style={{ marginRight: "1rem" }}
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => {
                this.setState({
                  SingleVisible: true,
                });
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
            <Button
              type="danger"
              icon={<DeleteOutlined />}
              onClick={() => {
                this.deleteData(selectedKeys);
              }}>
              删除
            </Button>
          </div>
          <SearchBar onSearch={this.onSearch} />
        </div>
        <SelectionTable
          rowSelection={rowSelection}
          columns={this.columns}
          tableData={tableData}
          paginationOptions={paginationOptions}
          loading={loading}></SelectionTable>
      </div>
    );
  }
}
