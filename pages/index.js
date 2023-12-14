import Image from "next/image";
// import Video from "next-video"
// import {second} from "@/videos/second.mp4.json"
import Todolistview from "@/components/Todolistview";
import { useState, useEffect } from "react";
import { db, auth } from "@/firebase";
import { getDocs, collection, doc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/Redux/store/todofunction/authFun";

export default function Home() {
  const [gettodolist, setGettodolist] = useState([]);
  const [errormsg, setErrormsg] = useState("");

  const dispatch = useDispatch();

  // let useruid = auth.currentUser ? auth.currentUser?.uid : null;
  let useruid = useSelector((state) => state.authdata?.useruid);

  useEffect(() => {
    //  this useeffect has been used to excute the below code only one time as i don't want to request the data base when this page renders
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setUser({
            user: user,
            useruid: user.uid,
            username: user.displayName,
          })
        );
      } else {
        dispatch(
          setUser({
            user: null,
            useruid: null,
            username: "Guest",
          })
        );
      }
    });

    const tofetchuserdata = async () => {
      console.log(useruid);
      if (useruid) {
        const usercollection = collection(db, "users");
        const userDocs = doc(usercollection, useruid);
        const usertodolist = collection(userDocs, "todo list data");

        try {
          const fetchdata = await getDocs(usertodolist);
          console.log(fetchdata);
          setGettodolist(
            fetchdata.docs.map((values) => ({
              id: values.id,
              data: values.data(),
            }))
          );
        } catch (error) {
          setErrormsg(error);
        }
      } else {
        setGettodolist([]);
        setErrormsg("Please login to view your todo list ");
      }
    };
    tofetchuserdata();
  }, [auth.currentUser?.uid]);

  console.log(gettodolist);
  // console.log(errormsg);

  return (
    <section className="text-gray-400 body-font bg-[url('/images/144565.jpg')] bg-no-repeat bg-fixed bg-cover">
      {/* <Video  className=" min-w-full min-h-full absolute object-cover" src={second}>
        </Video> */}
      <div
        style={{ height: "100dvh" }}
        className="container px-5 py-24 mx-auto flex flex-wrap"
      >
        <div className="flex flex-wrap -m-4">
          <div className="p-3 lg:w-11/12 md:w-1/2">
            {useruid ? (
              gettodolist.map((value) => (
                <Todolistview
                  date={value.data.gettododata.date}
                  discription={value.data.gettododata.discription}
                  id={value.id}
                />
              ))
            ) : (
              <h1 className="text-white">{errormsg}</h1>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
