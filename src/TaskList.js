import { useState, useRef } from "react";

function TaskList() {
    const [taskTrack, setTaskTrack] = useState("");
    const focusIn = useRef(null)
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
        focusIn.current.focus();
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
        focusIn.current.focus();
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
                ref={focusIn}
                onChange={typeTreack} 
                onKeyUp={onKeyUpHandler}
                placeholder="buy veggies"
                autoFocus/>
                <button 
                type="submit" 
                id="submit button"
                onClick={onSubmit}>
                    submit
                </button>
            </p>
            <ul>
                {tasks.map(displayTasks)}
            </ul>
        </div>
    );
}

export default TaskList;