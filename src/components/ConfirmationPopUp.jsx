export default function ConfirmationPopUp({ text, action, closePopUp }) {
    return (
        <div className="Delete-confirmation">
            <div className="confirmation-cont">
                <b>{text}</b>
                <div>
                    <button onClick={action}>Yes</button>
                    <button onClick={closePopUp}>No</button>
                </div>
            </div>
        </div>
    )
}
