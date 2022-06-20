import React from "react";
import ReactDOM from "react-dom";

// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import "antd/dist/antd.min.css";

import Root from "./redux-view/views/APP";

ReactDOM.render(<Root></Root>, document.querySelector("#root"));
