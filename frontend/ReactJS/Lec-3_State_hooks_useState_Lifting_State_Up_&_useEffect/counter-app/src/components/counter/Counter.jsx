import { useState } from "react";
import "./counter.css";

const Counter = ({ count }) => {
  const [counter, setCounter] = useState(count); // useState() hook always returns an array of two elements, state variable and state update function

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="counter-container">
      <button onClick={handleDecrement}>-</button>
      <p className="count-text">{counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
