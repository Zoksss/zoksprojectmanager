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
  
  const addTask = (text) => {
    if (text === "" || text === " ") return;
    let x = { text: text, isFinished: false };
    let allc = [...props.allCards];
    let temp = allc[props.currId];
    let m = Array.from(temp.tasks);
    m.push(x);
    temp.tasks = m;
    allc[props.currId] = temp;
    props.setAllCards(allc);
    callculateTasks();

  }
  const deleteTask = (key) => {
      let allc = [...props.allCards];
      let temp = allc[props.currId];
      let m = [...props.allCards[props.currId].tasks];
      m.splice(key,1);
      temp.tasks = m;
      allc[props.currId] = temp;
      props.setAllCards(allc);
      callculateTasks();
  }

  const finishTask = (key) => {
    let allc = [...props.allCards];
    let temp = allc[props.currId];
    let m = [...props.allCards[props.currId].tasks];
    m = m[key];
    m.isFinished = true;
    temp.tasks[key] = m;
    allc[props.currId] = temp;
    props.setAllCards(allc);
    callculateTasks();
  }

  const callculateTasks = () => {
    let allTasks = [...props.allCards[props.currId].tasks].length;
    let finishedTasks = [...props.allCards[props.currId].tasks].filter(task => task.isFinished === true).length;
    let leftTasks = allTasks - finishedTasks;
    let tasksStatus = [allTasks, finishedTasks, leftTasks];
    let allc = [...props.allCards];
    let temp = allc[props.currId];
    let m = [...props.allCards[props.currId].taskStatus];
    m = tasksStatus
    temp.taskStatus = m;
    allc[props.currId] = temp;
    props.setAllCards(allc);
  }

  tasksDom = props.currId !== -1 && props.allCards[props.currId].tasks?.map((task, i) => {
    return !task.isFinished && < Task text={task.text} key={i} id={i} deleteTask={deleteTask} finishTask={finishTask}/>
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
