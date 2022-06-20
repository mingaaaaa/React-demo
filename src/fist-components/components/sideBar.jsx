import React, { useState } from "react";

export default function SideBar(props) {
  const [test, setTest] = useState(props.test);
  const [testObj, setTestObj] = useState(props.testObj);
  return (
    <>
      <h1>{test}</h1>
      <h1>{testObj.text}</h1>
      <div>-----------------------</div>
      <h1>{props.test}</h1>
      <h1>{props.testObj.text}</h1>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.height}</h1>
    </>
  );
}
