import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import Sidenav from "../components/Sidenav"
import { getAllComplaints, getAllFaculties } from "../redux/userReducer"

export default function LoggedInAuthenticator({ children }) {
    const { loggedIn, sidebar } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllComplaints())
        dispatch(getAllFaculties())
    }, [dispatch])

    if (!loggedIn) {
        return <Navigate to="/" />
    }
    return (
        <div className="LoggedInAuthenticator">
            {sidebar ? <Sidenav /> : null}
            <Outlet />
        </div>
    )
}
