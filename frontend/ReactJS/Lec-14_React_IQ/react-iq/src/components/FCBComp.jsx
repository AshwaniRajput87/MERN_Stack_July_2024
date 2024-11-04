import React, { useState } from "react";

const FCBComp = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
};

export default FCBComp;
