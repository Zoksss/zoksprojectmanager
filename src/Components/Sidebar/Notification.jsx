import './Sidebar.scss';
import ClockImg from "../../../src/images/clock.png"


function Notification() {
    return (
        <div className="notification">
            <div className="notification-date-left">
                <img src={ClockImg} alt="clock image" />
                <p className="notification-date-left-number">13 MINS LEFT</p>
            </div>
            <p className="notification-title">Yesiloveguitar</p>
            <p className="notification-description">Redesign footer, header, make headimage, and add
                links for social media </p>

        </div>
    );
}
export default Notification;
