import React, { useState } from "react";

export default function Test() {
  const [name, setName] = useState("张胜男");
  const [age, setAge] = useState("18");
  return (
    <div>
      Test{name}----{age}
      <button onClick={() => setName("张玉印")}>qwe</button>
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)}></input>
      </div>
      <button
        onClick={() =>
          setAge((oldAge) => {
            return +oldAge + 1;
          })
        }
      >
        长大
      </button>
    </div>
  );
}
