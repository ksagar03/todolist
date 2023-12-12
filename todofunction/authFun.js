import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    useruid: null,
    username: ""
}

export const authSlice = createSlice({
    name: "authReducers",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            state.useruid = action.payload
            state.username = action.payload 
        },
        // clearuser: (state, action) => {
        //     state.user = null
        //     state.username ="Duest"
        // }
    }
})

export const {setUser} = authSlice.actions

export default authSlice.reducer