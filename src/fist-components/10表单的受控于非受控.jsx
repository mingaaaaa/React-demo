import React, { Component } from "react";

const Child = (props) => {
  return <div>{props.name}</div>;
};

class Form extends Component {
  state = {
    name: "张三",
  };
  render() {
    return (
      <div>
        {/* 不受控表单组件 */}
        {/* <input type="text" defaultValue="aaa" /> */}

        {/* 受控组件 */}
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        ></input>
        <Child {...this.state}></Child>
      </div>
    );
  }
}

export default Form;
