import { faUser } from "@fortawesome/free-regular-svg-icons"
import {
    faChartColumn,
    faGear,
    faHome,
    faListCheck,
    faTableColumns,
    faTimes,
    faUserAlt,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import "../App.scss"
import { logout } from "../redux/userReducer"

export default function Sidenav() {
    const dispatch = useDispatch()
    const { student, admin } = useSelector((state) => state.user)
    const navigate = useNavigate()
    const route = window.location.pathname
    const { innerWidth } = window

    function handleSideNav() {
        let sidenav = document.getElementById("Sidenav")
        if (innerWidth <= 768) {
            sidenav.style.display = "none"
        }
    }

    if (student) {
        return (
            <div id="Sidenav" className="Student-sidenav">
                <div className="sidenav-cont">
                    <div className="logo-close">
                        <img
                            className="logo"
                            src="/images/blue-logo.svg"
                            alt="logo"
                        />
                        <FontAwesomeIcon
                            className="nav-close"
                            onClick={handleSideNav}
                            icon={faTimes}
                            style={{ color: "#3a21b6" }}
                        />
                    </div>
                    <div
                        className={
                            route !== "/user" ? "nav-btn" : "nav-btn-selected"
                        }
                        onClick={() => {
                            navigate("/user")
                            handleSideNav()
                        }}
                    >
                        <FontAwesomeIcon icon={faHome} />
                        <span>Dashboard</span>
                    </div>
                    <div
                        className={
                            route !== "/user/complaint"
                                ? "nav-btn"
                                : "nav-btn-selected"
                        }
                        onClick={() => {
                            navigate("/user/complaint")
                            handleSideNav()
                        }}
                    >
                        <FontAwesomeIcon icon={faListCheck} />
                        <span>Complaints</span>
                    </div>
                    <div className="nav-btn">
                        <FontAwesomeIcon icon={faChartColumn} />
                        <span>History</span>
                    </div>
                    <div className="nav-btn">
                        <FontAwesomeIcon icon={faUserAlt} />
                        <span>Account</span>
                    </div>
                    <div className="nav-btn">
                        <FontAwesomeIcon icon={faGear} />
                        <span>Settings</span>
                    </div>
                    <div className="profile-btn-cont">
                        <img
                            onClick={() => dispatch(logout())}
                            src="/images/logout.svg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        )
    }
    if (admin) {
        return (
            <div id="Sidenav" className="Sidenav">
                <div className="sidenav-cont">
                    <div className="logo-close">
                        <img
                            className="logo"
                            src="/images/white-sidenav-logo.svg"
                            alt="logo"
                        />
                        <FontAwesomeIcon
                            className="nav-close"
                            onClick={handleSideNav}
                            icon={faTimes}
                        />
                    </div>
                    <div
                        onClick={() => {
                            navigate("/user")
                            handleSideNav()
                        }}
                        className={
                            route !== "/user" ? "nav-btn" : "nav-btn-selected"
                        }
                    >
                        <FontAwesomeIcon icon={faTableColumns} />
                        <span>Dashboard</span>
                    </div>
                    <div
                        onClick={() => {
                            navigate("/user/complaint")
                            handleSideNav()
                        }}
                        className={
                            route !== "/user/complaint"
                                ? "nav-btn"
                                : "nav-btn-selected"
                        }
                    >
                        <FontAwesomeIcon icon={faListCheck} />
                        <span>Complaints</span>
                    </div>
                    <div
                        onClick={() => {
                            navigate("/user/register")
                            handleSideNav()
                        }}
                        className={
                            route !== "/user/register"
                                ? "nav-btn"
                                : "nav-btn-selected"
                        }
                    >
                        <FontAwesomeIcon icon={faGear} />
                        <span>Register</span>
                    </div>
                    <div className="profile-btn-cont">
                        <div
                            className="profile-btn"
                            onClick={() => dispatch(logout())}
                            style={{ cursor: "pointer" }}
                        >
                            <FontAwesomeIcon
                                className="user-icon"
                                icon={faUser}
                            />
                            <div>
                                <b>Logout</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div id="Sidenav" className="Sidenav">
            <div className="sidenav-cont">
                <div className="logo-close">
                    <img
                        className="logo"
                        src="/images/white-sidenav-logo.svg"
                        alt="logo"
                    />
                    <FontAwesomeIcon
                        className="nav-close"
                        onClick={handleSideNav}
                        icon={faTimes}
                    />
                </div>
                <div
                    className={
                        route !== "/user" ? "nav-btn" : "nav-btn-selected"
                    }
                >
                    <FontAwesomeIcon icon={faTableColumns} />
                    <span>Dashboard</span>
                </div>
                <div
                    className={
                        route !== "/user/complaint"
                            ? "nav-btn"
                            : "nav-btn-selected"
                    }
                >
                    <FontAwesomeIcon icon={faListCheck} />
                    <span>Complaints</span>
                </div>
                <div className="nav-btn">
                    <FontAwesomeIcon icon={faGear} />
                    <span>Settings</span>
                </div>
                <div className="profile-btn-cont">
                    <div
                        style={{ cursor: "pointer" }}
                        className="profile-btn"
                        onClick={() => dispatch(logout())}
                    >
                        <FontAwesomeIcon className="user-icon" icon={faUser} />
                        <div>
                            <b>Logout</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
