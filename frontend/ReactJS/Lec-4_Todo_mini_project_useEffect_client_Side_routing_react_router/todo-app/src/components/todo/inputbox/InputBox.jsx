import { useState } from "react";
import "./inputBox.css";

const InputBox = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const handleAddTask = () => {
    if (title) {
      addTask({
        id: Date.now(),
        title,
      });
      setTitle("");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="Enter you task"
          onChange={handleChange}
          value={title}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </>
  );
};

export default InputBox;
