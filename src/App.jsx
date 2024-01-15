import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TaskCol from "./componets/TaskCol";
import TaskForm from "./componets/TaskForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto flex flex-col items-center gap-5">
        <h2 className="text-xl">Welcome to Task Trek</h2>
        <div className="app_header">
          <TaskForm
            htmlTag="Html"
            cssTag="Css"
            jsTag="Javascrpit"
            reactTag="React"
          />
        </div>
        <div className="app_main flex flex-row justify-center w-full gap-x-0.5 p-3">
          <TaskCol title={"Todo"} img={"assets/direct-hit.png"} />
          <TaskCol title={"Doing"} img={"assets/glowing-star.png"} />
          <TaskCol title={"Done"} img={"assets/check-mark-button.png"} />
        </div>
      </div>
    </>
  );
}

export default App;
