import React, { useState } from "react";
import TaskTag from "./TaskTag";

const TaskForm = ({ htmlTag, cssTag, jsTag, reactTag }) => {
  // const [title, setTitle] = useState("");
  // const handleTitle = (e) => setTitle(e.target.value);
  // console.log(title);
  // const [status, setStatus] = useState("todo");
  // const handleStatus = (e) => setStatus(e.target.value);
  // console.log(status);
  const [taskArr, setTaskArr] = useState([]);
  const [taskData, setTaskData] = useState({
    name: "",
    status: "todo",
    tags: [],
  });
  const handleChange = (e) => {
    // console.log(e.target);
    // console.log(e.target.name);
    // console.log(e.target.value);

    setTaskData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    // setTaskData({ ...prev, [e.target.name]: e.target.value });
  };
  // console.log(taskData);

  const handleSelectTag = (tagName) => {
    console.log(tagName);
    if (taskData.tags.some((item) => item === tagName)) {
      // setTaskData((prev) => {
      //   return { ...prev, tags: [...prev.tags, tagName] };
      // });
      const filterTags = taskData.tags.filter((item) => item !== tagName);
      // const filterTags = taskData.tags.map((item) => item);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tagName] };
      });
    }
  };
  console.log(taskData);

  const handleCheckTag = (tagName) => {
    return taskData.tags.some((item) => item === tagName);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);

    setTaskArr((prev) => {
      return [...prev, taskData];
    });
  };
  console.log(taskArr);
  return (
    <div className="taks_form">
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Enter your task"
          className="border-2 w-full border-black p-1 my-1"
          onChange={handleChange}
        />
        <div className="task_form_bottom_line flex flex-row gap-1">
          <TaskTag
            tagName="Html"
            bgClr="red"
            handleSelectTag={handleSelectTag}
            selected={handleCheckTag("Html")}
          />
          <TaskTag
            tagName="Css"
            bgClr="blue"
            handleSelectTag={handleSelectTag}
            selected={handleCheckTag("Css")}
          />
          <TaskTag
            tagName="Javascript"
            bgClr="yellow"
            handleSelectTag={handleSelectTag}
            selected={handleCheckTag("Javascript")}
          />
          <TaskTag
            tagName="React"
            bgClr="green"
            handleSelectTag={handleSelectTag}
            selected={handleCheckTag("React")}
          />
          <select
            name="status"
            className="bg-sky-800 text-white p-1 rounded"
            onChange={handleChange}
          >
            <option value="todo">Todo</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
          <button
            type="submit"
            className="bg-purple-900 text-white p-1 rounded"
          >
            +Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
