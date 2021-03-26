import React, { Component } from "react";
import SelectionTable from "components/1-common/SelectionTable";
import { Button, Modal } from "antd";
import { PlusOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { paginationOptions } from "options/index";
import SearchBar from "components/1-common/SearchBarPlain";
import AddEditForm from "components/Dictionary/EntityTypeForm";
export default class EntityType extends Component {
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
      scrollOptions: {
        x: 600,
      },
    };
  }
  // 表格设置
  columns = [
    {
      title: "注册时间",
      dataIndex: "registerDate",
      key: "registerDate",
      sortable: true,
      width: 200,
    },
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
      width: 200,
    },
    {
      title: "操作",
      key: "operation",
      fixed: "right",
      width: 200,
      render: (props) => {
        return (
          <span>
            <Button
              style={{ margin: "0 1rem" }}
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
        registerDate: new Date().toISOString(),
        name: `类型${i}`,
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
      scrollOptions,
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
          scroll={scrollOptions}
          rowSelection={rowSelection}
          columns={this.columns}
          tableData={tableData}
          paginationOptions={paginationOptions}
          loading={loading}></SelectionTable>
      </div>
    );
  }
}
