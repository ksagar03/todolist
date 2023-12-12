import { configureStore } from "@reduxjs/toolkit";
import authReducers  from "@/todofunction/authFun"
import todoReducers from "@/todofunction/TodoFun"


export const store = configureStore({
    reducer: {
        todolist: todoReducers,
        authdata : authReducers
    } 
})