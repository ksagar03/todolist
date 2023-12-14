import { createSlice, nanoid } from "@reduxjs/toolkit";
import { db, auth } from "@/firebase";
import {
  getDocs,
  collection,
  doc,
  updateDoc,
  deleteDoc,
  Timestamp,
  setDoc,
} from "firebase/firestore";
import { useSelector } from "react-redux";

const initialState = {
  todo: [],
};
const ifnouser = "oJu5LSiz6E9fGzx0vtfx";
const created = Timestamp.fromDate(new Date());
// const useruid = useSelector((state) => state.authdata.useruid)
const useruid = auth.currentUser ? auth.currentUser?.uid : null;
const tofetchdata = () => {
  const usercollection = collection(db, "users");
  const userdoc = doc(usercollection, useruid);
  const usertodo = collection(userdoc, "todo list data");
  return usertodo;
};

export const todoSlice = createSlice({
  name: "todoReducers",
  initialState,
  reducers: {
    addTodo: async (state, action) => {
      if (useruid) {
        const tofetch = tofetchdata();
        const usertododoc = doc(tofetch, nanoid());
        const addTask = {
          date: action.payload.date,
          discription: action.payload.discription,
          created,
        };
        await setDoc(usertododoc, { addTask });
      } else {
        state.todo("Please login to add the data");
      }
    },
    Togetdata: (state, action) => {},
    Toremovetodo: (state, action) => {
      state.todo = state.todo((todo) => action.payload !== todo.id);
    },
  },
});

export const { addTodo, Toremovetodo } = todoSlice.actions;

export default todoSlice.reducer;
