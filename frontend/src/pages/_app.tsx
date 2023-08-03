import type { AppProps } from "next/app";
import GlobalStyles from "../../styles";
import { ApolloProvider } from "@apollo/client";
import { setupAPIClient } from "@/api/dev-pizza-api";
import { AuthProvider } from "@/contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={setupAPIClient()}>
      <AuthProvider>
        <GlobalStyles />
        <Component {...pageProps} />
        <ToastContainer />
      </AuthProvider>
    </ApolloProvider>
  );
}
