import React, { Component } from "react";

// PureComponent会检测props和state，如果值没有变化则不会更新
// 这里判断是否变化是浅变化，如果值是对象则依然会更新
// 如果props或者state会一直改变PureComponent并不会有性能提升，因为shallowEqual(浅相等)也需要时间
export default class Test extends React.PureComponent {
  state = {
    name: "张三",
    info: {
      age: 18,
    },
  };
  // 除了hi用shouldComponentUpdate也可以使用PureComponent

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextState);
  //   if (this.state.name === nextState.name) {
  //     return false;
  //   }
  //   return true;
  // }
  componentDidUpdate() {
    console.log("组件更新了");
  }
  render() {
    return (
      <div>
        {this.state.name}
        <button
          onClick={() => {
            this.setState({
              name: "李四",
            });
          }}
        >
          点击
        </button>
        <button
          onClick={() => {
            this.setState({
              info: {
                age: 22,
              },
            });
          }}
        >
          点击2
        </button>
      </div>
    );
  }
}
