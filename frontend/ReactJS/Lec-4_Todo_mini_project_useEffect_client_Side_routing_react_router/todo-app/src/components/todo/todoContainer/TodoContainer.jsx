import { useState } from "react";
import InputBox from "../inputbox/InputBox";
import TaskItems from "../taskitems/TaskItems";
const TodoContainer = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    console.log(task);

    if (task) {
      setTasks([...tasks, task]);
    }
  };

  const deleteTask = (id) => {
    console.log(id);

    const remainingTasks = tasks.filter((task) => task.id !== parseInt(id));
    console.log(remainingTasks);

    setTasks(remainingTasks);
  };

  // const tasks = [
  //   { id: Date.now() + 1, title: "Task-1" },
  //   { id: Date.now() + 2, title: "Task-2" },
  //   { id: Date.now() + 3, title: "Task-3" },
  //   { id: Date.now() + 4, title: "Task-4" },
  //   { id: Date.now() + 5, title: "Task-5" },
  // ];

  return (
    <>
      <InputBox addTask={addTask} />
      <TaskItems tasks={tasks} deleteTask={deleteTask} />
    </>
  );
};

export default TodoContainer;
