import React, { useState } from "react";
import { Button } from "antd"

const Eventcomponent = () => {

  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount((count) => count + 1)
  }

  return (
    <div>
      <div>这是展示数字{count}</div>
      <Button type="primary" onClick={handleCount}>Primary Button</Button>
    </div>
  )
}

export default Eventcomponent