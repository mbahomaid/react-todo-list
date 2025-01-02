import { useState } from "react";
import "./App.css";
import Input from "./components/input";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <h1>React Todo List</h1>
      <Input taskList={taskList} setTaskList={setTaskList} />
      <div>
        {taskList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </div>
    </>
  );
}

export default App;
