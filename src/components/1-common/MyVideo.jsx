import React, { Component } from "react";

export default class MyVideo extends Component {
  render() {
    let { src } = this.props;
    return (
      <div className="video-box">
        <video className="video" src={src} controls="controls">
          视频内容区,您得浏览器不支持播放视频
        </video>
        <div className="video-controls"></div>
      </div>
    );
  }
}
