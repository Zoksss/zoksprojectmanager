import './Sidebar.scss';
import ClockImg from "../../../src/images/clock.png"
import Notification from "./Notification";

function Sidebar() {
    return (
        <div className="sidebar">
            <p className="sidebar-notification-title">Notifications</p>
            <div className="notification-container">
                <Notification />
                <Notification />
                <Notification />
            </div>
        </div>
    );
}

export default Sidebar;
