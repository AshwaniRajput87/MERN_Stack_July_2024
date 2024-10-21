import { useDispatch, useSelector } from "react-redux";
import { CounterAction } from "../../redux/slices/CounterSlice";

const Counter = () => {
  const count = useSelector((store) => store.counter.value);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(CounterAction.increment());
  };

  // decrement logic do as assignment
  return (
    <>
      <h2>Counter App With Redux</h2>
      <p>Counter value: {count} </p>
      <button onClick={handleIncrement}>+</button>
    </>
  );
};

export default Counter;
