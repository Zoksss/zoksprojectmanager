import './Navbar.scss';
import Arrow from "../../images/arrow.png";

function Navbar() {
  return (
    <nav className="navbar">
        <button className="nav-back-arrow"><img src={Arrow} alt="" /></button>
        <h1><span className="nav-title-highlight">zoks</span>projectmanager</h1>
    </nav>
  );
}

export default Navbar;
