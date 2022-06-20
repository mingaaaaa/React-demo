import React, { useReducer } from "react";

// 处理状态的方法，返回值会替换原来的state而不是合并
const reducer = (prevState, value) => {
  console.log(value);
  return value;
};

// 外部状态
const intialState = {
  count: 0,
};

function Test() {
  // 第一个值为状态，第二个是一个方法，这个方法会触发reducer，同时会将传递进来的参数传递给reducer
  const [state, setCount] = useReducer(reducer, intialState);

  return (
    <div>
      <button
        onClick={() => {
          setCount({
            count: state.count - 1,
          });
        }}
      >
        -
      </button>
      {state.count}
      <button
        onClick={() => {
          setCount({
            count: state.count + 1,
          });
        }}
      >
        +
      </button>
    </div>
  );
}

export default Test;
