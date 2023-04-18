import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { hideSidebar, updateComplaint } from "../../redux/userReducer"
import "../../styles/StaffComplaintsDetailsPage.scss"
export default function ComplaintsDetailsPage() {
    const dispatch = useDispatch()
    const { staff, admin, studentId, staffName, staffId } = useSelector(
        (state) => state.user
    )
    const location = useLocation()
    const complaint = location.state
    const date = new Date()
    const [statusState, setStatusState] = useState(complaint?.status)
    const [commentState, setCommentState] = useState(
        complaint?.comment?.comment
    )
    const [commentId, setCommentId] = useState(complaint?.comment?._id)

    useEffect(() => {
        dispatch(hideSidebar())
    }, [dispatch])

    async function makeComment(data) {
        let response = await fetch(
            "https://bu-complaints.onrender.com/comment",
            {
                method: "post",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
            }
        )
            .then((res) => res.json())
            .catch(() => alert("Server error"))

        if (response._id) {
            dispatch(
                updateComplaint({
                    id: complaint?._id,
                    body: {
                        comment: response._id,
                        status: statusState,
                    },
                })
            )
        } else {
            alert("Error updating comment")
        }
    }
    async function updateComment(data) {
        let response = await fetch(
            `https://bu-complaints.onrender.com/comment/${commentId}`,
            {
                method: "put",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
            }
        )
            .then((res) => res.json())
            .catch(() => alert("Server error"))

        if (response._id) {
            dispatch(
                updateComplaint({
                    id: complaint?._id,
                    body: {
                        comment: response._id,
                        status: statusState,
                    },
                })
            )
        } else {
            alert("Error updating comment")
        }
    }

    function submit() {
        if (admin) {
            if (statusState === complaint?.status) return
            dispatch(
                updateComplaint({
                    id: complaint?._id,
                    body: {
                        status: statusState,
                    },
                })
            )
        }

        if (staff) {
            if (
                statusState === complaint?.status &&
                commentState === complaint?.comment?.comment
            ) {
                return alert(
                    "To submit changes, make a remark or change complaint status"
                )
            }
            if (commentId) {
                updateComment({ comment: commentState })
            } else {
                makeComment({ comment: commentState, userId: studentId })
            }
        }
    }

    return (
        <div className="Complaint-page">
            <div className="header">
                <h1>COMPLAINT DETAILS</h1>
                <button
                    className={
                        statusState !== complaint?.status ||
                        commentState !== complaint?.comment?.comment
                            ? "submit-active"
                            : "submit-inactive"
                    }
                    onClick={submit}
                >
                    Submit
                </button>
            </div>

            <div className="section-1">
                <div className="inputs">
                    <span>Complaint ID: </span>
                    <input type="text" disabled value={complaint?._id} />
                </div>
                <div className="inputs">
                    <span>Date & Time: </span>
                    <input
                        type="text"
                        disabled
                        value={date.toUTCString(complaint?.createdAt)}
                    />
                </div>
                <div className="inputs">
                    <span>Matric No: </span>
                    <input
                        type="text"
                        disabled
                        value={complaint?.student.matricno}
                    />
                </div>
                <div className="inputs">
                    <span>Student's Name: </span>
                    <input
                        type="text"
                        disabled
                        value={`${complaint?.student.firstname} ${complaint?.student.lastname}`}
                    />
                </div>
            </div>

            <div className="section-2">
                <div className="inputs">
                    <span>Staff's ID: </span>
                    <input type="text" disabled value={staffId} />
                </div>
                <div className="inputs">
                    <span>Staff's Name: </span>
                    <input
                        type="text"
                        disabled
                        value={staffName}
                        style={{ textTransform: "capitalize" }}
                    />
                </div>
            </div>

            <div className="section-3">
                <p>Complaint Status: </p>
                <div className="btn-cont">
                    <div
                        className={statusState === "Settled" ? "done" : ""}
                        onClick={() => {
                            if (statusState !== "Settled") {
                                setStatusState("Settled")
                            }
                        }}
                    >
                        <FontAwesomeIcon icon={faCircle} />
                        <span>Done</span>
                    </div>
                    <div
                        className={statusState === "Pending" ? "pending" : ""}
                        onClick={() => {
                            if (statusState !== "Pending") {
                                setStatusState("Pending")
                            }
                        }}
                    >
                        <FontAwesomeIcon icon={faCircle} />
                        <span>Pending</span>
                    </div>
                    <div
                        className={statusState === "Denied" ? "cancelled" : ""}
                        onClick={() => {
                            if (statusState !== "Denied") {
                                setStatusState("Denied")
                            }
                        }}
                    >
                        <FontAwesomeIcon icon={faCircle} />
                        <span>Cancelled</span>
                    </div>
                </div>
            </div>

            <div className="section-4">
                <h2>Complaint</h2>
                <div>
                    <span>{complaint?.complaint}</span>
                </div>
            </div>

            <div className="footer">
                <h3>Remarks:</h3>
                <textarea
                    spellCheck={false}
                    placeholder="Enter response here.."
                    defaultValue={commentState}
                    disabled={staff ? false : true}
                    style={
                        staff ? { cursor: "auto" } : { cursor: "not-allowed" }
                    }
                    onChange={(e) => setCommentState(e.target.value)}
                />
            </div>
        </div>
    )
}
