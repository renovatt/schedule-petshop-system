import React from "react";
import Router from "next/router";
import Loading from "@/pages/loading";
import { setCookie, destroyCookie, parseCookies } from 'nookies';
import { AuthContextType, AuthProviderProps, SignInData, User } from "./types";
import { getUserIdFromToken } from "@/services";
import { gettingUserById, sendingLoginFormToDatabase } from "@/services/user";

export const AuthContext = React.createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderProps) {
  const { ['@nextauth-token']: token } = parseCookies();
  const [isToken, setIsToken] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [user, setUser] = React.useState<User | null>(null);
  const isAuthenticated = !!user;

  async function signIn({ email, password }: SignInData) {
    setIsLoading(true);
    const { response, error } = await sendingLoginFormToDatabase({ email, password })
    if (response) {
      setUser(response?.user)
      setIsToken(response?.token)
      setCookie(undefined, '@nextauth-token', response.token, {
        maxAge: 60 * 60 * 8, // 8 hours
        path: '/',
      });
      Router.push('/dashboard');

    }
    setIsLoading(false)
    return { response, error }
  }

  React.useEffect(() => {
    if (token) {
      const userId = getUserIdFromToken(token)
      setIsLoading(true);
      setIsToken(token)
      gettingUserById(userId as string, isToken)
        .then((res) => {
          setUser(res?.response?.user);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [token]);

  const signOut = () => {
    setUser(null);
    setIsToken('');
    destroyCookie(undefined, '@nextauth-token');
    Router.push('/');
  };

  const contextValue: AuthContextType = {
    user,
    signIn,
    signOut,
    isAuthenticated,
    isLoading,
    isToken,
  }

  if (isLoading) return <Loading />;

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}