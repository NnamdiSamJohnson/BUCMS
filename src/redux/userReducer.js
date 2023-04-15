import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    loginError: false,
    loggedIn: checkLoggedIn(),
    admin: checkAdminLogin(),
    student: checkStudentLogin(),
    staff: checkStaffLogin(),
    sidebar: true,
    loading: false,
    feedbackPopup: false,
    feedbackReload: false,
    feedbackText: "",
    studentId: "",
    firstname: "",
    lastname: "",
    level: 0,
    matricNo: "",
    staffId: "",
    staffFacultyId: "",
    staffName: "",
    adminId: "",
    adminUsername: "",
    faculties: [],
    complaints: [],
    studentComplaints: [],
}

function checkLoggedIn() {
    const student = sessionStorage.getItem("student")
    const staff = sessionStorage.getItem("staff")
    const admin = sessionStorage.getItem("admin")
    if (student === "loggedIn" || admin === "loggedIn" || staff === "loggedIn")
        return true
    else return false
}

function checkStudentLogin() {
    const token = sessionStorage.getItem("student")
    if (token === "loggedIn") return true
    else return false
}

function checkStaffLogin() {
    const token = sessionStorage.getItem("staff")
    if (token === "loggedIn") return true
    else return false
}

function checkAdminLogin() {
    const token = sessionStorage.getItem("admin")
    if (token === "loggedIn") return true
    else return false
}

export const studentLogin = createAsyncThunk(
    "studentLogin",
    async (data, thunkAPI) => {
        try {
            let response = await fetch(
                "https://bu-complaints.onrender.com/student/login",
                {
                    method: "post",
                    body: JSON.stringify(data),
                    headers: { "Content-Type": "application/json" },
                }
            ).then((res) => res.json())
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(true)
        }
    }
)

export const staffLogin = createAsyncThunk(
    "staffLogin",
    async (data, thunkAPI) => {
        try {
            let response = await fetch(
                "https://bu-complaints.onrender.com/login/lecturer",
                {
                    method: "post",
                    body: JSON.stringify(data),
                    headers: { "Content-Type": "application/json" },
                }
            ).then((res) => res.json())
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(true)
        }
    }
)

export const adminLogin = createAsyncThunk(
    "adminLogin",
    async (data, thunkAPI) => {
        try {
            let response = await fetch(
                "https://bu-complaints.onrender.com/login/admin",
                {
                    method: "post",
                    body: JSON.stringify(data),
                    headers: { "Content-Type": "application/json" },
                }
            ).then((res) => res.json())
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(true)
        }
    }
)

export const registerStudent = createAsyncThunk(
    "registerStudent",
    async (data, thunkAPI) => {
        try {
            let response = await fetch(
                "https://bu-complaints.onrender.com/register/student",
                {
                    method: "post",
                    body: JSON.stringify(data),
                    headers: { "Content-Type": "application/json" },
                }
            ).then((res) => res.json())
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(true)
        }
    }
)

export const registerStaff = createAsyncThunk(
    "registerStaff",
    async (data, thunkAPI) => {
        try {
            let response = await fetch(
                "https://bu-complaints.onrender.com/register/lecturer",
                {
                    method: "post",
                    body: JSON.stringify(data),
                    headers: { "Content-Type": "application/json" },
                }
            ).then((res) => res.json())
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(true)
        }
    }
)

export const makeComplaint = createAsyncThunk(
    "makeComplaint",
    async (data, thunkAPI) => {
        try {
            let response = await fetch(
                "https://bu-complaints.onrender.com/complaint",
                {
                    method: "post",
                    body: JSON.stringify(data),
                    headers: { "Content-Type": "application/json" },
                }
            ).then((res) => res.json())
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(true)
        }
    }
)

export const makeComment = createAsyncThunk(
    "makeComment",
    async (data, thunkAPI) => {
        try {
            let response = await fetch(
                "https://bu-complaints.onrender.com/comment",
                {
                    method: "post",
                    body: JSON.stringify(data),
                    headers: { "Content-Type": "application/json" },
                }
            ).then((res) => res.json())
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(true)
        }
    }
)

export const getAllComplaints = createAsyncThunk(
    "getAllComplaints",
    async (data, thunkAPI) => {
        try {
            let response = await fetch(
                "https://bu-complaints.onrender.com/complaint"
            ).then((res) => res.json())
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(true)
        }
    }
)

export const getAllFaculties = createAsyncThunk(
    "getAllFaculties",
    async (data, thunkAPI) => {
        try {
            let response = await fetch(
                "https://bu-complaints.onrender.com/faculty"
            ).then((res) => res.json())
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(true)
        }
    }
)

