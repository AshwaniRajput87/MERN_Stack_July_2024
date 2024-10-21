import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./App.css";
import Counter from "./components/withRedux/Counter";
import Todo from "./components/withRedux/todo";
import User from "./components/withRedux/User";

const App = () => {
  return (
    <>
      <Provider store={store}>
        {/* <Counter /> */}
        {/* <Todo /> */}
        {/* <Todo /> */}
        <User />
      </Provider>
    </>
  );
};

export default App;
