import { createStore } from "redux";

const state = { num: 0 };

const reducer = (prevState = state, action) => {
  const obj = { ...prevState };
  switch (action.type) {
    case "add":
      obj.num++;
      break;
    case "decrease":
      obj.num--;
      break;
  }
  return obj;
};

// 第二个参数就是state。也可以使用函数的默认值来注册state
const store = createStore(reducer);

export default store;
