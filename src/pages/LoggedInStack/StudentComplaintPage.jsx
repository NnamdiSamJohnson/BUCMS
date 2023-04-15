import {
    faBars,
    faChevronLeft,
    faChevronRight,
    faCircle,
    faPenToSquare,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import ReactPaginate from "react-paginate"
import "../../styles/StudentComplaintPage.scss"
import { useDispatch, useSelector } from "react-redux"
import { makeComplaint, updateComplaint } from "../../redux/userReducer"

export default function StudentComplaintPage() {
    const { studentComplaints, faculties, studentId } = useSelector(
        (state) => state.user
    )
    const dispatch = useDispatch()
    const [MakeComplaint, setMakeComplaint] = useState(true)
    const [editMode, setEditMode] = useState(false)
    const [pageNumber, setPageNumber] = useState(0)
    const [done, setDone] = useState(false)
    const [faculty, setFaculty] = useState("")
    const [complaint, setComplaint] = useState("")
    const [editComplaintId, setEditComplaintId] = useState("")
    const complaintPerPage = 10
    const pagesVisited = pageNumber * complaintPerPage
    const pageCount = Math.ceil(studentComplaints.length / complaintPerPage)
    const date = new Date()

    const displayComplaints = studentComplaints
        .slice(pagesVisited, pagesVisited + complaintPerPage)
        .map((comp) => {
            return (
                <div
                    key={studentComplaints.indexOf(comp)}
                    className="complaint"
                >
                    <span>{comp._id}</span>
                    <span>{date.toUTCString(comp.createdAt)}</span>
                    <span className="status">
                        <FontAwesomeIcon className="dot" icon={faCircle} />
                        {comp.status}
                    </span>
                    <div>
                        <FontAwesomeIcon
                            onClick={() => complaintEdit(comp)}
                            className="edit"
                            icon={faPenToSquare}
                        />
                    </div>
                </div>
            )
        })

    function changePage({ selected }) {
        setPageNumber(selected)
    }

    function handleSubmit() {
        const data = {
            student: studentId,
            faculty,
            complaint,
        }
        if (!editMode) {
            dispatch(makeComplaint(data))
        } else if (editMode) {
            dispatch(
                updateComplaint({
                    id: editComplaintId,
                    body: {
                        faculty,
                        complaint,
                    },
                })
            )
        }
    }

    function handleMakeComplaint() {
        if (!MakeComplaint) {
            setFaculty("")
            setComplaint("")
            setMakeComplaint(true)
            setEditMode(false)
        }
    }

    function complaintEdit(comp) {
        setFaculty(comp?.faculty._id)
        setComplaint(comp?.complaint)
        setEditComplaintId(comp?._id)
        setMakeComplaint(true)
        setEditMode(true)
    }

    function openSidenav() {
        let sidenav = document.getElementById("Sidenav")
        sidenav.style.display = "block"
    }

    return (
        <div className="StudentComplaintPage">
            {done ? (
                <div onClick={() => setDone(false)} className="complaint-done">
                    <img src="/images/done.png" alt="" />
                </div>
            ) : null}
            <div className="sidenav-open">
                <FontAwesomeIcon
                    onClick={openSidenav}
                    icon={faBars}
                    className="btn"
                />
            </div>
            <div className="complaint-cont">
                <div className="content">
                    <div className="hero">
                        <div className="hero-left">
                            <h3>What's up?,</h3>
                            <h2>What would you like to do?</h2>
                        </div>
                        <div className="hero-right">
                            <div onClick={handleMakeComplaint}>
                                <img src="/images/make-complaint.svg" alt="" />
                                <p>Make Complaint</p>
                            </div>
                            <div
                                onClick={() => {
                                    setMakeComplaint(false)
                                    setEditMode(false)
                                }}
                            >
                                <img src="/images/view-complaint.svg" alt="" />
                                <p>View Complaints</p>
                            </div>
                        </div>
                    </div>

                    <div className="main">
                        {MakeComplaint ? (
                            <div className="main-cont-1">
                                <h1>New Complaint</h1>
                                <p>
                                    Input the information pertaining to your
                                    complaint
                                </p>
                                <div className="inputs">
                                    <div className="input-cont">
                                        <label>
                                            Faculty <span>*</span>
                                        </label>
                                        <select
                                            onChange={(e) =>
                                                setFaculty(e.target.value)
                                            }
                                            value={faculty}
                                        >
                                            <option>---</option>
                                            {faculties.map((item) => {
                                                return (
                                                    <option
                                                        key={item._id}
                                                        value={item._id}
                                                    >
                                                        {item.name}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="input-cont">
                                        <label>
                                            Complaint <span>*</span>
                                        </label>
                                        <textarea
                                            onChange={(e) =>
                                                setComplaint(e.target.value)
                                            }
                                            value={complaint}
                                            className="complaint-input"
                                            placeholder="Enter complaint here"
                                        />
                                    </div>
                                </div>
                                <button onClick={handleSubmit} className="done">
                                    Done
                                </button>
                            </div>
                        ) : (
                            <div className="main-cont-2">
                                <div className="comp-head">
                                    <span>Complaint ID</span>
                                    <span>Date Sent</span>
                                    <span>Complaint Status</span>
                                    <span></span>
                                </div>

                                <div className="comp-list">
                                    {displayComplaints}
                                </div>

                                <ReactPaginate
                                    previousLabel={
                                        <FontAwesomeIcon
                                            className="paginate-icon"
                                            icon={faChevronLeft}
                                        />
                                    }
                                    nextLabel={
                                        <FontAwesomeIcon
                                            className="paginate-icon"
                                            icon={faChevronRight}
                                        />
                                    }
                                    breakLabel="..."
                                    pageCount={pageCount}
                                    onPageChange={changePage}
                                    containerClassName="pagination-container"
                                    disabledClassName="disabled-btn"
                                    activeClassName="page-selected"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
