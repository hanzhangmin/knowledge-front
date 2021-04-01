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
    return {
      color: chartColors,
      tooltip: {
        trigger: "item",
        // formatter: "{b}: {c} ({d}%)",
      },
      grid: {
        top: 60,
        right: 40,
        left: 50,
        bottom: 30,
      },
      xAxis: [
        {
          type: "category",
          axisTick: {
            show: false,
            alignWithLabel: true,
          },
          axisLine: {
            lineStyle: {
              color: "#555555",
            },
            show: false,
          },
          data: [
            "2020-1",
            "2020-2",
            "2020-3",
            "2020-4",
            "2020-5",
            "2020-6",
            "2020-7",
            "2020-8",
            "2020-9",
            "2020-10",
            "2020-11",
            "2020-12",
          ],
        },
      ],
      yAxis: [
        {
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "#555555",
            },
            show: false,
          },
        },
      ],
      toolbox: {
        orient: "vertical",
        show: true,
        feature: {
          magicType: { type: ["line", "bar"] },
          restore: {},
          saveAsImage: {},
        },
      },
      series: [
        {
          name: "实体",
          type: "line",
          smooth: true,
          // showSymbol: false,
          lineStyle: {
            normal: {
              width: 1,
              // color: hexToRgba(chartColors[0], 0.5),
              shadowBlur: 3,
              shadowColor: hexToRgba(chartColors[0], 0.1),
              shadowOffsetY: 8,
            },
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: hexToRgba(chartColors[0], 0.4),
                  },
                  {
                    offset: 1,
                    color: hexToRgba(chartColors[0], 0.1),
                  },
                ],
                false
              ),
              shadowColor: hexToRgba(chartColors[0], 0.1),
              shadowBlur: 10,
            },
          },
          data: [3, 5, 11, 18, 48, 69, 21, 46, 55, 18, 10, 7],
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
