import { useEffect, useState } from "react";
import ProgressTracker from "./Components/ProgressTracker";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";

export default function App() {

  const[tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  })

  const addTask = (task) => {
    setTasks([...tasks,task]
      
    );
  }
  return(
    <div>
      <h1>TaskNest</h1>
      <h2>Your tasks, neatly nested.</h2>
      <TaskForm addTask= {addTask}/>
      <TaskList />
      <ProgressTracker />
      <button>Clear All Tasks</button>
    </div>
  )
}