import { useState } from "react";
import logo from './logo.svg';
import './App.scss';

import Navbar from './Components/Nav/Navbar';
import ProjectCard from './Components/ProjectCard/ProjectCard';
import Sidebar from './Components/Sidebar/Sidebar';
import NewCard from "./Components/NewCard/NewCard";
import ProjectDashboard from "./Components/ProjectDashboard/ProjectDashboard";

import "./styles/style.scss";



function App() {
  const [allCards, setAllCards] = useState([]);
  const [creatingNewCard, setCreatingNewCard] = useState(false);
  const [isDashboard, setIsDashboard] = useState(false);

  const [isFinishedShown, setIsFinishedShown] = useState(false);

  const [currId, setCurrId] = useState(-1);


  const creatNewCard = (name, subline) => {
    console.log("new card added" + name + subline);
    let t = [...allCards];
    t.push({ name: name, subline: subline, tasks: [], isFinished: false, taskStatus: [0,0,0], dateAdded: Date.now()});
    setAllCards(t);
    console.log(allCards);
  }

  const cards = isDashboard === false && allCards.map((card, i) => {
    return (isFinishedShown? card.isFinished :  !card.isFinished) && < ProjectCard key={i} id={i} isDashboard={isDashboard} setIsDashboard={setIsDashboard} name={card.name} subline={card.subline} setCurrId={setCurrId} taskStatus={card.taskStatus} dateAdded={card.dateAdded}/>
  })

  return (
    <div className="App">
      <NewCard creatingNewCard={creatingNewCard} setCreatingNewCard={setCreatingNewCard} creatNewCard={creatNewCard} />
      <Navbar setIsDashboard={setIsDashboard} isDashboard={isDashboard}/>
      <div className="dashboard-selector-container">
        <h1 className="dashboard-selector-title">Dashboard</h1>
        <a className={`hover-underline-animation ${!isFinishedShown?"active-dashboard":""}`} href="#" onClick={() => setIsFinishedShown(false)}>ACTIVE PROJECTS</a>
        <a className={`hover-underline-animation ${isFinishedShown?"active-dashboard":""}`} href="#" onClick={() => {setIsFinishedShown(true)}}>COMPLETED</a>
        <button className="add-card" onClick={() => setCreatingNewCard(true)}>+</button>
      </div>
      <div className="card-container">
        {cards}
      </div>
      < ProjectDashboard setIsDashboard={setIsDashboard} isDashboard={isDashboard} allCards={allCards} setAllCards={setAllCards} id={1} currId={currId} />
    </div>
  );
}

export default App;
