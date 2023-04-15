import {
    faPen,
    faTrash,
    faEye,
    faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import DeleteConfirmation from "../../components/ConfirmationPopUp"
import TopNavbar from "../../components/TopNavbar"
import {
    deleteComplaint,
    getAllComplaints,
    showSidebar,
} from "../../redux/userReducer"
import "../../styles/AdminComplaintsPage.scss"

export default function AdminComplaintsPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { complaints } = useSelector((state) => state.user)
    const [showDelete, setShowDelete] = useState(false)
    const [complaintId, setComplaintId] = useState("")
    const date = new Date()
    const text = "Are you sure you want to delete this?"

    useEffect(() => {
        dispatch(showSidebar())
        dispatch(getAllComplaints())
    }, [dispatch])

    function handleDelete(id) {
        setShowDelete(true)
        setComplaintId(id)
    }

    function confirmDelete() {
        dispatch(deleteComplaint(complaintId))
        setShowDelete(false)
    }

    function closePopUp() {
        setShowDelete(false)
    }

    function Complaint(data) {
        const complaint = data.complaint
        return (
            <div className="complaint">
                <div>
                    <FontAwesomeIcon icon={faEye} className="actions" />
                    <FontAwesomeIcon icon={faPen} className="actions" />
                    <FontAwesomeIcon
                        onClick={() => handleDelete(complaint._id)}
                        icon={faTrash}
                        className="actions"
                    />
                </div>
                <div>{date.toUTCString(complaint.createdAt)}</div>
                <div>{complaint?.faculty.name}</div>
                <div>{complaint.status ? complaint.status : "null"}</div>
                <div>
                    {complaint.student.firstname} {complaint.student.lastname}
                </div>
                <div>
                    <div
                        onClick={() =>
                            navigate("/user/complaints-details", {
                                state: complaint,
                            })
                        }
                    >
                        <span>View more</span>
                        <FontAwesomeIcon icon={faCircleArrowRight} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {showDelete ? (
                <DeleteConfirmation
                    text={text}
                    action={confirmDelete}
                    closePopUp={closePopUp}
                />
            ) : null}
            <div className="AdminComplaintPage">
                <TopNavbar />
                <div className="staffMain">
                    <h3>LIST OF COMPLAINTS</h3>

                    <div className="complaints-section">
                        <div className="section-head">
                            <span>Actions</span>
                            <span>Date & Time</span>
                            <span>Faculty</span>
                            <span>Status</span>
                            <span>Personnel</span>
                            <span></span>
                        </div>
                        <div className="section-cont">
                            {complaints.map((complaint) => {
                                return (
                                    <Complaint
                                        key={complaint._id}
                                        complaint={complaint}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
