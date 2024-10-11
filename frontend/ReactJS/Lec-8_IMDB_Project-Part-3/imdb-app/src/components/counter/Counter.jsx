import { useState } from "react";

import { Button } from "@mui/material";
import { useCounter } from "../../context/counter/useCounter";

const Counter = () => {
  const { count, handleIncrement } = useCounter();
  console.log(count);

  return (
    <>
      <h1>Counter comp</h1>
      <p>Count value: {count}</p>
      <Button onClick={handleIncrement} variant="text">
        +
      </Button>
    </>
  );
};

export default Counter;
