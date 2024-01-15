import React from "react";
import TaskTag from "./TaskTag";

const TaskSection = () => {
  return (
    <div>
      <div className="task_secion border-2 p-2 flex flex-col gap-4">
        <h2 className="task_title text-xl">Task Title</h2>
        <div className="task_sec_bottom_line flex justify-between items-center">
          <div className="task_tag flex gap-1">
            <TaskTag tagName={"Html"} bgClr={"red"} />
            <TaskTag tagName={"Css"} bgClr={"blue"} />
            <TaskTag tagName={"Javascript"} bgClr={"yellow"} />
          </div>
          <img src="assets/delete.png" alt="" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default TaskSection;
