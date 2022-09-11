import { useEffect } from "react";
import { useTransition, animated } from "react-spring";

import './ProjectCard.scss';
import ClockImg from "../../../src/images/clock.png"
import React from "react";


function ProjectCard(props) {
    const transition = useTransition(!props.isDashboard, {
        from: { right: 50, y: 0, opacity: 0 },
        enter: { right: 0, y: 0, opacity: 1 },
        leave: { right: 50, y: 0, opacity: 0 },
    });

    function millisToMinutesAndSeconds(millis) {
        return Math.floor(millis / 60000);
      }

    const DateElement = () => {
        let dateAdded = props.dateAdded;
        let string = "";
        let timems = Date.now() - dateAdded;
        let time = millisToMinutesAndSeconds(timems);
        console.log(time)
        if (time >= 59) {
            string = `${Math.round(time / 60)} HOURS AGO`;
        } else {
            string = `${time} MINUTES AGO`;
        }
        return <p className="date-added-number">{string}</p>
    }

    useEffect(() => {
        DateElement();
    }, [props.isDashboard, props.allCards]);

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
                        <DateElement />
                    </div>
                    <div className="progress-bar" style={{ width: 100 / (props.taskStatus[0] / props.taskStatus[1]) + "%" }}></div>
                </animated.div> : ""
            )}
        </>
    );
}

export default ProjectCard;
