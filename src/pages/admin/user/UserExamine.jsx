import React, { Component } from "react";
import SelectionTable from "components/1-common/SelectionTable";
import { Button } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { paginationOptions } from "options/index";
import SearchBar from "components/User/SearchBar";
export default class UserExamine extends Component {
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
    };
  }
  // 表格设置
  columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      // sorter: true,
    },
    {
      title: "性别",
      dataIndex: "sex",
      key: "sex",
    },
    {
      title: "联系方式",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "身份",
      dataIndex: "dentity",
      key: "dentity",
      // sorter: true,
    },
    {
      title: "职称",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "学历",
      dataIndex: "education",
      key: "education",
    },
    {
      title: "注册时间",
      dataIndex: "registerDate",
      key: "registerDate",
    },
    {
      title: "申请权限",
      dataIndex: "needPower",
      key: "needPower",
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
              icon={<CheckOutlined />}
              onClick={() => {
                this.setUserPower(1, props);
              }}>
              通过
            </Button>
            <Button
              size="small"
              type="danger"
              icon={<CloseOutlined />}
              onClick={() => {
                this.setUserPower(0, props);
              }}>
              驳回
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
        person: i,
        address: `London Park no. ${i}`,
        needPower: "权限",
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

  // 用户权限申请是否允许
  setUserPower = (value, data) => {
    console.log(value, data);
  };

  render() {
    let { loading, tableData, paginationOptions, rowSelection } = this.state;
    return (
      <div>
        <div className="align-right" style={{ justifyContent: "flex-end" }}>
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
