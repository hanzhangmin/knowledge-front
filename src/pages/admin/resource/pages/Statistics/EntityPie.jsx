import React, { Component } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts"; //渐变色
import { chartStyle, chartColors } from "options/index";
import { hexToRgba } from "utils/index";
let newChartStyle = {
  ...chartStyle,
  height: 400,
};
export default class componentName extends Component {
  chartRef = React.createRef();

  // 获取charts配置数据
  getOption = () => {
    let data = [
      { name: "机构", value: 2342 },
      { name: "人员", value: 8645 },
      { name: "项目", value: 1134 },
      { name: "装备", value: 5213 },
      { name: "技术", value: 3234 },
      { name: "报告/条令", value: 3234 },
    ];

    return {
      tooltip: {
        trigger: "item",
        formatter: "{b}: {c} ({d}%)",
      },
      legend: {},
      series: [
        {
          type: "pie",
          center: ["50%", "50%"],
          radius: ["24%", "40%"],
          clockwise: true,
          avoidLabelOverlap: true,
          //   hoverOffset: 15,
          itemStyle: {
            normal: {
              color: function (params) {
                return chartColors[params.dataIndex % 7];
              },
            },
          },
          label: {
            show: true,
            position: "outside",
            formatter: "{a|{b}：{d}%}\n{hr|}",
            rich: {
              hr: {
                backgroundColor: "t",
                borderRadius: 3,
                width: 3,
                height: 3,
                padding: [3, 3, 0, -12],
              },
              a: {
                padding: [-30, 15, -20, 15],
              },
            },
          },
          labelLine: {
            normal: {
              length: 20,
              lineStyle: {
                width: 1,
              },
            },
          },
          data: data,
        },
      ],
    };
  };
  render() {
    return (
      <ReactECharts
        ref={this.chartRef}
        style={newChartStyle}
        option={this.getOption()}
      />
    );
  }
}
