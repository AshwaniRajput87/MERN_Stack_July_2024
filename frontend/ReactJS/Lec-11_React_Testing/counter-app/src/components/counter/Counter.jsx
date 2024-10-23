import React from "react";
import { useState } from "react";
//import "./counter.style.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className="counter-container">
        <button onClick={handleDecrement}>-</button>
        <p className="text">{count}</p>
        <button onClick={handleIncrement}>+</button>
      </div>
    </>
  );
};

export default Counter;
