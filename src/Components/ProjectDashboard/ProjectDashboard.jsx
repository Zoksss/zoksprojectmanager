import { useState, useRef } from "react";
import { useTransition, animated } from "react-spring";
import "./ProjectDashboard.scss";

import Task from "./Task";



function ProjectDashboard(props) {
  const transition = useTransition(props.isDashboard, {
    from: { right: 250, y: 0, opacity: 0 },
    enter: { right: 0, y: 0, opacity: 1 },
    leave: { right: 250, y: 0, opacity: 0 },
  });

  const taskTextRef = useRef(null);
  let tasksDom;
  const [tasks, setTasks] = useState([]);
  
  const addTask = (text) => {
    console.log(props.currId);
    let x = { text: text, isFinished: false, id: tasks.length };
    props.setAllCards(props.allCards[props.currId].tasks.push(x));
    console.log(props.allCards)
  }
  const deleteTask = (key) => {
    console.log(key);
    setTasks(tasks.filter((o) => key !== o.id));
    tasksDom = [];
  }

  tasksDom = props.allCards.length > 0 && props.allCards[props.currId].tasks.filter(task => {
    return <Task text={task.text} key={task.id} id={task.id} deleteTask={deleteTask} />
  })

  return (
    <>
      {transition((style, item) => item ?
        <animated.div className="project-dashboard" style={style}>
          <div className="dashboard-card">
            <h2 className="dashboard-title">Website Redesign</h2>
            <p className="dashboard-subline">YESILOVEGUITAR</p>
            <p className="task-title">Tasks</p>
            <div className="add-task-container">
              <input ref={taskTextRef} className="task-input" placeholder="Add new task" />
              <button onClick={() => addTask(taskTextRef.current.value)}>+</button>
            </div>
            <div className="underline"></div>
            <div className="tasks">
              {tasksDom}
            </div>
            <div className="underline"></div>

            <div className="daskboard-control-buttons">
              <button className="finish-project">FINISH</button>
              <button className="delete-project">delete</button>
            </div>
          </div>
        </animated.div>
        : ""
      )}
    </>
  );
}

export default ProjectDashboard;
