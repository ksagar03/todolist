import React, { useEffect } from "react";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc ,collection, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";

const AddNewTodo = () => {
  const router = useRouter();
  // let useruid
  // const auth = getAuth()
  // if (auth.currentUser){
  //  useruid = auth.currentUser.uid
  //   console.log(useruid)
  //   // console.log(auth.currentUser.displayName)
  // }

  const [gettododata, setGettododata] = useState({
    date: "",
    discription: "",
  });
  const [errormsg, setErrormsg] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();

    if (auth.currentUser) {
      if (!gettododata.date || !gettododata.discription) {
        setErrormsg("please enter all the fields");
      } else {
        console.log(gettododata);
        const useruid = auth.currentUser?.uid;
        setErrormsg("");
        const usercollection = collection(db, "users");
        const userdoc = doc(usercollection, useruid);
        await setDoc(userdoc, { gettododata }).catch((error) =>
          setErrormsg(error.message)
        );
      }
    }
  };
  return (
    <section className="text-gray-400 bg-gray-900 body-font ">
      <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center items-center">
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-10 flex flex-col w-1/2 mt-10 md:mt-0">
          <h2 className="text-white text-lg font-large title-font mb-5">
            Add New Todo
          </h2>
          <div className="relative mb-4">
            <label
              for="full-name"
              className="leading-7 text-base text-gray-400"
            >
              Date
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) =>
                setGettododata((prev) => ({ ...prev, date: e.target.value }))
              }
            />
          </div>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-base text-gray-400">
              Discription
            </label>
            <textarea
              rows="4"
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-5 transition-colors duration-200 ease-in-out"
              onChange={(e) =>
                setGettododata((prev) => ({
                  ...prev,
                  discription: e.target.value,
                }))
              }
            />
          </div>
          <button
            type="button"
            className="text-white bg-indigo-500 border-0 py-2 px-8 w-fit m-auto focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!auth.currentUser ? true : false}
            onClick={handlesubmit}
          >
            Add Todo
          </button>
          <p className="text-center text-red-500">{errormsg}</p>
        </div>
      </div>
    </section>
  );
};

export default AddNewTodo;
