import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [],
  },

  reducers: {
    addTask(state, todoObj) {
      const allTasks = [...state.tasks, todoObj.payload];
      state.tasks = allTasks;
    },
  },
});

export default TodoSlice;
