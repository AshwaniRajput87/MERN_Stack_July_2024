import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoSlice from "../../redux/slices/TodoSlice";
const actions = TodoSlice.actions;

const Todo = () => {
  const [value, setValue] = useState("");

  const tasks = useSelector((store) => {
    console.log("store value", store.todo);
    return store.todo.tasks;
  });

  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(actions.addTask(value));
    setValue("");
  };

  return (
    <>
      <h2>Todo Example with Redux</h2>

      <div className="input_box">
        <input
          placeholder="Enter the value"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => addTask()}>Add Task</button>
      </div>

      <div className="task_list">
        <ul>
          {tasks &&
            !!tasks.length &&
            tasks.map((task, idx) => {
              return <li key={idx}>{task}</li>;
            })}
        </ul>
      </div>
    </>
  );
};

export default Todo;
