import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

export default function AdminAuthenticator({ children }) {
    const { admin } = useSelector((state) => state.user)
    if (!admin) {
        return <Navigate to="/user" />
    }
    return <Outlet />
}
