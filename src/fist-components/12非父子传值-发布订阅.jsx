import React, { Component, useState } from "react";

const bus = {
  list: [],
  // 订阅
  subscribe(callback) {
    this.list.push(callback);
  },
  // 发布
  publish(v) {
    this.list.forEach((func) => {
      func(v);
    });
  },
};

class Left extends Component {
  render() {
    return (
      <div>
        fistName---
        <button
          onClick={() => {
            bus.publish("张");
          }}
        >
          张
        </button>
        <button
          onClick={() => {
            bus.publish("李");
          }}
        >
          李
        </button>
        <button
          onClick={() => {
            bus.publish("王");
          }}
        >
          王
        </button>
      </div>
    );
  }
}
class Right extends Component {
  constructor() {
    super();
    bus.subscribe((firstName) => {
      this.setState({ firstName });
    });
  }
  state = {
    firstName: "",
  };
  render() {
    return <div>name---------{`${this.state.firstName}思思`}</div>;
  }
}

const Center = () => {
  const [firstName, setFirstName] = useState("");
  bus.subscribe((firstName) => {
    setFirstName(firstName);
  });
  return <div>name---------{`${firstName}三三`}</div>;
};
export default class Test extends Component {
  render() {
    return (
      <div>
        12非父子传值-发布订阅
        <div>
          <Left></Left>
          <Right></Right>
        </div>
        -----------------------------
        <Center></Center>
      </div>
    );
  }
}
