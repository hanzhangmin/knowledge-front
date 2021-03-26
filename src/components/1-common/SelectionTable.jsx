import React, { Component } from "react";
import { Table } from "antd";

export default class SelectionTable extends Component {
  render() {
    let {
      columns,
      paginationOptions,
      loading,
      tableData,
      rowSelection,
    } = this.props;
    return (
      <div>
        <Table
          size="middle"
          bordered={true}
          rowSelection={rowSelection}
          loading={loading}
          columns={columns}
          dataSource={tableData}
          pagination={paginationOptions}
          scroll={{ x: "100%", y: 700 }}
        />
      </div>
    );
  }
}
