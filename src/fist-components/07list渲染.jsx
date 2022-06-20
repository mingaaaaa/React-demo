import React, { Component } from 'react'

export default class ListRender extends Component {
  state = {
    list: [
      {
        id: 1,
        name: "张三",
        age: 12
      },
      {
        id: 2,
        name: "张三",
        age: 12
      },
      {
        id: 3,
        name: "张三",
        age: 12
      }
    ]
  }

  delete = () => {
    const list = [...this.state.list];
    list.pop();
    console.log(list);
    this.setState({
      list
    })
  }

  render() {
    const listRender = () => {
      if (this.state.list.length) {
        return this.state.list.map(item => <div key={item.id}>{item.name}------{item.age}</div>)
      }
      return <div>暂无数据</div>
    }

    return (
      <>
        <div>07list渲染</div>
        <div>{listRender()}</div>
        <button onClick={this.delete}>点击删除</button>
        <div>{this.state.list.map(item => <div key={item.id}>{item.name}------{item.age}</div>)}</div>
      </>
    )
  }
}
