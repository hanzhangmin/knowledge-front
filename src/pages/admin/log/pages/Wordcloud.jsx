import React, { Component } from "react";
import { chartStyle } from "options/index";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import "echarts-wordcloud";
export default class Wordcloud extends Component {
  chartRef = React.createRef();
  getOption = () => {
    let wordData = [
      {
        name: "Sam S Club",
        value: 10000,
      },
      {
        name: "Macys",
        value: 6181,
      },
      {
        name: "Amy Schumer",
        value: 4386,
      },
      {
        name: "Jurassic World",
        value: 4055,
      },
      {
        name: "Charter Communications",
        value: 2467,
      },
      {
        name: "Chick Fil A",
        value: 2244,
      },
      {
        name: "Planet Fitness",
        value: 1898,
      },
      {
        name: "Pitch Perfect",
        value: 1484,
      },
      {
        name: "Express",
        value: 1112,
      },
      {
        name: "Home",
        value: 965,
      },
      {
        name: "Johnny Depp",
        value: 847,
      },
      {
        name: "Lena Dunham",
        value: 582,
      },
      {
        name: "Lewis Hamilton",
        value: 555,
      },
      {
        name: "KXAN",
        value: 550,
      },
      {
        name: "Point Break",
        value: 265,
      },
    ];

    return {
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      series: [
        {
          type: "wordCloud",
          gridSize: 1,
          // Text size range which the value in data will be mapped to.
          // Default to have minimum 12px and maximum 60px size.
          sizeRange: [12, 55],
          // Text rotation range and step in degree. Text will be rotated randomly in range [-90,                                                                             90] by rotationStep 45

          rotationRange: [-45, 0, 45, 90],
          //   maskImage: maskImage, // 呈现形状图片， 可选
          textStyle: {
            normal: {
              color: function () {
                return (
                  "rgb(" +
                  Math.round(Math.random() * 255) +
                  ", " +
                  Math.round(Math.random() * 255) +
                  ", " +
                  Math.round(Math.random() * 255) +
                  ")"
                );
              },
            },
          },
          // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
          // Default to be put in the center and has 75% x 80% size.
          left: "center",
          top: "center",
          right: null,
          bottom: null,
          width: "90%",
          height: "110%",
          data: wordData,
        },
      ],
    };
  };
  render() {
    return (
      <div>
        <ReactEcharts
          ref={(e) => {
            this.chartRef = e;
          }}
          style={chartStyle}
          option={this.getOption()}
        />
      </div>
    );
  }
}
