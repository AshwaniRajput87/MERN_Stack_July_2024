import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./App.css";
import Counter from "./components/withRedux/Counter";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
};

export default App;
