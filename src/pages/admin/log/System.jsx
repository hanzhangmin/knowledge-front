import React, { Component } from "react";
import Table from "components/1-common/Table";
import { paginationOptions } from "options/index";
import SearchBar from "components/Log/SearchBar";
const columns = [
  {
    title: "时间",
    dataIndex: "time",
    key: "time",
    sorter: true,
  },
  {
    title: "操作人",
    dataIndex: "person",
    key: "person",
  },
  {
    title: "操作",
    dataIndex: "address",
    key: "address",
  },
  //   {
  //     title: "Action",
  //     key: "operation",
  //     fixed: "right",
  //
  //     render: () => <Button>删除</Button>,
  //   },
];

export default class System extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      tableData: [],
      paginationOptions: Object.assign(paginationOptions, {
        onChange: this.pageChange,
      }),
    };
  }
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
        key: i,
        time: new Date().toISOString(),
        person: i,
        address: `London Park no. ${i}`,
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
  onSearch = (values) => {
    console.log(values);
  };
  render() {
    let { loading, tableData, paginationOptions } = this.state;
    return (
      <div>
        <SearchBar onSearch={this.onSearch} />
        <Table
          columns={columns}
          tableData={tableData}
          paginationOptions={paginationOptions}
          loading={loading}></Table>
      </div>
    );
  }
}
