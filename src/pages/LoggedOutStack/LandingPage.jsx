import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef, useState } from "react"
import LoggedOutNavbar from "../../components/LoggedOutNavbar"
import "../../styles/LandingPage.scss"

export default function LandingPage() {
    const [loginModal, setLoginModal] = useState(false)
    const landing = useRef(null)
    useEffect(() => {
        landing.current.addEventListener("click", (e) => {
            if (e.target.parentElement.id !== "modal") setLoginModal(false)
        })
    }, [])

    function redirect(page) {
        window.location.assign(page)
    }

    return (
        <>
            <LoggedOutNavbar />
            <div className="Landing" ref={landing}>
                <div className="hero">
                    <h1>
                        Streamline <span>Complaint </span>Resolution
                    </h1>
                    <p>
                        Say goodbye to endless phone calls and email chains, and
                        say hello to a streamlined process.
                    </p>
                    <div className="login-cont">
                        <button onClick={() => setLoginModal(true)}>
                            <span>Login</span>
                            <FontAwesomeIcon icon={faCaretRight} />
                        </button>
                        {loginModal ? (
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
                <div className="bg-image">
                    <img src="/images/landing-page-bg.png" alt="bg" />
                </div>
            </div>
        </>
    )
}
