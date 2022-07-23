import './ProjectCard.scss';
import ClockImg from "../../../src/images/clock.png"


function ProjectCard() {
    return (
        <div className="project-card">
            <p className="project-card-top-title">Project</p>
            <h2 className="project-card-title">Website Redesign</h2>
            <h2 className="project-card-for-title">Yesiloveguitar</h2>
            <div className="project-card-tasks">
                <div className="project-card-tasks-card">
                    <p className="project-card-tasks-card-number">16</p>
                    <p className="project-card-tasks-card-desc">days left</p>
                </div>
                <div className="project-card-tasks-card">
                    <p className="project-card-tasks-card-number">12</p>
                    <p className="project-card-tasks-card-desc">tasks</p>
                </div>
                <div className="project-card-tasks-card">
                    <p className="project-card-tasks-card-number">6</p>
                    <p className="project-card-tasks-card-desc">tasks done</p>
                </div>
            </div>
            <div className="date-added">
                <img src={ClockImg} alt="clock image" />
                <p className="date-added-number">13 MINS AGO</p>
            </div>
            <div className="progress-bar"></div>
        </div>
    );
}

export default ProjectCard;
