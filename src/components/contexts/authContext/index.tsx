import React from "react";
import Router from "next/router";
import { setCookie, destroyCookie, parseCookies } from 'nookies';
import { AuthContextType, AuthProviderProps, SignInData, User } from "./types";
import { gettingUserById, getUserIdFromToken, sendingLoginFormToDatabase } from "@/services";

export const AuthContext = React.createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = React.useState<User | null>(null);
  const isAuthenticated = !!user;

  async function signIn({ email, password }: SignInData) {
    const { response, error } = await sendingLoginFormToDatabase({ email, password })
    if (response) {
      setUser(response?.user)
      setCookie(undefined, '@nextauth-token', response.token, {
        maxAge: 60 * 60 * 8, // 8 hours
        path: '/',
      });
      Router.push('/dashboard');
    }
    return { response, error }
  }

  React.useEffect(() => {
    const { ['@nextauth-token']: token } = parseCookies();
    if (token) {
      const userId = getUserIdFromToken(token)
      gettingUserById(userId as string).then((res) => setUser(res?.response?.user))
    }
  }, [])

  const signOut = () => {
    setUser(null);
    destroyCookie(undefined, '@nextauth-token', { path: '/' });
    Router.push('/');
  };

  const contextValue: AuthContextType = {
    user,
    signIn,
    signOut,
    isAuthenticated,
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}