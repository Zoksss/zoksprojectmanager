import "../../ProjectDashboard/ProjectDashboard.scss"
import "./ToDo.scss";

import Checkmark from "../../../images/check.png";
import X from "../../../images/x.png";

function ToDo() {

    return (
        <div className="project-dashboard-todo dashboard-card">
            <h1 className="project-dashboard-todo-title">Website Redesign</h1>
            <p className="project-dashboard-subline">Yesiloveguotar</p>
        <div className="project-dashboard-todo-row">
            <p className="project-dashboard-todo-title">Tasks</p>
            <button className="project-dashboard-todo-add-task">+</button>
        </div>
        <div className="project-dashboard-tasks">
            <div className="task">
                <input type="text" className="task-input" value="tes"/>
                <button className="finish-task"><img src={Checkmark} alt="checkmark" /></button>
                <button className="remove-task"><img src={X} alt="x" /></button>
            </div>
            <div className="task">
                <input type="text" className="task-input" value="tes"/>
                <button className="finish-task"><img src={Checkmark} alt="checkmark" /></button>
                <button className="remove-task"><img src={X} alt="x" /></button>
            </div>
            <div className="task">
                <input type="text" className="task-input" value="tes"/>
                <button className="finish-task"><img src={Checkmark} alt="checkmark" /></button>
                <button className="remove-task"><img src={X} alt="x" /></button>
            </div>
            
        </div>
        </div>
    );
}

export default ToDo;
