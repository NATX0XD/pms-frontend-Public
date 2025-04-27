"use client";
import { getSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({ accessToken: null, profile: null });

let accessTokenCache = null;
export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setAccessToken(session?.access_token);
      setProfile(session?.user);
      accessTokenCache = session?.access_token;
    };
    fetchSession();
  }, []);

  return (
    <AuthContext.Provider value={{ accessToken, profile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const getAccessToken = () => accessTokenCache;
export const removeAccessToken = () => (accessTokenCache = null);
