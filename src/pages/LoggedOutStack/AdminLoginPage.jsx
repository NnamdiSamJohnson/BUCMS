import { useState } from "react"
import { useDispatch } from "react-redux"
import LoggedOutNavbar from "../../components/LoggedOutNavbar"
import { adminLogin } from "../../redux/userReducer"
import "../../styles/LoginPages.scss"

export default function AdminLoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    function handleLogin() {
        const data = {
            email,
            password,
        }
        if (email.length < 1 || password.length < 1) {
            return alert("Please fill all input fields")
        }
        dispatch(adminLogin(data))
    }

    return (
        <>
            <LoggedOutNavbar />
            <div className="Login">
                <div className="login-cont">
                    <h1>Hi there Admin, Sign in</h1>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter E-mail"
                        type="email"
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
                    <img src="/images/admin-login-bg.svg" alt="bg" />
                </div>
            </div>
        </>
    )
}
