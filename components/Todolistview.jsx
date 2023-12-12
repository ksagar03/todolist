import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { db, auth } from "@/firebase";
import { IconButton } from "@mui/material";
import { doc, collection, deleteDoc } from "firebase/firestore";
const Todolistview = ({date, discription, id}) => {
  const useruid = auth.currentUser?.uid
  const usercollection = collection(db, "users");
  const userDocs = doc(usercollection, useruid);
  const usertodolist = collection(userDocs, "todo list data");
 
 const toremovetodolist =  async (id) => {
    const deletetodo  = doc(usertodolist, id)
      await deleteDoc(deletetodo)
  }
  
  
  return (
    <div className="flex border-2 rounded-lg border-gray-800 px-5 m-3 sm:flex-row hover:border-indigo-500 ">
      <div className=" flex-auto">
        <h2 className="text-white text-lg title-font font-medium mb-3">
          {date}
        </h2>
        <p className="leading-relaxed text-base">
          {discription}
        </p>
       
        <div className="-mx-3">
        <IconButton sx={{color: "red"}} onClick={e => toremovetodolist(id)}>
        <DeleteIcon/>
        </IconButton>
        <IconButton sx={{color: "#980DFF"}}>
        <EditIcon className=" "/>
        </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Todolistview;
