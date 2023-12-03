import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Head from "next/head";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
      <link rel="icon" href="/images/todoicon.png" sizes="any" />
        <title>Todo List</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
