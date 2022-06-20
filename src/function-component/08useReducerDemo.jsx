import React, { useContext, useReducer } from "react";

const reducer = (prevState, value) => {
  // 注意更改值的时候不要改原数据，否则无法更新视图
  const obj =
    value === 1
      ? Object.assign({ ...prevState }, { a: prevState.a + "a" })
      : Object.assign({ ...prevState }, { b: prevState.b + "b" });
  return obj;
};

const intialState = {
  a: "aaa",
  b: "bbb",
};

const globalContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <globalContext.Provider value={{ state, dispatch }}>
      <div>
        <Child1 />
        <Child2 />
        <Child3 />
      </div>
    </globalContext.Provider>
  );
}

function Child1() {
  const { dispatch } = useContext(globalContext);
  return (
    <div>
      <button onClick={() => dispatch(1)}>aaa</button>
      <button onClick={() => dispatch(2)}>bbb</button>
    </div>
  );
}
function Child2() {
  const { state } = useContext(globalContext);
  return <div>{state.a}</div>;
}
function Child3() {
  const { state } = useContext(globalContext);
  return <div>{state.b}</div>;
}

export default App;
