import React, { createContext, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  const authInfo = {
    user,
    handleGoogleSignIn,
    setUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
