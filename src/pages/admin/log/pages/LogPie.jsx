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
      { name: "视频", value: 2342 },
      { name: "动态资讯", value: 8645 },
      { name: "报告", value: 1134 },
      { name: "期刊文献", value: 5213 },
    ];

    return {
      tooltip: {
        trigger: "item",
        formatter: "{b}: {c} ({d}%)",
      },
      legend: {
        top: 40,
        type: "scroll",
        orient: "vertical",
        right: 0,
        // data: ["类型一", "类型二", "类型三", "类型四", "类型五", "类型六"],
        textStyle: {
          color: "#555555",
        },
        //   selector: ["all", "inverse"],
      },
      series: [
        {
          type: "pie",
          center: ["50%", "50%"],
          radius: ["20%", "60%"],
          clockwise: true,
          avoidLabelOverlap: true,
          hoverOffset: 15,
          itemStyle: {
            normal: {
              borderColor: "#ffffff",
              borderWidth: 6,
              color: function (params) {
                return chartColors[params.dataIndex % 7];
              },
            },
          },
          label: {
            show: false,
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
