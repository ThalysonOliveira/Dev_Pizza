import { AUTHENTICATION, CREATE_USER } from "@/api/querys";
import { useMutation } from "@apollo/client";
import Router from "next/router";
import { ReactNode, createContext, useState } from "react";
import { toast } from "react-toastify";

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SigInProps) => Promise<void>;
  signOut: () => void;
  signUp: (data: SignUpProps) => Promise<void>;
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

type SignUpProps = {
  input: {
    name: string;
    email: string;
    password: string;
  };
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const isAuthenticated = !!user;
  const [authentication] = useMutation(AUTHENTICATION);
  const [createUser] = useMutation(CREATE_USER);

  async function signIn({ input: { email, password } }: SigInProps) {
    authentication({
      variables: { input: { email, password } },
    })
      .then((data) => {
        localStorage.setItem("token", JSON.stringify(data.data.authentication));
        //TODO: Inserir o Authorization bearer token
        Router.push("/dashboard");
        toast.success("Usuário logado com sucesso.");
      })
      .catch((error) => toast.error(error.message));
  }

  function signOut() {
    localStorage.removeItem("token");
  }

  async function signUp({ input: { name, email, password } }: SignUpProps) {
    createUser({
      variables: {
        input: {
          name,
          email,
          password,
        },
      },
    })
      .then((_data) => {
        Router.push("/");
        toast.success("Usuário cadastrado com sucesso.");
      })
      .catch((error) => toast.error(error.message));
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, signOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
}
