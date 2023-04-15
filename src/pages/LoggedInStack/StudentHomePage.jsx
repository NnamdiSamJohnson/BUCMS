import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../styles/StudentHomePage.scss"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { openFeedbackPopup } from "../../redux/userReducer"

export default function StudentHomePage() {
    const { studentId, studentComplaints } = useSelector((state) => state.user)
    const [rejected, setRejected] = useState(0)
    const [done, setDone] = useState(0)
    const [pending, setPending] = useState(0)
    const dispatch = useDispatch()

    function openSidenav() {
        let sidenav = document.getElementById("Sidenav")
        sidenav.style.display = "block"
    }

    async function getPending() {
        await fetch(
            `https://bu-complaints.onrender.com/complaint/complaints/student/${studentId}/pending`
        )
            .then((res) => res.json())
            .then((res) => setPending(res.length))
            .catch((err) => dispatch(openFeedbackPopup("Server error")))
    }

    async function getRejected() {
        await fetch(
            `https://bu-complaints.onrender.com/complaint/student/${studentId}/pending`
        )
            .then((res) => res.json())
            .then((res) => setRejected(res.length))
    }

    async function getDone() {
        await fetch(
            `https://bu-complaints.onrender.com/complaint/student/${studentId}/settled`
        )
            .then((res) => res.json())
            .then((res) => setDone(res.length))
    }

    useEffect(() => {
        getPending()
        getRejected()
        getDone()
    }, [])

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
                            <h2>{rejected}</h2>
                            <p>Complaints Rejected</p>
                        </div>
                        <div className="item">
                            <h2>{studentComplaints.length}</h2>
                            <p>Total Complaints</p>
                        </div>
                        <div className="item">
                            <h2>{done}</h2>
                            <p>Complaints Answered</p>
                        </div>
                        <div className="item">
                            <h2>{pending}</h2>
                            <p>Complaints Pending</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
