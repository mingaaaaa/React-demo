import React, { useCallback, useState } from "react";

const useCounter = (step) => {
  const [counter, setCounter] = useState(0);
  const increment = useCallback(
    () => setCounter(counter + step),
    [counter, step]
  );
  const decrement = useCallback(
    () => setCounter(counter - step),
    [counter, step]
  );
  const reset = useCallback(() => setCounter(0), []);

  return { counter, increment, decrement, reset };
};

export default function Test() {
  const { counter, increment, decrement, reset } = useCounter(2);
  return (
    <div>
      -----{counter}----------
      <button onClick={increment}>q</button>
      <button onClick={decrement}>w</button>
      <button onClick={reset}>e</button>
    </div>
  );
}
