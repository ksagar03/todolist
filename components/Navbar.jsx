import Image from "next/image";
import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <div>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-2 md:mb-0">
            <Image src={"/images/To Do List.gif"} width="25" height="25" />
            <Link href={"/"} className="ml-3 text-xl">Home</Link>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/login"} className="mr-5 hover:text-white">
              Log In
            </Link>
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
