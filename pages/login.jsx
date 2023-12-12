import React from "react";
import Link from "next/link";
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
const Login = () => {
  const router = useRouter();
  const [erromsg, setErrormsg] = useState("");
  const [logindata, setLogindata] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
    if (!logindata.email || !logindata.password) {
      setErrormsg("Please enter all the fields");
      return;
    } else setErrormsg("");
    signInWithEmailAndPassword(auth, logindata.email, logindata.password)
      .then((UserCredential) => {
        console.log(UserCredential.user);
        router.push("/");
      })
      .catch((error) => setErrormsg(error.message));
  };
  return (
    <section  className="text-gray-400 bg-gray-900 body-font bg-[url('/images/2.jpg')] bg-no-repeat bg-cover bg-center">
      <div style={{height: "100dvh"}} className="container px-5 py-24 mx-auto flex flex-wrap justify-center items-center">
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-10 flex flex-col w-1/3 mt-10 md:mt-0 resize-none">
          <h2 className="text-white font-bold text-center text-2xl title-font mb-5">
            Login
          </h2>
          <div className="relative mb-4">
            <label
              for="full-name"
              className="leading-7 text-base text-gray-400"
            >
              Email
            </label>
            <input
              placeholder="Please enter your Email"
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) =>
                setLogindata((prevdata) => ({
                  ...prevdata,
                  email: e.target.value,
                }))
              }
            />
          </div>
          <div className="relative mb-4">
            <label for="password" className="leading-7 text-base text-gray-400">
              Password
            </label>
            <input
              placeholder="Please enter your Password"
              type="password"
              id="password"
              name="password"
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) =>
                setLogindata((prevdata) => ({
                  ...prevdata,
                  password: e.target.value,
                }))
              }
            />
          </div>
          <button
            className="text-white bg-indigo-500 border-0 py-2 px-8 w-fit m-auto focus:outline-none hover:bg-indigo-600 rounded text-lg mt-2"
            onClick={handleLogin}
          >
            Login
          </button>
          <p className=" text-rose-600 text-center mt-1">{erromsg}</p>
          <p className="text-white text-center mt-3">
            You don't have a account?{" "}
            <Link className=" hover:text-yellow-400" href={"/signin"}>
              Signup
            </Link>
          </p>
          <Link
            className="text-center text-white hover:text-indigo-300 -mb-5"
            href={"/login"}
          >
            Forgot Password?
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
