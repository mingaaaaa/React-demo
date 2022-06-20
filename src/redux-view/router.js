import { useEffect } from "react";
import Demo from "./views/01View";
import Other from "./views/02View";
import { useNavigate } from "react-router-dom";

function Redirect({ to }) {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
}

export default [
  {
    path: "/",
    element: <Redirect to="/01" />,
  },
  {
    path: "/01",
    element: <Demo />,
  },
  {
    path: "/02",
    element: <Other />,
  },
];
