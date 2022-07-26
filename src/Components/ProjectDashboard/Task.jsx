import "./ProjectDashboard.scss";
import Check from "../../images/check.png"
import X from "../../images/x.png"


function Task() {
    return (
        <div className="task-wrapper">
            <div className="task-text">Create header for website</div>
            <button className="finish-task-btn"><img src={Check} alt="" /></button>
            <button className="delete-task-btn"><img src={X} alt="" /></button>
        </div>
    );
}

export default Task;
