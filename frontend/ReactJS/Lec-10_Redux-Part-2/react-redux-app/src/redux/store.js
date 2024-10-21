import { configureStore } from "@reduxjs/toolkit";

import CounterReducer from "./slices/CounterSlice";
import TodoSlice from "./slices/TodoSlice";
import UserSlice from "./slices/UserSlice";
/* eslint-disable no-underscore-dangle */
export const store = configureStore(
  {
    reducer: {
      counter: CounterReducer,
      todo: TodoSlice.reducer,
      userSlice: UserSlice.reducer,
      // create another and mention that new slice slice
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/* eslint-enable */
