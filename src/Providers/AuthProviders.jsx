import React, { createContext } from "react";
export const AuthContext = createContext();
const AuthProviders = ({ children }) => {
  const user = { displayName: "Niloy Roy" };
  const authInfo = {
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
