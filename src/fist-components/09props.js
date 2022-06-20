import React, { Component } from "react";

import Content from "../fist-components/components/content";
import SideBar from "../fist-components/components/sideBar";

export default class Props extends Component {
  state = {
    linkText: "",
    test: "测试",
    testObj: {
      text: "aaaaa",
    },
  };
  toMine = () => {
    this.setState({
      linkText: "我的",
    });
  };
  render() {
    const obj = {
      name: "张三",
      age: "19",
    };
    return (
      <>
        <div>09props</div>
        <button
          onClick={() => {
            this.setState({ linkText: "首页" });
          }}
        >
          首页
        </button>
        <button onClick={this.toMine}>我的</button>
        <button
          onClick={() => {
            this.setState({ test: "变化", testObj: { text: "bbbb" } });
          }}
        >
          测试
        </button>
        <Content content={this.state.linkText} {...obj}></Content>
        <SideBar {...obj} height={181} {...this.state} />
      </>
    );
  }
}
