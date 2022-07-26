import "./ProjectDashboard.scss";

import Task from "./Task";


function ProjectDashboard() {

  return (
    <div className="project-dashboard">
      <div className="dashboard-card">
        <h2 className="dashboard-title">Website Redesign</h2>
        <p className="dashboard-subline">YESILOVEGUITAR</p>
        <p className="task-title">Tasks</p>
        <div className="add-task-container">
          <input className="task-input" placeholder="Add new task" />
          <button>+</button>
        </div>
        <div className="underline"></div>
        <div className="tasks">
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
        <div className="underline"></div>

        <div className="daskboard-control-buttons">
          <button className="finish-project">FINISH</button>
          <button className="delete-project">delete</button>
        </div>
      </div>
    </div>

  );
}

export default ProjectDashboard;
