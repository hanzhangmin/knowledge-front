import React, { Component } from "react";
import PubSub from "pubsub-js";
export default class Search extends Component {
  componentDidMount = () => {
    PubSub.subscribe("server-search", (title, value) => {
      console.log(title, value);
    });
  };
  render() {
    return <div>搜索</div>;
  }
}
