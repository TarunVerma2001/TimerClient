import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className=" ">
        <Header />

        <div className="background flex items-center justify-center h-screen w-full">
          <div className="text-2xl space-y-4 flex flex-col  text-blue-900  ">
            <h1
              onClick={() => router.push("/assignment1")}
              className="cursor-pointer"
            >
              Assignment 1
            </h1>
            <h1
              onClick={() => router.push("/assignment2")}
              className="cursor-pointer"
            >
              Assignment 2
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
