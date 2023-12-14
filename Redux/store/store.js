import { configureStore } from "@reduxjs/toolkit";
import authReducers from "@/Redux/store/todofunction/authFun";
import todoReducers from "@/Redux/store/todofunction/TodoFun";

export const store = configureStore({
  reducer: {
    todolist: todoReducers,
    authdata: authReducers,
  },
});
