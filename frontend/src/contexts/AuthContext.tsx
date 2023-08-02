import { AUTHENTICATION } from "@/api/querys";
import { useMutation } from "@apollo/client";
import Router from "next/router";
import { ReactNode, createContext, useState } from "react";
import { toast } from "react-toastify";

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SigInProps) => Promise<void>;
  signOut: () => void;
};

type SigInProps = {
  input: {
    email: string;
    password: string;
  };
};

type UserProps = {
  id: string;
  name: string;
  email: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const isAuthenticated = !!user;
  const [authentication] = useMutation(AUTHENTICATION);

  async function signIn({ input: { email, password } }: SigInProps) {
    authentication({
      variables: { input: { email, password } },
    })
      .then((data) => {
        localStorage.setItem("token", JSON.stringify(data.data.authentication));
        //TODO: Inserir o Authorization bearer token
        Router.push("/dashboard");
        toast.success("Usuário logado com sucesso!");
      })
      .catch((error) => toast.error(error.message));
  }

  function signOut() {
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
