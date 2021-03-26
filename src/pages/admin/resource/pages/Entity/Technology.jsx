import React, { Component } from "react";
import SelectionTable from "components/1-common/SelectionTable";
import { Button, Modal, Tooltip } from "antd";
import moment from "moment";
import {
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
  SubnodeOutlined,
} from "@ant-design/icons";
import { paginationOptions } from "options/index";
import SearchBar from "components/Resource/Entity/TechnologySearchBar";
import AddEditForm from "components/Resource/Entity/TechnologyForm";
import ExtractForm from "components/Resource/Extract/ExtractForm";
import MoreAdd from "components/1-common/FileUploader/MoreFileUpload";
export default class Technology extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      modalTitle: "编辑",
      modalLoading: false,
      visible: false,
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
      extractVisible: false,
      modalExtractLoading: false,
      MoreVisible: false,
      moreUpload: {
        action: "entity/moreAdd",
      },
    };
  }
  // 表格设置
  columns = [
    {
      title: "技术中文名",
      dataIndex: "cname",
      key: "cname",
      fixed: "left",
      // sorter: true,
    },
    {
      title: "技术英文名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "国别",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "隶属技术",
      dataIndex: "parentNode",
      key: "parentNode",
      // sorter: true,
    },
    {
      title: "负责人",
      dataIndex: "person",
      key: "person",
    },
    {
      title: "成立日期",
      dataIndex: "buildDate",
      key: "buildDate",
      sortable: true,
    },
    {
      title: "详细地址",
      dataIndex: "address",
      key: "address",
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
              icon={<SubnodeOutlined />}
              onClick={() => {
                this.showExtractModel(props);
              }}>
              扩展
            </Button>
            <Button
              style={{ marginRight: "0.5rem" }}
              size="small"
              type="primary"
              icon={<EditOutlined />}
              onClick={() => {
                this.showModel("edit", props);
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
        cname: `中文名 ${i}`,
        buildDate: new Date().toISOString().substr(0, 10),
        person: i,
        address: `London Park no. ${i}`,
        desc: "这是一个国家级技术，具有很大很大的权利！",
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
  // onFinish表单提交的回调
  onFinish = (values) => {
    console.log(values);
    this.setState({ modalLoading: true });
    setTimeout(() => {
      this.setState({ modalLoading: false, visible: false });
    }, 1000);
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
      loading,
      tableData,
      paginationOptions,
      rowSelection,
      visible,
      modalLoading,
      selectedKeys,
      modalTitle,
      requestData,
      extractVisible,
      modalExtractLoading,
      MoreVisible,
      moreUpload,
    } = this.state;
    return (
      <div>
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
