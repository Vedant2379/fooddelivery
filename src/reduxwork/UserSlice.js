import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";

const initialState = {
    UserData: {},
    isRegistered: false,
    isLogedin: false
}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            state.UserData = {};
            state.isLogedin = false;
        },

        register: (state, action) => {
            state.UserData = action.payload;
            state.isRegistered = true;
        },

        login: (state, action) => {
            state.UserData = action.payload;
            state.isLogedin = true;
        }
    }
})

export const { login, logout, register } = UserSlice.actions
export default UserSlice.reducer