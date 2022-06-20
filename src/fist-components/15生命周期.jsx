import React, { Component } from "react";

export default class Life extends Component {
  state = {
    name: "张三",
  };
  // 初始化阶段
  // fiber
  // render之前最后一次修改状态的机会 已弃用 如要使用可加上UNSAFE_前缀
  // componentWillMount() {
  //   console.log("componentWillMount");
  // }
  // 只能访问this.props和this.state，不允许修改状态和DOM输出
  render() {
    return <div>Life</div>;
  }
  // 成功render并渲染成真实DOM之后触发，可以修改DOM
  componentDidMount() {
    console.log("componentDidMount");
  }

  // 运行中阶段

  // 父组件修改属性触发 (已弃用) 子组件可以在该钩子函数中最先拿到父组件传过来的属性
  // componentWillReceiveProps() {
  //   console.log("componentWillReceiveProps");
  // }
  // 是否更新组件，返回false会住址render调用
  shouldComponentUpdate(nextProps, nextState) {
    console.log("更新前的值", this.state);
    console.log("更新后的值", nextState);
    console.log("shouldComponentUpdate");
    return true;
  }
  // 组件将要更新， 不能修改属性和状态 已弃用
  // componentWillUpdate(){
  //   console.log("componentWillUpdate");
  // }
  // 组件更新完成
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  // 销毁阶段
  // 组件销毁之前，一般会清楚定时器或事件绑定等
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  // 新生命周期
  // 静态方法 必须要返回值，返回的对象会更新state，不更新返回null
  // 使用该生命周期必须要有state否则报错
  // 在初始化和组件更新（props或者state）时触发
  static getDerivedStateFromProps(nextProps,nextState) {
    return null;
  }
  // 代替componentWillUpdate,触发时间在update发生时，
  // 在render之后dom渲染(didupdate)之前返回一个值,作为componentDidUpdate的第三个参数
  getSnapshotBeforeUpdate() {}

  // 捕获父子组件异常
  componentDidCatch(){}
}
