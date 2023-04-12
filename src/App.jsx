import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import AdminHomePage from "./pages/LoggedInStack/AdminHomePage"
import AdminLoginPage from "./pages/LoggedOutStack/AdminLoginPage"
import LandingPage from "./pages/LoggedOutStack/LandingPage"
import StaffLoginPage from "./pages/LoggedOutStack/StaffLoginPage"
import StudentLoginPage from "./pages/LoggedOutStack/StudentLoginPage"
import StaffHomePage from "./pages/LoggedInStack/StaffHomePage"
import StudentHomePage from "./pages/LoggedInStack/StudentHomePage"
import NotFound from "./pages/NotFound"
import LoggedInAuthenticator from "./pages/LoggedInAuthenticator"
import LoggedOutAuthenticator from "./pages/LoggedOutAuthenticator"
import ComplaintsDetailsPage from "./pages/LoggedInStack/ComplaintsDetailsPage"
import StudentComplaintPage from "./pages/LoggedInStack/StudentComplaintPage"
import AdminComplaintsPage from "./pages/LoggedInStack/AdminComplaintsPage"

function App() {
    const { admin, student, staff } = useSelector((state) => state.user)
    return (
        <>
            <Routes>
                <Route path="/" element={<LoggedOutAuthenticator />}>
                    <Route index element={<LandingPage />} />
                    <Route
                        path="login/student"
                        element={<StudentLoginPage />}
                    />
                    <Route path="login/admin" element={<AdminLoginPage />} />
                    <Route path="login/staff" element={<StaffLoginPage />} />
                </Route>

                <Route path="/user" element={<LoggedInAuthenticator />}>
                    {student ? (
                        <>
                            <Route index element={<StudentHomePage />} />
                            <Route
                                path="complaint"
                                element={<StudentComplaintPage />}
                            />
                        </>
                    ) : null}
                    {admin ? (
                        <>
                            <Route index element={<AdminHomePage />} />
                            <Route
                                path="complaint"
                                element={<AdminComplaintsPage />}
                            />
                            <Route
                                path="complaints-details"
                                element={<ComplaintsDetailsPage />}
                            />
                        </>
                    ) : null}
                    {staff ? (
                        <>
                            <Route index element={<StaffHomePage />} />
                            <Route
                                path="complaints-details"
                                element={<ComplaintsDetailsPage />}
                            />
                        </>
                    ) : null}
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App
