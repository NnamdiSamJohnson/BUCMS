import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import "../styles/LoggedOutNavbar.scss"

export default function LoggedOutNavbar() {
    const [modal, setModal] = useState(false)

    function redirect(page) {
        window.location.assign(page)
    }

    function handleModal() {
        if (!modal) setModal(true)
        else setModal(false)
    }

    return (
        <div className="Nav">
            <div className="nav-cont">
                <img src="/images/blue-logo.svg" alt="logo" />
                <div className="end">
                    <b>FAQs</b>
                    <div className="login-cont">
                        <div className="login" onClick={handleModal}>
                            <b>Login</b>
                            <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                        {modal ? (
                            <div className="login-modal">
                                <div id="modal">
                                    <span
                                        onClick={() => redirect("/login/admin")}
                                    >
                                        Admin
                                    </span>
                                    <span
                                        onClick={() =>
                                            redirect("/login/student")
                                        }
                                    >
                                        Student
                                    </span>
                                    <span
                                        onClick={() => redirect("/login/staff")}
                                    >
                                        Lecturer
                                    </span>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
