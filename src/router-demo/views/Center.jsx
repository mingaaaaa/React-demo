import React, { useEffect } from "react";
import { HashRouter, Route, Routes, useNavigate } from "react-router-dom";
import Test1 from "./Test";
import Test2 from "./Test2";

export default function Center() {
  function Redirect({ to }) {
    let navigate = useNavigate();
    useEffect(() => {
      navigate(to);
    });
    return null;
  }

  return (
    <div>
      Center嵌套路由
      <Routes>
        {/* V5写法 */}
        {/* <Route path="/center/test1" componetn={Test1} /> */}
        {/* V6写法 */}
        <Route path="/test1" element={<Test1 />} />
        <Route path="/test2" element={<Test2 />} />
        <Route path="*" element={<Redirect to="test1" />} />
      </Routes>
    </div>
  );
}
