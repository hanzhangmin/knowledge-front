import React, { Component } from "react";
import SelectionTable from "components/1-common/SelectionTable";
import { Button, Modal } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { paginationOptions } from "options/index";
import AddEditForm from "components/User/IPsForm";
export default class User extends Component {
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
      requestData: {
        password: "123456",
        sex: 0,
        power: 0,
      },
    };
  }
  // 表格设置
  columns = [
    {
      title: "IP",
      dataIndex: "ip",
      key: "ip",
      width: 300,
    },
    {
      title: "权限",
      dataIndex: "power",
      key: "power",
    },
    {
      title: "操作",
      key: "operation",
      fixed: "right",
      width: 120,
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
        time: new Date().toISOString(),
        ip: i,
        power: `London Park no. ${i}`,
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
      modalTitle,
      requestData,
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
