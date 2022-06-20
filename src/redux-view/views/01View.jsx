/*
 * @Author: yangming.zhang yangming.zhang@epichust.com
 * @Date: 2022-06-20 23:07:16
 * @LastEditors: yangming.zhang yangming.zhang@epichust.com
 * @LastEditTime: 2022-06-21 00:59:11
 * @FilePath: \React-demo\src\redux-view\views\01View.jsx
 * @Description: 
 * 
 * Copyright (c) 2022 by yangming.zhang yangming.zhang@epichust.com, All Rights Reserved. 
 */
import React, { useEffect, useState } from "react";
import store from "../redux/store";
import { NavLink } from "react-router-dom";

function Demo() {
  const [double, setDouble] = useState(store.getState().num * 2);
  store.subscribe(() => {
    console.log(123);
    setDouble(store.getState().num * 2);
  });
  /**
   * @description: 取消订阅
   * @return {*}
   */
  useEffect(() => {
    console.log("我被创建了");
    let unsubscribe = () => {
      console.log("取消订阅");
      store.subscribe(() => {
        console.log(store.getState());
      })();
    };
    return () => {
      console.log("我被销毁了");
      unsubscribe();
    };
  }, []);
  

  return (
    <div>
      Demo---------{double}
      <div>
        <NavLink to="/02">other</NavLink>
      </div>
    </div>
  );
}

export default Demo;
