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
import { setupAPIClient } from "@/api/dev-pizza-api";
import { LIST_ORDERS } from "@/api/querys";
import { useState } from "react";

type ItemProps = {
  id: string;
  name: string;
  table: string;
  draft: boolean;
  status: boolean;
};

type OrderProps = {
  listOrders: ItemProps[];
};

export default function Dashboard({ listOrders }: OrderProps) {
  const [orders, setOrders] = useState(listOrders || []);

  function handleOpenModalView(id: string) {
    alert(`Clicou no id: ${id}`);
  }

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
          {orders.map((item) => (
            <OrderItem key={item.id}>
              <button onClick={() => handleOpenModalView(item.id)}>
                <Tag />
                <span>{item.table}</span>
              </button>
            </OrderItem>
          ))}
        </ListOrders>
      </Container>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx as any);
  const { data } = await apiClient.query({ query: LIST_ORDERS });

  return {
    props: {
      listOrders: data.listOrders,
    },
  };
});
