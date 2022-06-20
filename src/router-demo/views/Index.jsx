import React from "react";
import { useLocation } from "react-router-dom";

export default function Index(props) {
  let location = useLocation();
  console.log(location);
  const toPage = (path) => {
    props.history.push(path);
  };
  const NavList = () => {
    return (
      <div
        style={{
          border: "1px solid red",
          display: "flex",
          justifyContent: "space-between",
          width: "900px",
          margin: "auto",
          height: "50px",
        }}
      >
        <div onClick={() => toPage("/index")}>index</div>
        <div onClick={() => toPage("/center")}>center</div>
        <div onClick={() => toPage("/mine")}>mine</div>
      </div>
    );
  };
  return (
    <div>
      Index <NavList></NavList>
    </div>
  );
}
