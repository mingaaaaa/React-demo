import React from "react";
import TRouter from "./router/index";
import styles from "./index.module.scss";
import { NavLink, Routes, useNavigate } from "react-router-dom";

const NavBox = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.box}>
      <div onClick={() => navigate("/index")}>index</div>
      <div onClick={() => navigate("/center")}>center</div>
      <div onClick={() => navigate("/mine")}>mine</div>
    </div>
  );
};

const NavList = (props) => {
  console.log(props);
  const toPage = (path) => {
    props.history.push(path);
  };
  return (
    <div className={styles.box}>
      <div onClick={() => toPage("/index")}>index</div>
      <div onClick={() => toPage("/center")}>center</div>
      <div onClick={() => toPage("/mine")}>mine</div>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>App</h1>
      <TRouter>
        {/* <NavList /> */}
        <NavBox />
        <div className={styles.box}>
          <NavLink to="/index">index</NavLink>
          <NavLink to="/center">center</NavLink>
          <NavLink to="/mine">mine</NavLink>
        </div>
      </TRouter>
    </div>
  );
}
