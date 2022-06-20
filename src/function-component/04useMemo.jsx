import React, { useCallback, useMemo, useState } from "react";

// useCallback可以被useMemo所代替

// useCallback(fn,inputs)等同于useMemo(()=>fn,inputs)
// 唯一的却别就是usecallbak不会执行第一个参数函数，而是返回出来
// 而useMemo会执行第一个函数并将结果返回出来

export default function Text() {
  const [count, setCount] = useState(0);
  useMemo(
    () => () => {
      console.log(count);
    },
    [count]
  );

  // useMemo可以完成计算属性
  const double = useMemo(() => count * 2, [count]);
  return (
    <div>
      Text{count}----{double}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
