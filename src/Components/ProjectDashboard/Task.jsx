import "./ProjectDashboard.scss";
import Check from "../../images/check.png"
import X from "../../images/x.png"


function Task(props) {
    return (
        <div className="task-wrapper">
            <div className="task-text">{props.text}</div>
            <button className="finish-task-btn" onClick={() => props.finishTask(props.id)}><img src={Check} alt="" /></button>
            <button className="delete-task-btn" onClick={() => props.deleteTask(props.id)}><img src={X} alt="" /></button>
        </div>
    );
}

export default Task;
