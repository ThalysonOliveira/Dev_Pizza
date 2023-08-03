import { AUTHENTICATION, CREATE_USER, DETAIL_USER } from "@/api/querys";
import { useMutation, useQuery } from "@apollo/client";
import Router from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { ReactNode, createContext, useEffect, useState } from "react";
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

export function signOut() {
  try {
    destroyCookie(undefined, "@nextauth.token");
    Router.push("/");
  } catch {
    console.log("erro ao deslogar");
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const isAuthenticated = !!user;
  const [authentication] = useMutation(AUTHENTICATION);
  const [createUser] = useMutation(CREATE_USER);
  const { error } = useQuery(DETAIL_USER);

  const { "@nextauth.token": token } = parseCookies();

  useEffect(() => {
    if (token && error) {
      signOut();
    }
  }, [error]);

  async function signIn({ input: { email, password } }: SigInProps) {
    authentication({
      variables: { input: { email, password } },
    })
      .then(({ data }) => {
        setCookie(undefined, "@nextauth.token", data.authentication, {
          maxAge: 60 * 60 * 24 * 30,
          path: "/",
        });
        Router.push("/dashboard");
        toast.success("Usuário logado com sucesso.");
      })
      .catch((error) => toast.error(error.message));
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
