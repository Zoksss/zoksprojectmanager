import './Navbar.scss';
import Arrow from "../../images/arrow.png";

function Navbar(props) {
  return (
    <nav className="navbar">
        {props.isDashboard && <button className="nav-back-arrow" onClick={() => props.setIsDashboard(false)}><img src={Arrow} alt="" /></button> }
        <h1><span className="nav-title-highlight">zoks</span>projectmanager</h1>
    </nav>
  );
}

export default Navbar;
