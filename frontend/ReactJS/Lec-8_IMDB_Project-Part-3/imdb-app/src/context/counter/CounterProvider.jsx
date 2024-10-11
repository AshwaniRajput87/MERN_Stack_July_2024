import { useState } from "react";
import CounterContext from "./CounterContext";

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <CounterContext.Provider value={{ count, handleIncrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
