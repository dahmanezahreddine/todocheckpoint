import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const Addtask = () => {
  const [taskInfo, setTaskInfo] = useState({ title: "" });
  const dispatch = useDispatch();
  const handleChange = (e) =>
    setTaskInfo({ id: uuidv4(), title: e.target.value, isdone: false });
  const handleAddTask = () => {
    dispatch({ type: "addtask", payload: taskInfo });
    setTaskInfo({
      title: "",
    });
  };

  return (
    <div>
      <input type="text" value={taskInfo.title} onChange={handleChange} />
      <button onClick={handleAddTask}>AddTask</button>
    </div>
  );
};

export default Addtask;
