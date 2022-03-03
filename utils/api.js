import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";
import { app as auth } from "../config/firebase";
const provider = new GoogleAuthProvider();
const axios = require("axios");

const api = axios.create({ baseURL: "https://api.github.com" });

export const signUpWithGoogle = (onLoad) => {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(token);
      const user = result.user;
      console.log(user);
      onLoad();
    })
    .catch((error) => {
      //   toast.error("Something went wrong!");
      const errorCode = error.code;
      const errorMessage = error.message;
      //! toast
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

export const getGitInfo = async (username) => {
  try {
    const res = await api.get(`/users/${username}`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    toast.error(`${err.response.data.message}`);
  }
};
