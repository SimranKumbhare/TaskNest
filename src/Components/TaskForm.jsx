export default function TaskForm() {
    return(
        <form>
            <input type="text" placeholder="Add a new task..." />
            <div>
                <select>
                    <option value="" disabled selected>Select task Priority</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                
                <select name="" id="">
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
