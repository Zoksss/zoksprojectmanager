import './ProjectCard.scss';
import ClockImg from "../../../src/images/clock.png"


function ProjectCard(props) {
    return (
        <div className="project-card" onClick={() => { props.setIsDashboard(true); props.setCurrId(props.id); }}>
            <p className="project-card-top-title">Project</p>
            <h2 className="project-card-title">{props.name}</h2>
            <h2 className="project-card-for-title">{props.subline}</h2>
            <div className="project-card-tasks">
                <div className="project-card-tasks-card">
                    <p className="project-card-tasks-card-number">{props.taskStatus[0]}</p>
                    <p className="project-card-tasks-card-desc">tasks</p>
                </div>
                <div className="project-card-tasks-card">
                    <p className="project-card-tasks-card-number">{props.taskStatus[1]}</p>
                    <p className="project-card-tasks-card-desc">tasks done</p>
                </div>
                <div className="project-card-tasks-card">
                    <p className="project-card-tasks-card-number">{props.taskStatus[2]}</p>
                    <p className="project-card-tasks-card-desc">tasks left</p>
                </div>
            </div>
            <div className="date-added">
                <img src={ClockImg} alt="clock image" />
                <p className="date-added-number">0 MINS AGO</p>
            </div>
            <div className="progress-bar"></div>
        </div>
    );
}

export default ProjectCard;
