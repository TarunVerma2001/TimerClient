import React, { useState } from "react";
import Header from "../../components/Header";
import Modal from "../../components/modal";
import { FcGoogle } from "react-icons/fc";
import { signUpWithGoogle } from "../../utils/api";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

function Index() {

  const router = useRouter();
  const [signUpPopup, setSignUpPopup] = useState(false);
  const [signInPopup, setSignInPopup] = useState(false);

  const onCloseSignUp = () => {
    setSignUpPopup(false);
  };
  const onCloseSignIn = () => {
    setSignInPopup(false);
  };

  const onLoadSignUp = () => {
    onCloseSignUp();
    toast.success("Successfully Registered!!!");
  };

  const onLoadSignIn = () => {
    onCloseSignIn();
    toast.success("Successfully Logged In !!!");
  };

  return (
    <>
      {signUpPopup && (
        <div>
          <Modal title={"Sign Up"} onClose={onCloseSignUp}>
            <div className="py-8 px-4 flex justify-center items-center">
              <div className="space-y-4">
                <h1>Sign Up with Google</h1>
                <div className="flex justify-center">
                  <FcGoogle
                    onClick={() => signUpWithGoogle(onLoadSignUp)}
                    size={50}
                    className=" border-2 hover:bg-gray-200 p-2 rounded-full cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </Modal>
        </div>
      )}

      {signInPopup && (
        <div>
          <Modal title={"Sign In"} onClose={onCloseSignIn}>
            <div className="py-8 px-4 flex justify-center items-center">
              <div className="space-y-4">
                <h1>Log In with Google</h1>
                <div className="flex justify-center">
                  <FcGoogle
                    onClick={() => signUpWithGoogle(onLoadSignIn)}
                    size={50}
                    className=" border-2 hover:bg-gray-200 p-2 rounded-full cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </Modal>
        </div>
      )}

      <Header />
      <div className="background h-screen w-full flex justify-center items-center">
        <div className="flex text-white flex-col space-y-4 ">
          <h1
            onClick={() => setSignUpPopup(true)}
            className="bg-violet-800 rounded-xl flex justify-center shadow-sm hover:shadow-xl px-8 py-2 hover:scale-105 transform transition duration-150 ease-out cursor-pointer"
          >
            Sign Up
          </h1>
          <h1
            onClick={() => setSignInPopup(true)}
            className="bg-violet-800 rounded-xl px-8 shadow-sm hover:shadow-xl py-2 hover:scale-105 transform transition duration-150 ease-out flex justify-center  cursor-pointer"
          >
            Sign In
          </h1>
          <h1 onClick={() => router.push('/assignment1/timer')} className="bg-violet-800 rounded-xl shadow-sm hover:shadow-xl flex justify-center px-8 py-2 hover:scale-105 transform transition duration-150 ease-out cursor-pointer">
            Timer
          </h1>
        </div>
      </div>
    </>
  );
}

export default Index;
