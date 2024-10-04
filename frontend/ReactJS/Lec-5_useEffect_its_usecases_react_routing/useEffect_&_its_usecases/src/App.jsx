import "./App.css";
import AutoCounter from "./components/AutoCounter";
import User from "./components/User";
//import UserDetails from "./components/UserDetails";

const App = () => {
  return (
    <>
      {/* <Counter count={1} />
      <Counter count={2} /> */}
      {/* <SignUp /> */}
      <User />
      <AutoCounter />
    </>
  );
};

export default App;
