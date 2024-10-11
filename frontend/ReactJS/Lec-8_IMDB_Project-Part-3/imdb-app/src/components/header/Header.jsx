import { useCounter } from "../../context/counter/useCounter";

{
  useCounter;
}

const Header = () => {
  const { count } = useCounter();
  console.log(count);
  return (
    <>
      <h1>Header comp</h1>
      <p>{count}</p>
    </>
  );
};

export default Header;
