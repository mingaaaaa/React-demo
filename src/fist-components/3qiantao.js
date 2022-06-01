import React, { Component } from 'react'
import Second from './2function'
import First from './fist-class'
import "./css/01.css"

const Demo = () => <div>demo</div>;

export default class Qiantao extends Component {
  render() {
    let flag = true;
    return (
      <div>Qiantao
        <First></First>
        <Second></Second>
        <Demo></Demo>
        {0.1 + 0.2}
        {flag ? 'aaa' : 'bbb'}
        <div style={{ color: 'red', backgroundColor: 'skyblue' }}>demo</div>
        <div className='demo'>aaa</div>
      </div>
    )
  }
}
