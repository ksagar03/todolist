import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { auth } from "@/pages/api/auth/firebase";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  const [isclicked, setIsclicked] = useState(false);
  const [username, setUsername] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.displayName);
      }
    });
  });
  const handlelogout = () => {
    auth.signOut();
    setIsclicked(!isclicked);
    setUsername("");
    router.push(!username && "/login");
  };
  return (
    <div>
      <header className="text-gray-400 bg-slate-800 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <span className="flex title-font font-medium items-center text-white mb-2 md:mb-0">
            <Link href={"/"} className="ml-3 text-xl">
              Home
            </Link>
          </span>
          <nav className="md:ml-auto flex flex-wrap items-center justify-center ">
            <div className="relative mx-3">
              <button
                onClick={() => {
                  setIsclicked(!isclicked);
                }}
                className=" relative z-10 h-10 w-10 rounded-full overflow-hidden border-gray-600 mt-1 focus:outline-none focus:border-white"
              >
                <img
                  className="h-full w-full object-cover"
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagt3QqN7af1TmaYQkGM_GQB-NeHYMrEDUXg&usqp=CAU"
                  }
                />
              </button>
              {isclicked && (
                <button
                  onClick={() => setIsclicked(!isclicked)}
                  className="fixed  inset-0 w-full h-full bg-black opacity-50 cursor-default"
                ></button>
              )}
              {/* this above button is for closing the dropdown menu when user clicks outside the over lay area, inset-0 will set top , bottom , left, right to 0 */}
              {isclicked && (
                <div className="bg-white rounded-md py-2 w-40 shadow-lg absolute ">
                  <ul>
                    <div className="block px-4 py-2 text-green-900 ">
                      Hello {username ? username : "Guest"}
                    </div>
                    <li
                      onClick={handlelogout}
                      className="block px-4 py-2 rounded -mb-2 text-green-900 hover:bg-indigo-500 hover:text-yellow-200 cursor-pointer"
                    >
                      {username ? "LogOut" : "Login"}
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* <Link href={"/login"} className="mr-5 hover:text-white">
              Log In
            </Link> */}
            <Link href={"/AddTodo"} className="mr-5 hover:text-white">
              Add New Todo
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
