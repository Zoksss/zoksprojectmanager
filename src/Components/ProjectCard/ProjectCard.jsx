import { useTransition, animated } from "react-spring";

import './ProjectCard.scss';
import ClockImg from "../../../src/images/clock.png"


function ProjectCard(props) {
    const transition = useTransition(!props.isDashboard, {
        from: { right: 50, y: 0, opacity: 0 },
        enter: { right: 0, y: 0, opacity: 1 },
        leave: { right: 50, y: 0, opacity: 0 },
    });
    return (
        <>
            {transition((style, item) => item ?
                <animated.div className="project-card" style={style} onClick={() => { props.setIsDashboard(true); props.setCurrId(props.id); }}>
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
                </animated.div> : ""
            )}
        </>
    );
}

export default ProjectCard;
