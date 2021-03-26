import React, { Component } from "react";
import { Table } from "antd";
import { tableScroll } from "../../options/index";
export default class LogTable extends Component {
  render() {
    let { columns, paginationOptions, loading, tableData } = this.props;
    return (
      <div>
        <Table
          size="middle"
          bordered={true}
          loading={loading}
          columns={columns}
          dataSource={tableData}
          pagination={paginationOptions}
          scroll={tableScroll}
        />
      </div>
    );
  }
}
