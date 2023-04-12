import { useState } from "react"
import { useDispatch } from "react-redux"
import LoggedOutNavbar from "../../components/LoggedOutNavbar"
import { studentLogin } from "../../redux/userReducer"
import "../../styles/LoginPages.scss"

export default function StudentLoginPage() {
    const [matricNo, setMatricNo] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    function handleLogin() {
        const data = {
            matricno: matricNo,
            password,
        }
        if (matricNo.length < 1 || password.length < 1) {
            return alert("Please fill all input fields")
        }
        dispatch(studentLogin(data))
    }
    return (
        <>
            <LoggedOutNavbar />
            <div className="Login">
                <div className="login-cont">
                    <h1>Hi there Student, Sign in</h1>
                    <input
                        onChange={(e) => setMatricNo(e.target.value)}
                        placeholder="Enter Matric-no"
                        type="text"
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        type="password"
                    />
                    <span>Recover Password ?</span>
                    <button onClick={handleLogin}>Sign in</button>
                </div>
                <div className="bg-img">
                    <img src="/images/student-login-bg.svg" alt="bg" />
                </div>
            </div>
        </>
    )
}
