import React from "react";

const TaskTag = ({ tagName, bgClr, handleSelectTag, selected }) => {
  // console.log(bgClr);
  // console.log(`bg-${bgClr}-500`);

  const styleTag = {
    Html: { backgroundColor: "red", color: "white" },
    Css: { backgroundColor: "blue", color: "white" },
    Javascript: { backgroundColor: "yellow", color: "white" },
    React: { backgroundColor: "green", color: "white" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <div>
      <button
        type="button"
        value="html"
        className={`bg-white-500 text-dark p-1 rounded border`}
        onClick={() => handleSelectTag(tagName)}
        style={selected ? styleTag[tagName] : styleTag.default}
      >
        {tagName}
      </button>
    </div>
  );
};

export default TaskTag;
