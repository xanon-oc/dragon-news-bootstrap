import React, { createContext, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [pic, setPic] = useState("");
  const auth = getAuth(app);

  // login with google

  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  // login with github

  const gprovider = new GithubAuthProvider();
  const handleGitHubLogin = () => {
    return signInWithPopup(auth, gprovider);
  };

  // login with email password

  const loginHandler = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // register with email password

  const registerEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    handleGoogleSignIn,
    handleGitHubLogin,
    auth,
    setPic,
    pic,
    registerEmailPassword,
    setUser,
    loginHandler,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
