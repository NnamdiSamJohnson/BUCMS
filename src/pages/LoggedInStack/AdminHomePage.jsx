import {
    faFileInvoice,
    faPersonChalkboard,
    faUsers,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Calendar } from "react-calendar"
import TopNavbar from "../../components/TopNavbar"
import "../../styles/AdminHomePage.scss"
import "react-calendar/dist/Calendar.css"

export default function AdminHomePage() {
    const [date, setDate] = useState(new Date())
    return (
        <div className="AdminHomePage">
            <TopNavbar />
            <div className="hero">
                <div className="hero-top">
                    <div className="hero-top-item">
                        <div>
                            <b>15,000</b>
                            <p>Sudents</p>
                        </div>
                        <FontAwesomeIcon className="hero-icon" icon={faUsers} />
                    </div>
                    <div className="hero-top-item">
                        <div>
                            <b>150</b>
                            <p>Courses</p>
                        </div>
                        <FontAwesomeIcon
                            className="hero-icon"
                            icon={faFileInvoice}
                        />
                    </div>
                    <div className="hero-top-item">
                        <div>
                            <b>237</b>
                            <p>Lecturers</p>
                        </div>
                        <FontAwesomeIcon
                            className="hero-icon"
                            icon={faPersonChalkboard}
                        />
                    </div>
                    <div className="hero-top-item">
                        <div>
                            <b>15,237</b>
                            <p>Accounts</p>
                        </div>
                        <FontAwesomeIcon className="hero-icon" icon={faUsers} />
                    </div>
                </div>
                <div className="hero-bottom">
                    <Calendar value={date} onChange={setDate} />
                </div>
            </div>
            {/* <div className="recent-activity">
                <div className="top">
                    <h2>Recent Activity</h2>
                    <button>
                        See all
                        <FontAwesomeIcon icon={faArrowRightLong} />
                    </button>
                </div>
                <div className="middle">
                    <span>Event</span>
                    <span>Date</span>
                </div>
                <div className="content">
                    <div className="activity">
                        <div>
                            <FontAwesomeIcon
                                className="activity-marker"
                                icon={faCircle}
                            />
                            <p>
                                All classes through out next week have been
                                resheduled on the Platform{" "}
                            </p>
                        </div>
                        <span>28th of April, 2022</span>
                    </div>
                    <div className="activity">
                        <div>
                            <FontAwesomeIcon
                                className="activity-marker"
                                icon={faCircle}
                            />
                            <p>
                                All classes through out next week have been
                                resheduled on the Platform{" "}
                            </p>
                        </div>
                        <span>28th of April, 2022</span>
                    </div>
                    <div className="activity">
                        <div>
                            <FontAwesomeIcon
                                className="activity-marker"
                                icon={faCircle}
                            />
                            <p>
                                All classes through out next week have been
                                resheduled on the Platform{" "}
                            </p>
                        </div>
                        <span>28th of April, 2022</span>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
