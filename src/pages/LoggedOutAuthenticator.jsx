import { useDispatch, useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { hideLoginState } from "../redux/userReducer"
import Loading from "../components/Loading"

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
            {loading ? <Loading /> : null}
            <Outlet />
        </>
    )
}
