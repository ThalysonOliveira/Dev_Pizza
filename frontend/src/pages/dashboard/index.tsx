import Head from "next/head";
import { canSSRAuth } from "../../utils/canSSRAuth";
import { Header } from "@/components/ui/Header";
import {
  Container,
  HeaderContainer,
  ListOrders,
  OrderItem,
  Tag,
} from "./styles";
import { FiRefreshCcw } from "react-icons/fi";

export default function Dashboard() {
  return (
    <>
      <Head>Painel - Dev Pizza</Head>
      <Header />

      <Container>
        <HeaderContainer>
          <h1>Últimos pedidos</h1>
          <button>
            <FiRefreshCcw color="#3FFFA3" size={25} />
          </button>
        </HeaderContainer>

        <ListOrders>
          <OrderItem>
            <button>
              <Tag />
              <span>Mesa 30</span>
            </button>
          </OrderItem>
        </ListOrders>
      </Container>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {},
  };
});
