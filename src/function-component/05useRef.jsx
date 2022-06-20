import React, { useRef } from "react";

export default function Test() {
  const Dom = useRef();
  // useRef也可以保存变量
  let aaa = useRef(0);
  return (
    <div>
      Test
      <input type="text" ref={Dom} />
      {aaa.current}
      <button
        onClick={() => {
          console.log(Dom);
          // 此时aaa的值在累加但不会显示在页面上，因为这种方式不会触发视图的更新
          aaa.current++;
        }}
      >
        aaa
      </button>
    </div>
  );
}
