import type { AppProps } from "next/app";
import GlobalStyles from "../../styles";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/api/dev-pizza-api";
import { AuthProvider } from "@/contexts/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  );
}
