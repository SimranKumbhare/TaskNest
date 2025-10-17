import { useState } from "react"

export default function TaskForm({addTask}) {
    const[task, setTask] = useState('');
    const[priority, setPriority] = useState('Medium');
    const[type, setType] = useState('General');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({text: task, priority, type, completed: false});

        //reset
        setTask('');
        setPriority('Medium');
        setType('General');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add a new task..." value={task}
            onChange={(e) => setTask(e.target.value)}/>
            {/* <h1>{task} {priority} {type}</h1> */}
            <div>
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="" disabled selected>Select task Priority</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                
                <select value={type} onChange={(e)=> setType(e.target.value)}>
                    <option value="" disabled selected> Select type of task </option>
                    <option value="general">General</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                </select>
                Due date:
                <input type="date" id="due-datetime"/>
            </div>
            <button type="submit">Add Task</button>
        </form>
    )
}
