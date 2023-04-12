import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../styles/StudentHomePage.scss"
import { faBars } from "@fortawesome/free-solid-svg-icons"

export default function StudentHomePage() {
    function openSidenav() {
        let sidenav = document.getElementById("Sidenav")
        sidenav.style.display = "block"
    }
    return (
        <div className="StudentHomePage">
            <div className="sidenav-open">
                <FontAwesomeIcon
                    onClick={openSidenav}
                    icon={faBars}
                    className="btn"
                />
            </div>
            <div className="home-cont">
                <div className="hero">
                    <div className="hero-top">
                        <div>
                            <h1>Hi there Student</h1>
                            <p>Welcome to BU Complaint Management System</p>
                        </div>
                        <img src="/images/student-hero-img.svg" alt="" />
                    </div>
                    <div className="hero-bottom">
                        <div className="item">
                            <h2>11</h2>
                            <p>Complaints Rejected</p>
                        </div>
                        <div className="item">
                            <h2>20</h2>
                            <p>Total Complaints</p>
                        </div>
                        <div className="item">
                            <h2>11</h2>
                            <p>Complaints Answered</p>
                        </div>
                        <div className="item">
                            <h2>4</h2>
                            <p>Complaints Pending</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
