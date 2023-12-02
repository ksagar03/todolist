import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Head from "next/head";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
      <link rel="icon" href="/images/todo_favi.png" sizes="any" />
        <title>Todo list</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
