import React, { createContext, useContext } from "react";
import { Identity } from "../auth/newUser";

interface AuthContext {
  user: Identity;
}

const authContext = createContext<AuthContext | {}>({});

interface AuthProviderProps {
  user: Identity;
  children: any;
}

export const AuthProvider = ({ user, children }: AuthProviderProps) => {
  return (
    <authContext.Provider value={{ user }}>{children}</authContext.Provider>
  );
};

export const useAuth = () => {
  const { user } = useContext(authContext) as AuthContext;
  return { user };
};
