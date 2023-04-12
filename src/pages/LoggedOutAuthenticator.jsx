import { useDispatch, useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { hideLoginState } from "../redux/userReducer"

export default function LoggedOutAuthenticator({ children }) {
    const { loggedIn, loginError, loading } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    if (loggedIn) {
        return <Navigate to="/user" />
    }

    return (
        <>
            {loginError ? (
                <div className="loginError">
                    <div>
                        <b>Incorrect username or password</b>
                        <button onClick={() => dispatch(hideLoginState())}>
                            Ok
                        </button>
                    </div>
                </div>
            ) : null}
            {loading ? (
                <div className="loginError">
                    <h1>loading...</h1>
                </div>
            ) : null}
            <Outlet />
        </>
    )
}
