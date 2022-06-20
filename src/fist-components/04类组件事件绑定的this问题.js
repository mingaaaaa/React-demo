import React, { Component } from 'react'
import { Button } from 'antd';

export default class ClassEvent extends Component {
  // es7写法 等同于constructor中的this.name="张三"
  name = "张三";

  handleClick2() {
    console.log('button2', this.name);
  }

  handleClick3 = () => {
    console.log('button3', this.name);
  }

  handleClick4() {
    console.log('button4', this.name);
  }

  handleClick5 = function () {
    console.log('button5', this.name);
  }.bind(this);

  handleClick6() {
    console.log('button6', this.name);
  }

  render() {
    return (
      <div>04类组件事件绑定的this问题
        <Button type='primary' onClick={() => {
          console.log('button1', this.name);
        }}>button1</Button>
        <Button type='primary' onClick={this.handleClick2}>button2</Button>
        <Button type='primary' onClick={this.handleClick3}>button3</Button>
        <Button type='primary' onClick={() => this.handleClick4()}>button4</Button>
        <Button type='primary' onClick={this.handleClick5}>button5</Button>
        <Button type='primary' onClick={this.handleClick6.bind(this)}>button6</Button>

      </div>
    )
  }
}

// React并不会给设置事件的DOM绑定事件，而是使用事件代理来优化性能
// React事件也有event，但是是React提供的并非是原生，不过常用的属性和方法都存在
