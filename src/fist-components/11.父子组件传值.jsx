import React, { Component, useState } from "react";

const Child = (props) => {
  const [name, setName] = useState(props.name);
  const changeName = () => {
    props.changeName(name);
  };
  return (
    <div>
      {props.name}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={changeName}>点击改变name</button>
    </div>
  );
};

class Second extends Component {
  state = {
    name: this.props.name,
  };
  changeName = () => {
    this.props.changeName(this.state.name);
  };
  render() {
    return (
      <div>
        {this.props.name}
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.changeName}>点击改变name</button>
      </div>
    );
  }
}

export default class Test extends Component {
  state = {
    name: "张三",
  };
  render() {
    return (
      <>
        <div>11.父子组件传值</div>
        <Child
          name={this.state.name}
          changeName={(name) => {
            this.setState({ name });
          }}
        ></Child>
        <Second
          {...this.state}
          changeName={(name) => {
            this.setState({ name });
          }}
        ></Second>
      </>
    );
  }
}
