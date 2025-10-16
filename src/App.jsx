import ProgressTracker from "./Components/ProgressTracker";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";

export default function App() {
  return(
    <div>
      <h1>TaskNest</h1>
      <h2>Your tasks, neatly nested.</h2>
      <TaskForm />
      <TaskList />
      <ProgressTracker />
      <button>Clear All Tasks</button>
    </div>
  )
}