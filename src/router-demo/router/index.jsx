import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  useRoutes,
} from "react-router-dom";
import RouteList from "./router";
import { createBrowserHistory } from "history";

const RouteBox = () => {
  const element = useRoutes(RouteList);
  return element;
};

export default function TRouter(porps) {
  function Redirect({ to }) {
    let navigate = useNavigate();
    console.log(navigate);
    useEffect(() => {
      navigate(to);
    });
    return null;
  }
  return (
    <BrowserRouter>
      {porps.children}
      {/* <Routes> */}
        {/* 使用Switch后匹配到路由就会跳出不会继续匹配 */}
        {/* exact精确匹配 */}
        {/* V6版本使用routes V5版本使用switch */}
        {/* V5写法 */}
        {/* <Route exact path="/index" component={Index} /> */}
        {/* V6写法 */}
        {/* <Route path="/index" element={<Index history={createBrowserHistory()} />}  />
        <Route path="/center/*" element={<Center />} />
        <Route path="/mine" element={<Mine />} /> */}
        {/* V5写法 */}
        {/* <Redirect from="/" to="/index"></Redirect> */}
        {/* V6写法 */}
        {/* <Route path="/" element={<Redirect to="/center" />} /> */}
      {/* </Routes> */}
      <RouteBox />

    </BrowserRouter>
  );
}