export const deleteComplaint = createAsyncThunk(
    "deleteComplaint",
    async (data, thunkAPI) => {
        try {
            let response = await fetch(
                `https://bu-complaints.onrender.com/complaint/${data}`,
                {
                    method: "delete",
                }
            ).then((res) => res.json())
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(true)
        }
    }
)

export const updateComplaint = createAsyncThunk(
    "updateComplaint",
    async (data, thunkAPI) => {
        try {
            let response = await fetch(
                `https://bu-complaints.onrender.com/complaint/${data.id}`,
                {
                    method: "PUT",
                    body: JSON.stringify(data.body),
                    headers: { "Content-Type": "application/json" },
                }
            ).then((res) => res.json())
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(true)
        }
    }
)

export const getStudentComplaints = createAsyncThunk(
    "getStudentComplaints",
    async (data, thunkAPI) => {
        try {
            let response = await fetch(
                `https://bu-complaints.onrender.com/complaint/${data}/complaints`
            ).then((res) => res.json())
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(true)
        }
    }
)

const userReducer = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            state.loggedIn = false
            sessionStorage.clear()
        },
        showSidebar: (state) => {
            state.sidebar = true
        },
        hideSidebar: (state) => {
            state.sidebar = false
        },
        hideLoginState: (state) => {
            state.loginError = false
        },
        openFeedbackPopup: (state, action) => {
            state.feedbackPopup = true
            state.feedbackText = action.payload
        },
        closeFeedbackPopup: (state) => {
            state.feedbackPopup = false
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(studentLogin.pending, (state) => {
                state.loading = true
            })
            .addCase(studentLogin.fulfilled, (state, action) => {
                if (action.payload._id) {
                    state.loginError = false
                    state.loading = false
                    state.loggedIn = true
                    state.student = true
                    state.admin = false
                    state.staff = false
                    sessionStorage.setItem("student", "loggedIn")
                    state.studentId = action.payload._id
                    state.firstname = action.payload.firstname
                    state.lastname = action.payload.lastname
                    state.level = action.payload.level
                    state.matricNo = action.payload.matricNo
                } else {
                    state.loading = false
                    state.loginError = true
                    state.loggedIn = false
                    state.student = false
                }
            })
            .addCase(studentLogin.rejected, (state) => {
                state.loading = false
                state.loginError = true
                state.loggedIn = false
                state.student = false
            })
            .addCase(staffLogin.pending, (state) => {
                state.loading = true
            })
            .addCase(staffLogin.fulfilled, (state, action) => {
                if (action.payload._id) {
                    state.loginError = false
                    state.loading = false
                    state.loggedIn = true
                    state.student = false
                    state.admin = false
                    state.staff = true
                    sessionStorage.setItem("staff", "loggedIn")
                    state.staffName = action.payload.name
                    state.staffId = action.payload._id
                    state.staffFacultyId = action.payload?.faculty
                } else {
                    state.loginError = true
                    state.loading = false
                    state.loggedIn = false
                    state.staff = false
                }
            })
            .addCase(staffLogin.rejected, (state) => {
                state.loginError = true
                state.loading = false
                state.loggedIn = false
                state.staff = false
            })
            .addCase(adminLogin.pending, (state) => {
                state.loading = true
            })
            .addCase(adminLogin.fulfilled, (state, action) => {
                if (action.payload._id) {
                    state.loginError = false
                    state.loading = false
                    state.loggedIn = true
                    state.student = false
                    state.admin = true
                    state.staff = false
                    sessionStorage.setItem("admin", "loggedIn")
                    state.adminUsername = action.payload.username
                    state.adminId = action.payload._id
                } else {
                    state.loginError = true
                    state.loading = false
                    state.loggedIn = false
                    state.staff = false
                }
            })
            .addCase(adminLogin.rejected, (state) => {
                state.loginError = true
                state.loading = false
                state.loggedIn = false
                state.staff = false
            })
            .addCase(registerStudent.pending, (state) => {
                state.loading = true
            })
            .addCase(registerStudent.fulfilled, (state, action) => {
                state.loading = false
                if (action.payload._id) {
                    state.feedbackPopup = true
                    state.feedbackReload = true
                    state.feedbackText = "Student registered successfully"
                } else {
                    state.feedbackPopup = true
                    state.feedbackText = "Error registering student"
                }
            })
            .addCase(registerStudent.rejected, (state) => {
                state.loading = false
                state.feedbackPopup = true
                state.feedbackText = "Error registering student"
            })
            .addCase(registerStaff.pending, (state) => {
                state.loading = true
            })
            .addCase(registerStaff.fulfilled, (state, action) => {
                state.loading = false
                if (action.payload._id) {
                    state.feedbackPopup = true
                    state.feedbackReload = true
                    state.feedbackText = "Staff registered successfully"
                } else {
                    state.feedbackPopup = true
                    state.feedbackText = "Error registering staff"
                }
            })
            .addCase(registerStaff.rejected, (state) => {
                state.loading = false
                state.feedbackPopup = true
                state.feedbackText = "Error registering staff"
            })
            .addCase(makeComplaint.pending, (state) => {
                state.loading = true
            })
            .addCase(makeComplaint.fulfilled, (state, action) => {
                if (action.payload._id) {
                    state.loading = false
                    state.feedbackPopup = true
                    state.feedbackReload = true
                    state.feedbackText = "Complaint registered"
                } else {
                    state.loading = false
                    state.feedbackPopup = true
                    state.feedbackText = "Error making complaint"
                }
            })
            .addCase(makeComplaint.rejected, (state) => {
                state.loading = false
                state.feedbackPopup = true
                state.feedbackText = "Error making complaint"
            })
            .addCase(makeComment.pending, (state) => {
                state.loading = true
            })
            .addCase(makeComment.fulfilled, (state, action) => {
                if (action.payload._id) {
                    state.loading = false
                    state.feedbackPopup = true
                    state.feedbackReload = true
                    state.feedbackText = "Comment registered"
                } else {
                    state.loading = false
                    state.feedbackPopup = true
                    state.feedbackText = "Error making comment"
                }
            })
            .addCase(makeComment.rejected, (state) => {
                state.loading = false
                state.feedbackPopup = true
                state.feedbackReload = true
                state.feedbackText = "Error making comment"
            })
            .addCase(getAllComplaints.pending, (state) => {
                state.loading = true
            })
            .addCase(getAllComplaints.fulfilled, (state, action) => {
                state.loading = false
                if (action.payload) {
                    state.complaints = action.payload
                } else {
                    state.feedbackPopup = true
                    state.feedbackText = "Couldn't fetch complaints"
                }
            })
            .addCase(getAllComplaints.rejected, (state) => {
                state.loading = false
                state.feedbackPopup = true
                state.feedbackText = "Couldn't fetch complaints"
            })
            .addCase(getAllFaculties.pending, (state) => {
                state.loading = true
            })
            .addCase(getAllFaculties.fulfilled, (state, action) => {
                state.loading = false
                if (action.payload) {
                    state.faculties = action.payload
                } else {
                    state.feedbackPopup = true
                    state.feedbackText = "Couldn't fetch faculties"
                }
            })
            .addCase(getAllFaculties.rejected, (state) => {
                state.loading = false
                state.feedbackPopup = true
                state.feedbackText = "Couldn't fetch faculties"
            })
            .addCase(deleteComplaint.pending, (state) => {
                state.loading = true
            })
            .addCase(deleteComplaint.fulfilled, (state, action) => {
                state.loading = false
                if (action.payload !== "Complaint has been deleted...") {
                    state.feedbackPopup = true
                    state.feedbackText = "Error deleting complaint"
                } else {
                    state.feedbackPopup = true
                    state.feedbackReload = true
                    state.feedbackText = "Complaint deleted"
                }
            })
            .addCase(deleteComplaint.rejected, (state) => {
                state.loading = false
                state.feedbackPopup = true
                state.feedbackText = "Error deleting complaint"
            })
            .addCase(updateComplaint.pending, (state) => {
                state.loading = true
            })
            .addCase(updateComplaint.fulfilled, (state, action) => {
                state.loading = false
                if (action.payload._id) {
                    state.feedbackPopup = true
                    state.feedbackReload = true
                    state.feedbackText = "Complaint updated"
                    window.location.assign("/user")
                } else {
                    state.feedbackPopup = true
                    state.feedbackText = "Error updating complaint"
                }
            })
            .addCase(updateComplaint.rejected, (state) => {
                state.loading = false
                state.feedbackPopup = true
                state.feedbackText = "Error updating complaint"
            })
            .addCase(getStudentComplaints.pending, (state) => {
                state.loading = true
            })
            .addCase(getStudentComplaints.fulfilled, (state, action) => {
                state.loading = false
                if (action.payload) {
                    state.studentComplaints = action.payload.complaint
                } else {
                    state.feedbackPopup = true
                    state.feedbackText = "Error loading student complaints"
                }
            })
            .addCase(getStudentComplaints.rejected, (state) => {
                state.loading = false
                state.feedbackPopup = true
                state.feedbackText = "Error loading student complaints"
            })
    },
})

export const {
    logout,
    showSidebar,
    hideSidebar,
    hideLoginState,
    closeFeedbackPopup,
    openFeedbackPopup,
} = userReducer.actions

export default userReducer.reducer
