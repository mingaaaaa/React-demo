/*
 * @Author: yangming.zhang yangming.zhang@epichust.com
 * @Date: 2022-06-20 23:07:16
 * @LastEditors: your name
 * @LastEditTime: 2022-06-21 10:03:06
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
  /**
   * @description: 取消订阅
   * @return {*}
   */
  useEffect(() => {
    console.log("我被创建了");
    const unsubscribe = store.subscribe(() => {
      console.log('监听ing:', store.getState());
      console.log(123);
    });
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
