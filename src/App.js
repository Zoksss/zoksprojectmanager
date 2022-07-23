import logo from './logo.svg';
import './App.scss';

import Navbar from './Components/Nav/Navbar';
import ProjectCard from './Components/ProjectCard/ProjectCard';
import Sidebar from './Components/Sidebar/Sidebar';

import "./styles/style.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="dashboard-selector-container">
        <h1 className="dashboard-selector-title">Dashboard</h1>
        <a className="active-dashboard hover-underline-animation" href="#">ACTIVE PROJECTS</a>
        <a className="hover-underline-animation" href="#">COMPLETED PROJECTS</a>
        <button className="add-card">+</button>
      </div>
      <div className="card-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <Sidebar />
    </div>
  );
}

export default App;
