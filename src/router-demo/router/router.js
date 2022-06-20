import React, { useEffect } from "react";
import Index from "../views/Index";
import Center from "../views/Center";
import Mine from "../views/Mine";
import { useNavigate } from "react-router-dom";

function Redirect({ to }) {
  let navigate = useNavigate();
  console.log(navigate);
  useEffect(() => {
    navigate(to);
  });
  return null;
}

const RouteList = [
  {
    path: "/index",
    element: <Index />,
  },
  {
    path: "/center",
    element: <Center />,
  },
  {
    path: "mime",
    element: <Mine />,
  },
  {
    path: "/",
    element: <Redirect to="/center" />,
  },
];
export default RouteList;
