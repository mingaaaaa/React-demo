import React, { useState, useEffect } from "react";
import RouteList from "../router";
import { BrowserRouter, useRoutes } from "react-router-dom";
import store from "../redux/store";

function APP() {
  // const [num, setNum] = useState(store.getState().num);

  // useEffect(() => {
  //   // 订阅模式
  //   store.subscribe(() => {
  //     setNum(store.getState().num);
  //   });
  // }, []);

  // let a = store.getState().num;
  // useEffect(() => {
  //   a = store.getState().num;
  // }, [store.getState().num]);

  const RouterView = () => {
    return useRoutes(RouteList);
  };
  return (
    <div>
      {/* APP-----------{num}----------{a} */}
      <BrowserRouter>
        <RouterView />
      </BrowserRouter>
    </div>
  );
}

export default APP;
