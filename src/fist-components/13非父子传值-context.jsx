import React, { Component } from "react";

const Context = React.createContext("张");

class Son extends Component {
  static contextType = Context;
  render() {
    return (
      <Context.Consumer>
        {(value) => {
          return (
            <div>
              ----子组件----{value}-----?{this.context}?--
              <Child></Child>
            </div>
          );
        }}
      </Context.Consumer>
    );
  }
}
class Child extends Component {
  static contextType = Context;
  render() {
    return <div>name---------{`${this.context}思思`}</div>;
  }
}

export default class Text extends Component {
  state = {
    firstName: "张",
  };
  render() {
    return (
      <Context.Provider value={this.state.firstName}>
        <div>
          <button
            onClick={() => {
              this.setState({ firstName: "张" });
            }}
          >
            张
          </button>
          <button
            onClick={() => {
              this.setState({ firstName: "李" });
            }}
          >
            李
          </button>
          <button
            onClick={() => {
              this.setState({ firstName: "王" });
            }}
          >
            王
          </button>
          <Son></Son>
        </div>
      </Context.Provider>
    );
  }
}
