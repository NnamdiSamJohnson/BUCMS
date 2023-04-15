import { useState } from "react"
import "../../styles/AdminRegisterUsers.scss"
import {
    openFeedbackPopup,
    registerStaff,
    registerStudent,
} from "../../redux/userReducer"
import { useDispatch } from "react-redux"

export default function AdminRegisterUsers() {
    const [studentTab, setStudentTab] = useState(true)
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const [level, setLevel] = useState(100)
    const [email, setEmail] = useState("")
    const [matricno, setMatricno] = useState("")
    const [adminName, setAdminName] = useState("")
    const [department, setDepartment] = useState("")
    const dispatch = useDispatch()

    function createStudent() {
        const data = {
            firstname,
            lastname,
            password: password1,
            level,
            email,
            matricno,
        }
        if (password1 !== password2) {
            return dispatch(
                openFeedbackPopup("Make sure both password fields match")
            )
        }
        dispatch(registerStudent(data))
    }

    function createStaff() {
        const data = {
            name: adminName,
            password: password1,
            department,
            email,
        }
        if (password1 !== password2) {
            return dispatch(
                openFeedbackPopup("Make sure both password fields match")
            )
        }
        dispatch(registerStaff(data))
    }

    return (
        <div className="AdminRegisterUsers">
            {studentTab ? (
                <div className="register-cont">
                    <h2>Register Student</h2>
                    <div className="inputs">
                        <div className="input-cont">
                            <label>Firstname :</label>
                            <input
                                onChange={(e) => setFirstname(e.target.value)}
                                value={firstname}
                                type="text"
                                placeholder="Firstname"
                            />
                        </div>
                        <div className="input-cont">
                            <label>Lastname :</label>
                            <input
                                onChange={(e) => setLastname(e.target.value)}
                                value={lastname}
                                type="text"
                                placeholder="Lastname"
                            />
                        </div>
                        <div className="input-cont">
                            <label>Password :</label>
                            <input
                                onChange={(e) => setPassword1(e.target.value)}
                                value={password1}
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="input-cont">
                            <label>Re-Enter Password :</label>
                            <input
                                onChange={(e) => setPassword2(e.target.value)}
                                value={password2}
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="input-cont">
                            <label>Level :</label>
                            <select
                                onChange={(e) =>
                                    setLevel(Number(e.target.value))
                                }
                            >
                                <option value={100}>100</option>
                                <option value={200}>200</option>
                                <option value={300}>300</option>
                                <option value={400}>400</option>
                                <option value={500}>500</option>
                            </select>
                        </div>
                        <div className="input-cont">
                            <label>Email :</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="input-cont">
                            <label>Matric-no :</label>
                            <input
                                onChange={(e) => setMatricno(e.target.value)}
                                value={matricno}
                                type="text"
                                placeholder="Matric-no"
                            />
                        </div>
                    </div>
                    <p
                        onClick={() => {
                            setStudentTab(false)
                            setPassword1("")
                            setPassword2("")
                            setEmail("")
                        }}
                    >
                        Register Staff?
                    </p>
                    <button onClick={createStudent}>Register</button>
                </div>
            ) : (
                <div className="register-cont">
                    <h2>Register Staff</h2>
                    <div className="inputs">
                        <div className="input-cont">
                            <label>Name :</label>
                            <input
                                onChange={(e) => setAdminName(e.target.value)}
                                value={adminName}
                                type="text"
                                placeholder="Name"
                            />
                        </div>
                        <div className="input-cont">
                            <label>Password :</label>
                            <input
                                onChange={(e) => setPassword1(e.target.value)}
                                value={password1}
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="input-cont">
                            <label>Re-Enter Password :</label>
                            <input
                                onChange={(e) => setPassword2(e.target.value)}
                                value={password2}
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="input-cont">
                            <label>Department :</label>
                            <input
                                onChange={(e) => setDepartment(e.target.value)}
                                value={department}
                                type="text"
                                placeholder="Department"
                            />
                        </div>
                        <div className="input-cont">
                            <label>Email :</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <p
                        onClick={() => {
                            setStudentTab(true)
                            setPassword1("")
                            setPassword2("")
                            setEmail("")
                        }}
                    >
                        Register Student?
                    </p>
                    <button onClick={createStaff}>Register</button>
                </div>
            )}
        </div>
    )
}
