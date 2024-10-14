import { configureStore } from "@reduxjs/toolkit";

import CounterReducer from "./slices/CounterSlice";
/* eslint-disable no-underscore-dangle */
export const store = configureStore(
  {
    reducer: {
      counter: CounterReducer,
      // create another and mention that new slice slice
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/* eslint-enable */
