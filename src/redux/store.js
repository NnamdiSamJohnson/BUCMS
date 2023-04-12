import storage from "redux-persist/lib/storage"
import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import thunk from "redux-thunk"
import userReducer from "./userReducer"

const persistConfig = {
    key: "root",
    storage,
    blacklist: [
        "loginError",
        "loggedIn",
        "admin",
        "student",
        "staff",
        "sidebar",
        "loading",
        "studentComplaints",
        "complaints",
    ],
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
    reducer: { user: persistedReducer },
    middleware: [thunk],
})

export const persistor = persistStore(store)
