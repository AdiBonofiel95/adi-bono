import { useState } from "react";

function TaskList() {
    const exmpa = ['a', 'b', 'c', 'd'];
    const [taskTrack, setTaskTrack] = useState("");
    let [tasks, setTasks] = useState([]);

    const typeTreack = (event) => setTaskTrack(event.target.value)

    const onSubmit = () => {
        if (taskTrack === "") {
            return;
        }

        if (tasks.includes(taskTrack)) {
            setTaskTrack("");
            return;
        }

        setTasks([...tasks, taskTrack]);
        setTaskTrack("");
    }

    const onKeyUpHandler = (event) => {
        if (event.key === "Enter") {
            onSubmit();
        }
    }

    const onTaskClick = (idx) => {
        const newList = [...tasks];
        newList.splice(idx, 1);
        setTasks(newList);
    }
    
    const displayTasks = (item, idx) => {
        return (
            <li key={idx} onClick={() => onTaskClick(idx)} style={{width: "min-content"}}>
                {item}
            </li>
        );
    }

    return (
        <div style={{paddingLeft: 10}}> 
            <p style={{display:'flex', gap:4}}>Insert Task: 
                <input type="text" 
                id="task track" 
                className="task track"
                value={taskTrack}
                onChange={typeTreack} 
                onKeyUp={onKeyUpHandler}
                placeholder="buy veggies"></input>
                <button 
                type="submit" 
                id="submit button"
                onClick={onSubmit}>submit</button>
                </p>
            <ul>
                {tasks.map(displayTasks)}
            </ul>
        </div>
    );
}

export default TaskList;