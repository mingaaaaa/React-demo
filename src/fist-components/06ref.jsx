import React from 'react'

const RefComponent = () => {

  const getInputValue = () => {

  }

  return (
    <div>
      我是子组件
      <input type="text" name="" id="" />
      <button onClick={getInputValue}>获取输入框的值</button>
    </div>
  )
}

class ClassRef extends React.Component {
  inputVNode = React.createRef();
  state = {
    name: "张三",
    lover: "小芳"
  }

  getInputValue = () => {
    const dom = this.inputVNode.current;
    console.log(dom.value);
  }

  setInputValue = () => {
    const dom = this.inputVNode.current;
    dom.value = this.state.name;
  }
  aaa() {
    this.setState({
      name: "李四",
    })
  }

  render() {
    return (
      <div>
        {this.state.name}
        {this.state.lover}
        <input type="text" ref={this.inputVNode} />
        <button onClick={this.getInputValue}>获取输入框的值</button>
        <button onClick={this.setInputValue}>赋值</button>
        <button onClick={this.aaa.bind(this)}>张三大变李四</button>
        <RefComponent></RefComponent>
      </div>
    )
  }
}

export default ClassRef