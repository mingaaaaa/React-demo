import React, { Component } from "react";
import a from "prop-types";

export default class Content extends Component {
  static propTypes = {
    content: a.string,
  };

  static defaultProps = {
    back: "fanhui",
  };

  render() {
    let { content, back } = this.props;
    return (
      <div>
        {content}的内容 <button>{back}</button>
        <h1>{this.props.name}</h1>
        <h1>{this.props.age}</h1>
      </div>
    );
  }
}

// console.log(a);

// 这是Es7的写法，等同于es6中类的静态属性(static
// Content.prototype = {
//   content: a.string,
// };
