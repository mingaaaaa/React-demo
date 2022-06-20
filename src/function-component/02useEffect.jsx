import React, { useState, useEffect } from "react";

export default function Test() {
  const [count, setCount] = useState(0);

  // 第二个是依赖数组
  // 没有第二个参数时不停的在调用
  // 第二个值为空数组时只会执行一次
  // useEffect(() => {}, []);
  // useEffect可以return一个方法，这个方法会 在组件销毁的时候会被调用
  
  useEffect(() => {
    // setCount((count) => count + 1);
    console.log(123);
  }, [count]);

  // useLayoutEffect和useEffect的区别在于调用时机不同，
  // useLayoutEffect和原来componentDidMount&componentDidUpdate一致，在DOM更新后立即同步调用代码
  // useEffect在整个页面渲染完毕后才会执行

  // 如果需要DOM操作建议使用useLayoutEffect只有重绘和回流的代价
  return (
    <div>
      Test
      {count}
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        123
      </button>
    </div>
  );
}
