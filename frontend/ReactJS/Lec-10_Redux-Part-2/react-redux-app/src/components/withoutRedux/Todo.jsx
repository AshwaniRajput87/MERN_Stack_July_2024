import { useState } from "react";

const Todo = () => {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const addTask = (value) => {
    const allTasks = [...tasks, value];
    setTasks(allTasks);
    setValue("");
    // console.log(allTasks);
  };
  return (
    <>
      <h2>Todo Example without Redux</h2>

      <div className="input_box">
        <input
          placeholder="Enter the value"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => addTask(value)}>Add Task</button>
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
