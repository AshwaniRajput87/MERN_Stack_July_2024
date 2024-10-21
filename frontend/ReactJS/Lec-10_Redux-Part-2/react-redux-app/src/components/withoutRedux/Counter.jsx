import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <>
      <p>Count Value: {count}</p>

      <button onClick={handleIncrement}>Increment</button>
    </>
  );
};

export default Counter;
