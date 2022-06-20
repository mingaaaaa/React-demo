import React, { useState, useCallback } from "react";

export default function Text() {
  const [count, setCount] = useState(0);

  const a = () => {
    console.log(count);
  };

  // 使用useCallback可以避免组件内定义的方法在state和props更新所导致的组件重新渲染的重新创建
  // 如果第二个参数是空数组，则缓存的方法中的值也是初始值，所以要将使用的变量放入第二个参数中
  const b = useCallback(() => {
    console.log(count);
  }, [count] );

  return (
    <div>
      Text
      {count}
      <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
  );
}
