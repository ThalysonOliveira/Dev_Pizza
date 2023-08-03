import Head from "next/head";
import { canSSRAuth } from "../../utils/canSSRAuth";
import { Header } from "@/components/ui/Header";

export default function Dashboard() {
  return (
    <>
      <Head>Painel - Dev Pizza</Head>
      <Header />
      
      <h1>Welcome to dashboard</h1>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
