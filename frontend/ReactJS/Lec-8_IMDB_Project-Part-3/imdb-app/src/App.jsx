import Counter from "./components/counter/Counter";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import ParentComp from "./components/ParentComp";
import CounterProvider from "./context/counter/CounterProvider.jsx";
import Routing from "./routes/Routing";

const App = () => {
  return (
    <>
      {/* <Navbar />
      <Routing /> */}
      {/* <ParentComp /> */}
      <CounterProvider>
        {/* <Header /> */}
        <Navbar />
        <Routing />
        <Counter />
      </CounterProvider>
    </>
  );
};

export default App;
