import { createSlice, nanoid } from "@reduxjs/toolkit";
import {auth} from "@/firebase"
import { getDocs, collection, doc, updateDoc, deleteDoc, Timestamp } from "firebase/firestore";

const initialState ={
    todo: []
}

const created = Timestamp.fromDate(new Date())

const useruid = auth.currentUser ? auth.currentUser?.uid : null

// export const userinfo = auth.onAuthStateChanged((user) => {
//     if(user){
//        const useruid =  user.uid 
//         const userName = user.displayName
//     }else return "please login"
// })


export const todoSlice  = createSlice({
   
    name: "todoReducers",
    initialState,
    reducers : {
        addTodo: async (state, action) => {
            const addTask = {
                date: action.payload.Date,
                discription: action.payload.discription,
                created
            }
            state.todo.push(addTask)
            
        }

    }
})


export default todoSlice.reducer



