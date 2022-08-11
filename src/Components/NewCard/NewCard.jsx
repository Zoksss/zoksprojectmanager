import { useTransition, animated } from "react-spring";
import { useState, useRef } from "react";
import './NewCard.scss';


function NewCard(props) {
  const nameRef = useRef(null);
  const sublineRef = useRef(null);

  const transition = useTransition(props.creatingNewCard, {
    from: { right: 250, y: 0, opacity: 0 },
    enter: { right: 0, y: 0, opacity: 1 },
    leave: { right: -250, y: 0, opacity: 0 },

  });
  return (
    <>
      {transition((style, item) => item ?
          <animated.div className="newcard" style={style}>
            <div className="newcard-container">
              <p className="newcard-title">Create new project</p>
              <form>
                <label>Project name:</label>
                <input ref={nameRef} type="text" placeholder="eg. Webiste Redesign" maxLength={25}/>
                <label>Project subline:</label>
                <input ref={sublineRef} type="text" placeholder="eg. John Steve"  maxLength={25}/>
                <div className="newcard-form-buttons">
                  <input className="new-card-create-button" type="button" value="CREATE" onClick={() => {props.setCreatingNewCard(false); props.creatNewCard(nameRef.current.value, sublineRef.current.value)}}/>
                  <input className="new-card-cancel-button" type="button" value="CANCEL" onClick={() => props.setCreatingNewCard(false)}/>
                </div>
              </form>
            </div>
          </animated.div> : ""
      )}
    </>
  );
}

export default NewCard;
