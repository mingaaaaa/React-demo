import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        我是子组件
        <div>{this.props.children[0]}</div>
        <div>{this.props.children[1]}</div>
      </div>
    );
  }
}

class Test extends Component {
  state = {
    name: "张安",
  };
  render() {
    return (
      <div>
        我的父组件
        <div>---------------------</div>
        <Child>
          <div>插槽内容</div>
          <div>我也会插槽{this.state.name}</div>
        </Child>
      </div>
    );
  }
}

export default Test;
