import Image from "next/image";
// import Video from "next-video"
// import {second} from "@/videos/second.mp4.json"
import { Inter } from "next/font/google";
import Todolistview from "@/components/Todolistview";
import { useState, useEffect } from "react";
import { db, useruid } from "@/firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import { data } from "autoprefixer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [gettodolist, setGettodolist] = useState([]);
  const [errormsg , setErrormsg] = useState("")
  useEffect(() => {
    //  this useeffect has been used to excute the below code only one time as i don't want to request the data base when this page renders
    const tofetchuserdata = async () => {
      console.log(useruid)
      if (useruid) {
        const usercollection = collection(db, "users");
        const userDocs = doc(usercollection, useruid);
        const usertodolist = collection(userDocs, "todo list data");
        try{

        const fetchdata = await getDocs(usertodolist);
        console.log(fetchdata)
        setGettodolist(
          fetchdata.docs.map((values) => ({
            id: values.id,
            data: values.data(),
          }))
        );
        } catch(error) {
          setErrormsg(error)
        }
      }else{
        setGettodolist([])
        setErrormsg("Please login to view your todo list ")
      }
    };
    tofetchuserdata();
  },[]);
  
  console.log(gettodolist)
  console.log(errormsg)
  return (
    <section className="text-gray-400 bg-[url('/images/144565.jpg')] bg-no-repeat bg-cover body-font">
      {/* <Video  className=" min-w-full min-h-full absolute object-cover" src={second}>
        </Video> */}

      <div className="container px-5 py-52 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -m-4">
          <div className="p-2 lg:w-10/12 md:w-10/12">
            {useruid ? gettodolist.map((data) => {<Todolistview date={data.data.gettododata.date} disciption={data.data.gettododata.disciption}/>})
             : <h1 className="text-white" >{errormsg}</h1>}
          </div>
        </div>
      </div>
    </section>
  );
}
