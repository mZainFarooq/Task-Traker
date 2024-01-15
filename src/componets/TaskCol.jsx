import React from "react";
import TaskTag from "./TaskTag";
import TaskSection from "./TaskSection";

const TaskCol = ({ title, img }) => {
  return (
    <div className="task_col w-2/6 flex flex-col gap-5">
      <div className="task_col_heading flex gap-2 items-center">
        <h2 className="text-3xl">{title}</h2>
        <img src={`${img}`} alt="" className="w-6 h-6" />
      </div>
      <TaskSection />
    </div>
  );
};

export default TaskCol;
