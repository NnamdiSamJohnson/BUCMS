import { useDispatch, useSelector } from "react-redux"
import { closeFeedbackPopup } from "../redux/userReducer"

export default function FeedbackPopup({ text }) {
    const { feedbackText, feedbackReload } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    return (
        <div className="feedback-popup">
            <div>
                <b>{feedbackText}</b>
                <button
                    onClick={() => {
                        dispatch(closeFeedbackPopup())
                        if (feedbackReload) window.location.reload()
                    }}
                >
                    Ok
                </button>
            </div>
        </div>
    )
}
