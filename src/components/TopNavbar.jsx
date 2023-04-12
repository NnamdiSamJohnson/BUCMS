import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import "../../src/App.scss"

export default function TopNavbar() {
    const route = window.location.pathname
    const [header, setHeader] = useState("Dashboard")
    const { staff } = useSelector((state) => state.user)

    useEffect(() => {
        if (staff) setHeader("Complaint")
        else if (route === "/user") {
            setHeader("Dashboard")
        } else if (route === "/user/users") {
            setHeader("Users")
        } else if (route === "/user/complaint") {
            setHeader("Complaint")
        }
    }, [route, staff])

    function handleSideNav() {
        let sidenav = document.getElementById("Sidenav")
        sidenav.style.display = "block"
    }

    return (
        <div className="Topnav">
            <div className="topnav-cont">
                <FontAwesomeIcon
                    onClick={handleSideNav}
                    className="nav-control"
                    icon={faBars}
                />
                <h2>{header}</h2>

                <input placeholder="search dashboard..." />

                <div className="nav-end">
                    <img src="/images/topnav-img.svg" alt="profile-pic" />
                    <div>
                        <b>
                            Status <FontAwesomeIcon icon={faChevronDown} />
                        </b>
                        <span>Online</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
