import React, { useContext } from "react";

const globalContext = React.createContext();

export default function Test() {
  return (
    <globalContext.Provider value={{ name: "逾明", age: "22" }}>
      <Child></Child>
      <Child2></Child2>
    </globalContext.Provider>
  );
}

function Child() {
  const consumer = useContext(globalContext);
  return (
    <div>
      {consumer.name}--------{consumer.age}
    </div>
  );
}

class Child2 extends React.Component {
  render() {
    return (
      <globalContext.Consumer>
        {(consumer) => {
          return (
            <div>
              {consumer.name}--------{consumer.age}
            </div>
          );
        }}
      </globalContext.Consumer>
    );
  }
}
