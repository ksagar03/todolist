import Link from "next/link"
import { useRouter } from "next/router"
import {auth} from "@/pages/api/auth/firebase"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useState } from "react"
const Signin = () => {
    const router = useRouter();
  const [erromsg, setErrormsg] = useState("");
  const [signindata, setSignindata] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSignin = (e) =>{
    e.preventDefault()
    if(!signindata.name || !signindata.email || !signindata.password){
        setErrormsg("Please enter all the fields")
        return
    }else setErrormsg("");
    
    createUserWithEmailAndPassword(auth, signindata.email, signindata.password).then((oncreation) => {
        updateProfile(oncreation.user,{
            displayName: signindata.name
        })
        router.push("/")

    }).catch((error) => setErrormsg(error.message))

  }
  return (
    <section className="text-gray-400 bg-gray-900 body-font bg-[url('/images/2.jpg')] bg-no-repeat bg-cover bg-center">
    <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center items-center">
      <div className="bg-gray-800 bg-opacity-50 rounded-lg p-10 flex flex-col w-1/3 mt-10 md:mt-0 resize-none">
        <h2 className="text-white font-bold text-center text-2xl title-font mb-5">Login</h2>
        <div className="relative mb-4">
            <label htmlFor="full-name" className="leading-7 text-base text-slate-50">Name</label>
            <input  placeholder="Please enter you Name" type="text"  name="email" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " onChange={(e) => setSignindata((prevdata) => ({...prevdata, name:e.target.value}))} />
        </div>
        <div className="relative mb-4">
          <label htmlFor="Email" className="leading-7 text-base text-slate-50">Email</label>
          <input placeholder='Please enter your Email' type="email" id="email" name="email" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  onChange={(e) => setSignindata((prevdata) => ({...prevdata, email:e.target.value}))} />
        </div>
        <div className="relative mb-4">
          <label htmlFor="password" className="leading-7 text-base text-slate-50 ">Password</label>
          <input placeholder='Please enter your Password' type="password" id="password" name="password" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  onChange={(e) => setSignindata((prevdata) => ({...prevdata, password:e.target.value}))} />
        </div>
        <button className="text-white bg-indigo-500 border-0 py-2 px-8 w-fit m-auto focus:outline-none hover:bg-indigo-600 rounded text-lg mt-2" onClick={handleSignin}>SignIn</button>
        <p className=" text-rose-500 text-cente mt-2">{erromsg}</p>
      </div>
    </div>
  </section>
  )
}

export default Signin
