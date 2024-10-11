import { useContext } from "react";
import CounterContext from "./CounterContext";

export const useCounter = () => {
  console.log(CounterContext);
  return useContext(CounterContext);
};
