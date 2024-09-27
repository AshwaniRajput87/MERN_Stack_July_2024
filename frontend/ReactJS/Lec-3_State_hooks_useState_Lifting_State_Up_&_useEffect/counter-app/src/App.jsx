import "./App.css";
import Counter from "./components/counter/Counter";
import SignUp from "./components/signup/SignUp";

const App = () => {
  return (
    <>
      <Counter count={1} />
      <Counter count={2} />
      {/* <SignUp /> */}
    </>
  );
};

export default App;
