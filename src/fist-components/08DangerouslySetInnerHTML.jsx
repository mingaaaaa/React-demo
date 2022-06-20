import React, { Component } from "react";

export default class DangerouslySetInnerHTML extends Component {
  state = {
    list: [111],
  };
  inputVNode = React.createRef();

  setRichText = () => {
    const dom = this.inputVNode;
    let list = [this.state.list];
    list.push(dom.current.value);
    this.setState({
      list,
    });
  };
  render() {
    return (
      <>
        <div>富文本编辑器</div>
        <input type="text" ref={this.inputVNode} />
        <button onClick={this.setRichText}>添加富文本</button>
        {this.state.list.map((item, index) => (
          <div
            key={index}
            dangerouslySetInnerHTML={{
              __html: item,
            }}
          ></div>
        ))}
      </>
    );
  }
}
