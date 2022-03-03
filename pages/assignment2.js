import Image from "next/image";
import React, { useState } from "react";
import Header from "../components/Header";
import Modal from "../components/modal";
import { getGitInfo } from "../utils/api";
import { format } from "date-fns";

function Assignment2() {
  const [username, setUsername] = useState();
  const gitInfo = async () => {
    const res = await getGitInfo(username);
    setInfo(res);
  };

  const clearInfo = () => {
    setInfo(null);
  };

  const [info, setInfo] = useState();

  return (
    <>
      {info && (
        <Modal title="Your Git Information" onClose={clearInfo}>
          <div className="pt-5">
            <div className="flex space-x-4 items-center">
            <h1 className="text-gray-800 text-lg">Avatar: </h1>
              <div className="relative h-10 w-10 rounded-full border border-gray-300 ">
                <Image
                  src={info.avatar_url}
                  alt="avatar"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-3 mt-3">
              <h1 className="text-gray-800 text-lg">UserName: {info.login}</h1>
              <h1 className="text-gray-800 text-lg">Name: {info.name}</h1>
              <h1 className="text-gray-800 text-lg">
                No. of Public Reposetories: {info.public_repos}
              </h1>
              <h1 className="text-gray-800 text-lg">
                No. of Public Gists: {info.public_gists}
              </h1>
              <h1 className="text-gray-800 text-lg">
                Profile Created At: {format(new Date(info.created_at),"dd MMMM yy" )}
              </h1>
            </div>
          </div>
        </Modal>
      )}
      <Header />
      <div className="background bg-red-400 py-16 h-screen w-full flex items-center justify-center">
        <div className=" w-[400px] px-16 py-8 bg-white rounded-xl shadow-xl">
          <h1 className="flex justify-center mb-4">GitHub Info</h1>
          <div className="flex flex-col space-y-4">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Git username"
              className="outline-none border-gray-400 border-2 px-4 py-1 rounded-xl w-full"
            />
            <h1
              onClick={gitInfo}
              className="bg-blue-900 px-4 py-1 rounded-xl text-white flex justify-center transform transition ease-out duration-150 hover:scale-105 hover:shadow-xl shadow-md cursor-pointer"
            >
              Get All info
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Assignment2;
